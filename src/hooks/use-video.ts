// useAutoplayOnView.ts
'use client';

import { useEffect, useRef } from 'react';

type Options = {
  /** 보이는 비율(0~1). 기본 0.5 = 50% 이상 보이면 재생 */
  threshold?: number;
  /** 교차 관찰 옵션 */
  root?: Element | null;
  rootMargin?: string;
  /** 탭/창이 숨겨지면 일시정지 (기본 true) */
  pauseWhenTabHidden?: boolean;
  /** 사용자 접근성: motion 줄이기 선호 시 자동재생 비활성 (기본 true) */
  respectReducedMotion?: boolean;
};

export function useVideo<T extends HTMLMediaElement>({
  threshold = 0.5,
  root = null,
  rootMargin = '0px',
  pauseWhenTabHidden = true,
  respectReducedMotion = true,
}: Options = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 접근성: 사용자 설정 시 자동재생 비활성
    const prefersReducedMotion =
      respectReducedMotion &&
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target !== el) continue;
          if (entry.isIntersecting) {
            el.play().catch(() => {
              /* autoplay 실패 무시 */
            });
          } else {
            el.pause();
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(el);

    const onVisibility = () => {
      if (!pauseWhenTabHidden) return;
      if (document.hidden) {
        el.pause();
      } else {
        // 다시 보일 때 & 화면에도 보이는 상태면 재생
        if (el.isConnected) {
          // 강제로 관찰 콜백을 기다리지 않고 바로 시도
          const rect = el.getBoundingClientRect();
          const inViewport =
            rect.top < window.innerHeight &&
            rect.bottom > 0 &&
            rect.left < window.innerWidth &&
            rect.right > 0;
          if (inViewport) el.play().catch(() => {});
        }
      }
    };

    if (pauseWhenTabHidden) {
      document.addEventListener('visibilitychange', onVisibility);
    }

    return () => {
      observer.disconnect();
      if (pauseWhenTabHidden) {
        document.removeEventListener('visibilitychange', onVisibility);
      }
    };
  }, [threshold, root, rootMargin, pauseWhenTabHidden, respectReducedMotion]);

  return ref;
}
