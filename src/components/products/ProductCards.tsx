import { Product } from '@/types/Productstype';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col justify-between hover:shadow-lg transition dark:bg-black">
      <div className="relative group">
        <div className="h-56 w-full rounded-md overflow-hidden bg-gray-100 relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      <div className="px-2 pt-2">
        <p
          className="text-sm font-medium truncate dark:text-white"
          title={product.name}
        >
          {product.name}
        </p>
        <p className="text-sm text-gray-500 dark:text-white">{product.category}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm font-bold dark:text-white">
            ${product.price}
          </span>
          <div className="text-yellow-500 text-sm">
            {product.rating} {'★'.repeat(Math.floor(product.rating))}
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <Link href={`/products/${product._id}`}>
            <button className="bg-black text-white rounded-full px-4 py-2 text-sm hover:bg-gray-800 transition cursor-pointer dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Detail →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
