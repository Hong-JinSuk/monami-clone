'use client';

import { ImageList } from '@/assets/image';
import { Button } from '@/components/ui/button';
import useToast from '@/hooks/use-toast';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const { toast } = useToast();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) {
      toast('error', '잘못된 페이지 접근입니다.');
    }
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted, toast]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="relative size-52 sm:size-72 lg:size-96 max-lg:my-10">
        <Image
          src={ImageList.notFound.src}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 text-lg sm:text-xl lg:text-2xl">
        <div className="flex flex-col">
          <span className="text-center">페이지를 찾을 수 없습니다.</span>
          <span className="text-center max-sm:hidden">
            요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
          </span>
        </div>
        <Button
          className="bg-blue-500 hover:bg-blue-700"
          onClick={() => router.push('/main')}
        >
          <span className="text-center text-white text-sm sm:text-lg lg:text-xl">
            홈
          </span>
        </Button>
      </div>
    </div>
  );
}
