'use client';

import SwitchLang from '@/components/SwitchLang';
import { Separator } from '@/components/ui/separator';
import { mainMenus } from '@/constants/data';
import { MenuIcon, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [hover, setHover] = useState<{
    mainMenus: boolean;
    expandedMenus: boolean;
  }>({
    mainMenus: false,
    expandedMenus: false,
  });

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
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={'https://www.monami.com/images/common/logo.jpg'}
            alt=""
            width={162}
            height={89}
          />
          <div className="flex items-center w-full h-full px-[50px] max-w-[1172px] min-w-[950px]">
            {mainMenus.map((menu, index) => (
              <div
                className={`relative h-full flex flex-col items-center justify-center text-[17px] hover:text-red-700 hover:border-b-red-700 border-b-2 border-transparent cursor-pointer text-center`}
                style={{ width: `calc(100% / ${mainMenus.length})` }}
                key={`${menu.label}-${index}`}
                onMouseEnter={() =>
                  setHover((prev) => ({
                    ...prev,
                    mainMenus: true,
                  }))
                }
                onMouseLeave={() =>
                  setHover((prev) => ({
                    ...prev,
                    mainMenus: false,
                  }))
                }
              >
                <Link href={menu.link}>
                  <span>{menu.label}</span>
                </Link>
                <div
                  className={`absolute top-[90px] h-fit w-full px-1 flex flex-col ${
                    hover.expandedMenus || hover.mainMenus
                      ? 'visible'
                      : 'hidden'
                  }`}
                >
                  {menu.subMenus.map((subMenu, index) => (
                    <Link
                      href={subMenu.link}
                      className={`z-50 py-4 ${
                        index != 0 && 'border-t border-gray-300'
                      }`}
                      key={`${subMenu.label}-${index}`}
                    >
                      <div className="text-sm font-medium text-gray-600 hover:text-red-700">
                        {subMenu.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-[66px] h-full flex items-center justify-center space-x-4">
            <Search size={20} strokeWidth={3} />
            <MenuIcon size={25} strokeWidth={2} />
          </div>
        </div>
        <div
          className={`absolute top-[90px] w-full bg-white opacity-90 h-[425px] ${
            hover.expandedMenus || hover.mainMenus ? 'visible' : 'hidden'
          }`}
          onMouseEnter={() =>
            setHover((prev) => ({
              ...prev,
              expandedMenus: true,
            }))
          }
          onMouseLeave={() =>
            setHover((prev) => ({
              ...prev,
              expandedMenus: false,
            }))
          }
        ></div>
      </div>
    </header>
  );
}
