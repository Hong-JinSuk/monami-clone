'use client';

import { NEW_ARRIVALS } from '@/constants/data';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NewArrivals() {
  const router = useRouter();
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
            <div
              className="relative w-full aspect-video mt-auto group cursor-pointer"
              onClick={() => router.push(NEW_ARRIVALS.imageData.pen.link)}
            >
              <div className="absolute left-0 top-0 w-full h-full p-5 z-10">
                <div
                  className={`bg-red-500 w-full h-full flex flex-col items-center justify-center gap-8 rounded-xl transition-all duration-700 opacity-0 group-hover:opacity-90`}
                >
                  <div className="flex flex-col items-center text-white">
                    <span className="text-sm">PEN</span>
                    <span className="font-bold">
                      {NEW_ARRIVALS.imageData.pen.description}
                    </span>
                  </div>
                  <Plus
                    className="text-white size-12 group-hover:rotate-180 transition-all duration-700"
                    strokeWidth={0.5}
                  />
                </div>
              </div>
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
          <div
            className="relative w-full aspect-video group cursor-pointer"
            onClick={() => router.push(NEW_ARRIVALS.imageData.note.link)}
          >
            <div className="absolute left-0 top-0 w-full h-full p-5 z-10">
              <div
                className={`bg-red-500 w-full h-full flex flex-col items-center justify-center gap-8 rounded-xl transition-all duration-700 opacity-0 group-hover:opacity-90`}
              >
                <div className="flex flex-col items-center text-white">
                  <span className="text-sm">NOTE</span>
                  <span className="font-bold">
                    {NEW_ARRIVALS.imageData.note.description}
                  </span>
                </div>
                <Plus
                  className="text-white size-12 group-hover:rotate-180 transition-all duration-700"
                  strokeWidth={0.5}
                />
              </div>
            </div>
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
          <div
            className="relative w-full max-w-[400px] aspect-[4/3] max-h-[290px] group cursor-pointer"
            onClick={() =>
              router.push(NEW_ARRIVALS.imageData.preminum_pen.link)
            }
          >
            <div className="absolute left-0 top-0 w-full h-full p-5 z-10">
              <div
                className={`bg-red-500 w-full h-full flex flex-col items-center justify-center gap-8 rounded-xl transition-all duration-700 opacity-0 group-hover:opacity-90`}
              >
                <div className="flex flex-col items-center text-white">
                  <span className="text-sm">PREMIUM PEN</span>
                  <span className="font-bold">
                    {NEW_ARRIVALS.imageData.preminum_pen.description}
                  </span>
                </div>
                <Plus
                  className="text-white size-12 group-hover:rotate-180 transition-all duration-700"
                  strokeWidth={0.5}
                />
              </div>
            </div>
            <Image
              src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1715318030bhfwnjum09.jpg"
              alt=""
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div
            className="relative aspect-video max-w-[450px] group cursor-pointer"
            onClick={() =>
              router.push(NEW_ARRIVALS.imageData.fountain_pen.link)
            }
          >
            <div className="absolute left-0 top-0 w-full h-full p-4 z-10">
              <div
                className={`bg-red-500 w-full h-full flex flex-col items-center justify-center gap-8 rounded-xl transition-all duration-700 opacity-0 group-hover:opacity-90`}
              >
                <div className="flex flex-col items-center text-white">
                  <span className="text-sm">FOUNTAIN PEN</span>
                  <span className="font-bold">
                    {NEW_ARRIVALS.imageData.fountain_pen.description}
                  </span>
                </div>
                <Plus
                  className="text-white size-12 group-hover:rotate-180 transition-all duration-700"
                  strokeWidth={0.5}
                />
              </div>
            </div>
            <Image
              src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1681087061mb8i5l6zdx.jpg"
              alt=""
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div
            className="relative aspect-video max-w-[310px] max-h-[292px] group cursor-pointer"
            onClick={() =>
              router.push(NEW_ARRIVALS.imageData.water_based_marker.link)
            }
          >
            <div className="absolute left-0 top-0 w-full h-full p-5 z-10">
              <div
                className={`bg-red-500 w-full h-full flex flex-col items-center justify-center gap-8 rounded-xl transition-all duration-700 opacity-0 group-hover:opacity-90`}
              >
                <div className="flex flex-col items-center text-white">
                  <span className="text-sm">WATER-BASED MARKERS</span>
                  <span className="font-bold">
                    {NEW_ARRIVALS.imageData.water_based_marker.description}
                  </span>
                </div>
                <Plus
                  className="text-white size-12 group-hover:rotate-180 transition-all duration-700"
                  strokeWidth={0.5}
                />
              </div>
            </div>
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
