'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { testimonials } from './testimonials';

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = useCallback(
    () => setIndex((prev) => (prev + 1) % total),
    [total]
  );

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  const current = testimonials[index];

  return (
    <div className="relative bg-white dark:bg-black p-8 rounded shadow-md min-h-[320px]">
      <Image
        src={current.image}
        alt={current.name}
        width={80}
        height={80}
        className="mx-auto rounded-full mb-4"
      />
      <p className="italic mb-4 text-gray-700 dark:text-gray-300">
        “{current.text}”
      </p>
      <p className="font-semibold text-gray-900 dark:text-white">
        — {current.name}
      </p>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index
                ? 'bg-gray-800 dark:bg-white scale-125'
                : 'bg-gray-400 dark:bg-gray-600 hover:scale-110'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
