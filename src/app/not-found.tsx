'use client';

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <div className="text-center">
        <h1 className="text-[120px] font-extrabold animate-pulse tracking-widest text-white drop-shadow-lg">
          404
        </h1>
        <p className="text-xl md:text-2xl font-semibold mt-2 mb-4">
          Oops! Page not found.
        </p>
        <p className="text-sm text-gray-300 mb-8">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
