'use client';
import { useVideo } from '@/hooks/use-video';

export default function MainVideo() {
  const videoRef = useVideo<HTMLVideoElement>({
    threshold: 0.25, // 50% 이상 보이면 자동 재생
    pauseWhenTabHidden: true, // 탭 숨기면 일시정지
  });
  return (
    <div className="w-full flexs justify-center">
      <video
        ref={videoRef}
        src="https://dfrkkcv2hg1jc.cloudfront.net/data/video/monami_brand_web_60.mp4"
        // muted
        playsInline
        loop
        preload="auto"
        className="w-full"
      />
    </div>
  );
}
