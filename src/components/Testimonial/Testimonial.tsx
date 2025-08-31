import TestimonialSlider from './TestimonialSlider';

export default function Testimonial() {
  return (
    <section className="bg-white dark:bg-black py-10 px-4">
      <div className="max-w-[88rem] mx-auto text-center relative">
        <h1 className="text-3xl font-bold mb-10 dark:text-white">
          Customer Testimonials
        </h1>
        <TestimonialSlider />
      </div>
    </section>
  );
}
