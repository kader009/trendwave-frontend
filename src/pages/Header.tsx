import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src="/slide3.webp"
          alt="Fast Delivery & Great Support"
          fill
          sizes="100vw"
          loading="eager"
          priority
          quality={70}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Fast Delivery & Great Support
          </h1>
          <p className="text-base md:text-xl">
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
    </div>
  );
}
