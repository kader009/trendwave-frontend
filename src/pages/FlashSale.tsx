import Container from '@/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  discount?: number;
}

const FlashSale = async () => {
  const response = await fetch(`http://localhost:5000/api/v1/flash-sale`, {
    next: {
      revalidate: 30,
    },
  });
  const flashData = await response.json();

  return (
    <div className="mt-20">
      <Container>
        <div className="px-4 md:px-6 py-4">
          {/* Title & View All Button */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl md:text-2xl font-bold">Flash Sale</h1>
            <Link href="/flash-sale">
              <button className="bg-black text-white rounded-full px-4 py-2 text-sm hover:bg-gray-800 transition">
                View All <span className="ml-1">➤</span>
              </button>
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {flashData?.FlashSale?.slice(0, 4).map(
              (product: Product, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-3 flex flex-col justify-between"
                >
                  {/* Image with Discount */}
                  <div className="relative">
                    <div className="h-56 w-full rounded-md overflow-hidden bg-gray-100 relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
                      />
                    </div>
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-[2px] rounded">
                      -{product.discount ?? 10}%
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="px-2 pt-2">
                    <p
                      className="text-sm font-medium truncate"
                      title={product.name}
                    >
                      {product.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm line-through text-gray-500">
                        ${product.price + (product.discount ?? 10)}
                      </span>
                      <span className="text-sm font-bold">
                        ${product.price}
                      </span>
                    </div>

                    {/* Add Button */}
                    <div className="flex justify-end mt-2">
                      <button className="p-1 hover:text-black transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FlashSale;
