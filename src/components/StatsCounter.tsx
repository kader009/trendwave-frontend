'use client';

import CountUp from 'react-countup';

const StatsCounter = () => {
  return (
    <section className="mb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <h1 className="text-4xl font-bold text-black dark:text-white">
            <CountUp end={5000} duration={3} suffix="+" />
          </h1>
          <p className="mt-2 text-lg text-black dark:text-white">Happy Customers</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-black dark:text-white">
            <CountUp end={2000} duration={3} suffix="+" />
          </h2>
          <p className="mt-2 text-lg text-black dark:text-white">Products Sold</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-black dark:text-white">
            <CountUp end={99.9} duration={3} suffix="%" decimals={1} />
          </h2>
          <p className="mt-2 text-lg text-black dark:text-white">Positive Reviews</p>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
