'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Slide data type
type Slide = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: '/slide1.webp',
    title: 'Welcome to TrendWave',
    subtitle: 'Find the best deals on your favorite products.',
  },
  {
    id: 2,
    image: '/slide2.webp',
    title: 'Shop the Latest Trends',
    subtitle: 'Fashion, electronics, and more — all in one place!',
  },
  {
    id: 3,
    image: '/slide3.webp',
    title: 'Fast Delivery & Great Support',
    subtitle: 'We deliver happiness right to your door.',
  },
];


export default function Header() {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (
    _swiper: SwiperType,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="relative w-full h-[91vh]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Optional Autoplay Progress */}
        <div
          className="autoplay-progress absolute right-4 bottom-4 z-10 text-white"
          slot="container-end"
        >
          <svg viewBox="0 0 48 48" ref={progressCircle} className="w-8 h-8">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="white"
              strokeWidth="4"
              fill="none"
            ></circle>
          </svg>
          <span ref={progressContent} className="ml-2 text-sm" />
        </div>
      </Swiper>
    </div>
  );
}
