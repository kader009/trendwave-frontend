'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative w-full h-screen bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0c3061] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg mb-6">
            Discover Style <br /> That Speaks for You
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-md drop-shadow-sm mx-auto md:mx-0">
            Explore the latest trends in fashion, electronics, and lifestyle with fast delivery & quality support.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-[#1f2937] hover:bg-gray-100 px-6 py-2 rounded-full font-semibold text-lg shadow-md transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative w-full h-64 md:h-[500px]">
          <Image
            src="/slide1.webp"
            alt="Featured Product"
            fill
            className="object-contain drop-shadow-xl"
            priority
          />
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute top-[-50px] right-[-50px] w-72 h-72 bg-white/10 rounded-full blur-3xl z-0" />
    </header>
  );
}
