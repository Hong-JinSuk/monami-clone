'use client';

import { ImageList } from '@/assets/image';
import { languageAtom } from '@/store/atom';
import { useAtom } from 'jotai';
import Image from 'next/image';

export default function SwitchLang() {
  const [lang, setLang] = useAtom(languageAtom);

  return (
    <div
      className="relative flex border rounded-full p-1.5 px-4 space-x-7 cursor-pointer"
      onClick={() => {
        if (lang == 'ko') setLang('eng');
        else if (lang == 'eng') setLang('ko');
      }}
    >
      <div
        className={`absolute left-0 top-0 bg-gray-400 opacity-40 h-8 w-13 rounded-full transition-all duration-300 ${
          lang == 'ko' ? 'translate-x-0' : 'translate-x-12'
        }`}
      />
      <Image
        src={ImageList['koreaFlag']}
        width={20}
        height={20}
        alt=""
        className="z-50"
      />
      <Image
        src={ImageList['usaFlag']}
        width={20}
        height={20}
        alt=""
        className="z-50"
      />
    </div>
  );
}
