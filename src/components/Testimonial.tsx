'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Malik',
    image: 'https://i.ibb.co/twBbb0wG/65.jpg',
    text: 'TrendWave gave me the best shopping experience. Fast delivery and excellent service!',
  },
  {
    id: 2,
    name: 'John Doe',
    image: 'https://i.ibb.co/8WPRv69/75.jpg',
    text: 'Amazing product quality and great customer support. Highly recommended!',
  },
  {
    id: 3,
    name: 'Anika Rahman',
    image: 'https://i.ibb.co/hht85r8/44.jpg',
    text: 'I love shopping at TrendWave. Their deals and service are unbeatable.',
  },
  {
    id: 4,
    name: 'James Howard',
    image: 'https://i.ibb.co/Xf1x8jHF/41.jpg',
    text: 'The checkout process is smooth and fast. Will buy again!',
  },
  {
    id: 5,
    name: 'Maya Hasan',
    image: 'https://i.ibb.co/QygWy60/31.jpg',
    text: 'Customer service was extremely helpful. Love this store!',
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = () => setIndex((index + 1) % total);
  const prev = () => setIndex((index - 1 + total) % total);

  return (
    <section className="bg-white dark:bg-black py-10 px-4">
      <div className="max-w-[88rem] mx-auto text-center relative">
        <h1 className="text-3xl font-bold mb-10 dark:text-white">Customer Testimonials</h1>

        <div className="relative bg-white dark:bg-black p-8 rounded shadow-md min-h-[320px]">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 text-2xl px-3 py-1 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            &lt;
          </button>

          {/* Testimonial Content */}
          <Image
            src={testimonials[index].image}
            alt={testimonials[index].name}
            width={80}
            height={80}
            className="mx-auto rounded-full mb-4"
          />
          <p className="italic mb-4 text-gray-700 dark:text-gray-300">
            “{testimonials[index].text}”
          </p>
          <p className="font-semibold text-gray-900 dark:text-white">
            — {testimonials[index].name}
          </p>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 text-2xl px-3 py-1 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
