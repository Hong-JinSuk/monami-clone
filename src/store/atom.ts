import { Lang } from '@/types/type';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || 'system';
  }
  return 'system';
};

const getLangAtom = (): Lang => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language');
    if (stored) return stored as Lang;

    localStorage.setItem('language', 'ko');
    return 'ko';
  }

  return 'ko';
};

export const themeAtom = atom(getInitialTheme());

// SSR 에서는 window 저기서 로컬 스토리지와 동기화가 안되기 때문에? 라는 것 같음.
// export const languageAtom = atomWithStorage<Lang>('language', getLangAtom());
export const languageAtom = atomWithStorage<Lang>('language', 'ko');
