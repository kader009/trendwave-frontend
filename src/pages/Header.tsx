// Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative w-full h-screen bg-[#a98df3] text-white overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight mb-6">
          Discover Style <br /> That Speaks for You
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-white/90">
          Explore the latest trends in fashion, electronics, and lifestyle with fast delivery & quality support.
        </p>
        <Link
          href="/products"
          className="inline-block bg-black text-white hover:bg-gray-600 px-6 py-2 rounded-full font-bold text-lg shadow-md transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>
    </header>
  );
}
