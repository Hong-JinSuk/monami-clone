import Image from 'next/image';

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
      </div>
      <div className="h-[2000px]">main</div>
    </>
  );
}
