'use client';
import { Button } from '@/components/ui/button';
import { BEST_PRODUCT } from '@/constants/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function BestProduct() {
  const [bestProduct, setBestProduct] = useState<
    'pen' | 'pencil' | 'markar' | 'office'
  >('pen');

  return (
    <div className="bg-[#EEEEEE] py-[70px]">
      <div className="flex flex-col items-center justify-center space-y-2">
        {/* 이 부분 스타일 잡고 Radio 잡아줘야함 이 부분은 변화를 줘도 좋을 것 같긴한데 라디오 대신 다른 걸로... 까리한거 없나 GPT한테 일단 물어보자 */}
        <span className="text-3xl font-bold">BEST PRODUCT</span>
        <div className="border border-red-600 bg-red-600 h-1 w-5"></div>
        <span className="text-[#555555]">
          언제 어디서나 생활 속에 함께하는 모나미
        </span>
      </div>
      <div className="w-full flex items-center justify-center space-x-4 py-12">
        <Button
          variant={'monami'}
          size={'monami'}
          className={`${
            bestProduct === 'pen' && 'text-red-700 border-red-700'
          }`}
          onClick={() => setBestProduct('pen')}
        >
          프리미엄 펜
        </Button>
        <Button
          variant={'monami'}
          size={'monami'}
          className={`${
            bestProduct === 'pencil' && 'text-red-700 border-red-700'
          }`}
          onClick={() => setBestProduct('pencil')}
        >
          펜 & 펜슬
        </Button>
        <Button
          variant={'monami'}
          size={'monami'}
          className={`${
            bestProduct === 'markar' && 'text-red-700 border-red-700'
          }`}
          onClick={() => setBestProduct('markar')}
        >
          마카 & 컬러링
        </Button>
        <Button
          variant={'monami'}
          size={'monami'}
          className={`${
            bestProduct === 'office' && 'text-red-700 border-red-700'
          }`}
          onClick={() => setBestProduct('office')}
        >
          노트 & 사무용품
        </Button>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={0}
        loop={true}
        speed={6000}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper sample-slider"
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
      >
        {BEST_PRODUCT.map((product, index) => (
          <SwiperSlide key={`${product.link}-${index}`}>
            <Card
              category={product.category}
              label={product.label}
              link={product.link}
              image={product.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const Card = ({
  category,
  label,
  link,
  image,
}: {
  category: string;
  label: string;
  link: string;
  image: string;
}) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-[266px] h-[510px] flex flex-col rounded-2xl bg-white">
        <Image
          src={image}
          alt=""
          width={266}
          height={0}
          className="rounded-2xl"
        />
        <div className="w-full h-[115px] px-[30px] pb-[20px] flex flex-col">
          <span>{category}</span>
          <span>{label}</span>
        </div>
      </div>
    </Link>
  );
};
