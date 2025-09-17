import Link from "next/link";

export default function Header() {
  return (
    <header className="relative w-full h-screen bg-gradient-to-br from-[#6b46c1] via-[#805ad5] to-[#9f7aea] text-white overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-8">
      {/* floating gradient blobs for creativity */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* glassmorphism card */}
      <div className="relative z-10 text-center max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Discover Style <br /> That Speaks for You
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-white/90">
          Explore the latest trends in fashion, electronics, and lifestyle with
          good & valuable products.
        </p>
        <Link
          href="/products"
          className="px-6 py-2 text-xl rounded-full border border-white/30 text-white bg-white/10 hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm"
        >
          Shop Now
        </Link>
      </div>
    </header>
  );
}
