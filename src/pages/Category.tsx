import Container from '@/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  name: string;
  image: string;
  description: string;
}

const Category = async () => {
  const response = await fetch(
    `https://trendwave-backend.onrender.com/api/v1/category`,
    {
      next: { revalidate: 3600 },
    }
  );
  const data = await response.json();
  const categories: Category[] = data?.Category || [];

  return (
    <div className="mt-20 mx-6">
      <Container>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Top Categories
          </h1>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto dark:text-white">
            Discover the most popular categories loved by our users.
          </p>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row gap-4 items-stretch">
          {/* Left Large Image */}
          <div className="relative h-[300px] lg:h-[520px] flex-1 rounded-xl overflow-hidden group">
            <Image
              src={categories[0]?.image}
              alt={categories[0]?.name || 'Category'}
              fill
              priority
              loading="eager"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YwZmZmZiIvPjwvc3ZnPg=="
              sizes="(max-width: 768px) 100vw, 
                    (max-width: 1200px) 50vw, 
                    33vw"
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
                alt={categories[1]?.name || 'Category'}
                fill
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, 
                      (max-width: 1200px) 50vw, 
                      33vw"
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
                alt={categories[2]?.name || 'Category'}
                fill
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, 
                      (max-width: 1200px) 50vw, 
                      33vw"
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
              alt={categories[3]?.name || 'Category'}
              fill
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 100vw, 
                    (max-width: 1200px) 50vw, 
                    33vw"
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <span className="text-white text-xl font-semibold">
                {categories[3]?.name}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href={'/products'}>
            <button className="inline-flex items-center gap-2 px-4 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition cursor-pointer dark:bg-white dark:hover:bg-gray-200 dark:text-black">
              View All <span className="text-xl">&rarr;</span>
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Category;