import Link from 'next/link';

export default function Header() {
  return (
    // bg color change from the previous bg color
    <header
      className="relative w-full h-screen bg-[#6b46c1] text-white overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-8"
      aria-label="Main promotional banner"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          Discover Style <br /> That Speaks for You
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-white">
          Explore the latest trends in fashion, electronics, and lifestyle with
          good & valuable products.
        </p>
        <Link
          href="/products"
          className="px-6 py-2 text-xl rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300"
        >
          <button>Shop Now</button>
        </Link>
      </div>
    </header>
  );
}
