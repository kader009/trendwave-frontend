import Container from '@/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  name: string;
  image: string;
  description: string;
}

const Category = async () => {
  const response = await fetch(`http://localhost:5000/api/v1/category`, {
    cache: 'no-store',
  });
  const data = await response.json();
  const categories: Category[] = data?.Category || [];

  return (
    <div className="mt-20 mx-6">
      <Container>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Top Categories
          </h1>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Discover the most popular categories loved by our users.
          </p>
        </div>

        {/* Flexbox Layout */}
        <div className="mt-10 flex flex-col lg:flex-row gap-4 items-stretch">
          {/* Left Large Image */}
          <div className="relative h-[300px] lg:h-[520px] flex-1 rounded-xl overflow-hidden group">
            <Image
              src={categories[0]?.image}
              alt={categories[0]?.name}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <span className="text-white text-xl font-semibold">
                {categories[0]?.name}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1 justify-between">
            {/* Top Small */}
            <div className="relative h-[240px] lg:h-[255px] rounded-xl overflow-hidden group">
              <Image
                src={categories[1]?.image}
                alt={categories[1]?.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <span className="text-white text-lg font-semibold">
                  {categories[1]?.name}
                </span>
              </div>
            </div>

            {/* Bottom Small */}
            <div className="relative h-[240px] lg:h-[255px] rounded-xl overflow-hidden group">
              <Image
                src={categories[2]?.image}
                alt={categories[2]?.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <span className="text-white text-lg font-semibold">
                  {categories[2]?.name}
                </span>
              </div>
            </div>
          </div>

          {/* Right Large Image */}
          <div className="relative h-[300px] lg:h-[520px] flex-1 rounded-xl overflow-hidden group">
            <Image
              src={categories[3]?.image}
              alt={categories[3]?.name}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <span className="text-white text-xl font-semibold">
                {categories[3]?.name}
              </span>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link href={'/products'}>
            <button className="inline-flex items-center gap-2 px-4 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition cursor-pointer">
              View All <span className="text-xl">&rarr;</span>
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Category;
