'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ProductData {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  stock: number;
  totalSales: number;
}

const ProductDetails = () => {
  const params = useParams();
  const productId = params?.productId as string;
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/v1/products/${productId}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        const json = await res.json();
        setProduct(json?.Productdata);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching product:', err);
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-red-500 mt-10">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-full h-[400px] sm:h-[500px] rounded overflow-hidden shadow-xl group">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>

          <div className="flex flex-wrap gap-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              Category: {product.category}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              In Stock: {product.stock}
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
              Rating: ⭐ {product.rating}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Sales: {product.totalSales}
            </span>
          </div>

          <div className="text-3xl font-semibold text-green-600">${product.price}</div>

          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-black to-gray-800 text-white font-semibold rounded-sm shadow-sm hover:scale-105 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
