'use client';
import SelectOption from '@/components/common/SelectOption';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className={`w-full min-h-[310px] bg-[#111111] px-[252px] py-[60px]`}
    >
      <div className="flex flex-col space-y-6">
        <div className="min-h-8 max-h-8 flex items-center justify-between">
          <Image
            src={'https://www.monami.com/images/common/foot_logo.jpg'}
            alt=""
            width={128}
            height={32}
          />
          <div className="flex space-x-3 text-[#898989] font-bold items-center text-sm">
            <span>회사소개</span>
            <Separator orientation="vertical" className="!h-3 bg-gray-700" />
            <span className="text-white">개인정보처리방침</span>
            <Separator orientation="vertical" className="!h-3 bg-gray-700" />
            <span>이메일부단수집거부</span>
          </div>
        </div>
        <Separator className="bg-[#292929]" />
        <div className="flex justify-between">
          <div className="flex flex-col flex-1/3">
            <span className="text-white">INFO</span>
            <div className="flex items-center space-x-4 pt-2">
              <span className="text-[#575757] text-sm whitespace-nowrap">
                ADDRESS : 경기도 용인시 수지구 손곡로 17
              </span>
              <span className="text-[#575757] text-sm whitespace-nowrap">
                l
              </span>
              <span className="text-[#575757] text-sm whitespace-nowrap">
                TEL : 031-216-0153
              </span>
              <span className="text-[#575757] text-sm whitespace-nowrap">
                l
              </span>
              <span className="text-[#575757] text-sm whitespace-nowrap">
                FAX : 031-270-5154
              </span>
            </div>
            <span className="text-xs text-[#575757]">
              COPYRIGHT(C) MONAMI.CO.,LTD. ALL RIGHTS RESERVED.
            </span>
          </div>
          <div className="flex flex-col flex-1/3 pl-10 space-y-2">
            <span className="text-white">CUSTOMER CENTER</span>
            <span className="text-2xl text-[#757575]">080-022-0153</span>
            <Button className="w-fit bg-[#4A4A4A] hover:bg-neutral-700 border px-6">
              <span>카카오톡 문의</span>
              <span>&gt;</span>
            </Button>
          </div>
          <div className="flex-1/3 flex justify-end">
            <SelectOption options={[]} onChange={() => {}} value="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
