'use client';
import { BEST_PRODUCT } from '@/constants/data';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function BestProduct() {
  return (
    <div className="bg-[#EEEEEE] py-[70px]">
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="text-3xl font-bold">BEST PRODUCT</span>
        <div className="border border-red-600 bg-red-600 h-1 w-5"></div>
        <span className="text-[#555555]">
          언제 어디서나 생활 속에 함께하는 모나미
        </span>
      </div>
      <div className="w-full flex items-center justify-center space-x-2">
        <span>프리미엄 펜</span>
        <span>펜 & 펜슬</span>
        <span>마카 & 컬러링</span>
        <span>노트 & 사무용품</span>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
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
        modules={[Pagination]}
        className="mySwiper"
      >
        {BEST_PRODUCT.map((product, index) => (
          <SwiperSlide key={index}>
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
    <Link href={link}>
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
