import { NEW_ARRIVALS } from '@/constants/data';
import Image from 'next/image';

export default function Arrival() {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="w-[1200px] h-[830px] flex flex-col space-y-5">
        <div className="flex h-[360px] space-x-5">
          <div className="min-w-[390px] h-full flex flex-col space-y-2">
            <span className="text-3xl font-bold">NEW</span>
            <span className="text-3xl font-bold">ARRIVALS</span>
            <div className="border border-red-600 bg-red-600 h-1 w-5"></div>
            <span className="text-sm text-gray-600">
              {NEW_ARRIVALS.arrival}
            </span>
            <div className="relative w-full aspect-video mt-auto">
              <Image
                src={
                  'https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1699945409grwui60w6u.jpg'
                }
                alt=""
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="relative w-full aspect-video">
            <Image
              src={
                'https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_169994521784nzg4whv7.jpg'
              }
              alt=""
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full h-full flex gap-5">
          <div className="relative w-full max-w-[400px] aspect-[4/3] max-h-[290px]">
            <Image
              src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1715318030bhfwnjum09.jpg"
              alt=""
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="relative aspect-video max-w-[450px]">
            <Image
              src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1681087061mb8i5l6zdx.jpg"
              alt=""
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="relative aspect-video max-w-[310px] max-h-[292px]">
            <Image
              src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1715319042z7nuju2l3p.jpg"
              alt=""
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
