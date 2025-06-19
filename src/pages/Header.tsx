import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      <div className="relative w-full h-screen">
        <Image
          src="/slide3.webp"
          alt="Fast Delivery & Great Support"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={70}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Fast Delivery & Great Support
          </h1>
          <p className="text-base md:text-xl">
            We deliver happiness right to your door.
          </p>
          <button className="bg-black/60 hover:bg-gray-950 text-white px-5 py-2 rounded-full mt-4 cursor-pointer">
            <Link href="/products">Grab Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
