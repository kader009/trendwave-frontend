import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative w-full h-auto bg-black text-white">
      <div className="relative w-full aspect-[16/9] md:aspect-[16/7]">
        <Image
          src="/slide3.webp"
          alt="Fast Delivery & Great Support"
          fill
          priority
          loading="eager"
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4 drop-shadow-lg">
            Fast Delivery & Great Support
          </h1>
          <p className="text-base md:text-xl max-w-xl drop-shadow-sm">
            We deliver happiness right to your door.
          </p>

          <Link
            href="/products"
            className="bg-black/60 hover:bg-gray-950 text-white px-5 py-2 rounded-full mt-4 cursor-pointer inline-block"
          >
            Grab Now
          </Link>
        </div>
      </div>
    </header>
  );
}
