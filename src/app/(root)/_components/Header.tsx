'use client';
import SwitchLang from '@/components/SwitchLang';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      className={`w-full h-[150px] fixed flex flex-col items-center z-50 bg-white`}
    >
      <div
        className={`w-full h-[60px] flex items-center justify-between min-w-[500px] max-w-[1400px]`}
      >
        <div className="flex items-center gap-2">
          <SwitchLang />
          <Image
            src={'https://www.monami.com/images/common/sns_facebook.gif'}
            alt=""
            width={30}
            height={30}
          />
          <Image
            src={'https://www.monami.com/images/common/sns_insta.gif'}
            alt=""
            width={30}
            height={30}
          />
          <Image
            src={'https://www.monami.com/images/common/sns_youtube.png'}
            alt=""
            width={30}
            height={30}
          />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Link href={'/main'} className="cursor-pointer">
            <span className="text-[11px] text-gray-400 font-thin cursor-pointer">
              HOME
            </span>
          </Link>
          <Separator orientation="vertical" className="!h-2" />
          <Link href={'/site-map'}>
            <span className="text-[11px] text-gray-400 font-thin cursor-pointer">
              SITE MAP
            </span>
          </Link>
          <Separator orientation="vertical" className="!h-2" />
          <Link href={'/customer'}>
            <span className="text-[11px] text-gray-400 font-thin cursor-pointer">
              CONTACT US
            </span>
          </Link>
        </div>
      </div>
      <Separator orientation="horizontal" />
      <div
        className={`relative flex justify-center items-center w-full h-[90px]`}
      >
        <div className="min-w-[500px] max-w-[1400px] w-full">
          <Image
            src={'https://www.monami.com/images/common/logo.jpg'}
            alt=""
            width={162}
            height={89}
          />
        </div>
        <div className="absolute top-[90px] w-full bg-white opacity-55 h-20"></div>
      </div>
    </header>
  );
}
