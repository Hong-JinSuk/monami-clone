import Image from 'next/image';
import BestProduct from './_components/BestProduct';
import NewArrivals from './_components/NewArrivals';

export default function Page() {
  return (
    <>
      <div className="relative w-full h-[650px]">
        <Image
          src={'https://www.monami.com/images/main/visual1.jpg'}
          alt=""
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute top-[155px] left-[380px] flex flex-col">
          <div className="border-[0.5px] w-20 mb-4"></div>
          <textarea
            id="main-image-message"
            value={
              '어쩌면 삶은\n인생이라는 종이 위에\n써 내려가는\n펜의 기록 같습니다.'
            }
            disabled
            className="text-5xl text-white z-40 overflow-hidden h-60 leading-14 resize-none"
            style={{ fontWeight: 300 }}
          />
          <textarea
            id="main-image-message"
            value={
              '그중에서도 지우고 싶지 않은 기록이 있습니다.\n모나미는 언제나 당신의 행복한 기록과 함께 합니다.'
            }
            disabled
            className="text-sm text-white z-40 pt-10 font-bold resize-none"
            style={{ fontWeight: 300 }}
          />
        </div>
      </div>
      <NewArrivals />
      {/* swiper 이용해서 캐러셀을 구현해보자... */}
      <BestProduct />
      <div className="h-[2000px]">main</div>
    </>
  );
}
