import Container from '@/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  _id: string;
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
              <button className="bg-[#3973B7] text-white rounded-full px-4 py-2 text-sm hover:bg-gray-800 transition cursor-pointer">
                View All <span className="ml-1">&rarr;</span>
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
                  <div className="relative group">
                    <div className="h-56 w-full rounded-md overflow-hidden bg-gray-100 relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
                      />
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Discount Badge */}
                    <span className="absolute top-2 left-2 bg-[#3973B7] text-white text-xs px-2 py-[2px] rounded">
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
                      <Link href={`/products/${product._id}`}>
                        <button className="bg-[#3973B7] text-white rounded-full px-4 py-2 text-sm hover:bg-gray-800 transition cursor-pointer">
                          Detail <span className="ml-1">&rarr;</span>
                        </button>
                      </Link>
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
