'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import { RootState } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks';
import {
  useBookOrderMutation,
  useWishlistPostMutation,
} from '@/redux/api/endApi';

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
  const { user } = useAppSelector((state: RootState) => state.user); 
  const [bookorder] = useBookOrderMutation();
  const [addWishList, { isLoading }] = useWishlistPostMutation();
  const isDisabled = !user || ['admin', 'seller'].includes(user?.role || null || '');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://trendwave-backend.onrender.com/api/v1/products/${productId}`
        );
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
      <div className="text-center text-red-500 mt-10">Product not found.</div>
    );
  }

  const handleBuy = async () => {
    try {
      const payload = {
        productId: product?._id,
        productName: product?.name,
        category: product?.category,
        rating: product?.rating,
        price: product?.price,
        image: product?.image,
        customerEmail: user?.email,
        paymentStatus: 'unpaid',
        orderDate: new Date().toISOString(),
      };
      const postData = await bookorder(payload);
      console.log(postData);
      toast.success('order place successfully');

      // refetch data for update stock and sales
    const res = await fetch(
      `https://trendwave-backend.onrender.com/api/v1/products/${productId}`
    );
    const json = await res.json();
    setProduct(json?.Productdata);
    
    } catch (error) {
      console.log('data posting error', error);
      toast.error('something went wrong');
    }
  };

  const handleWishlist = async () => {
    try {
      const payload = {
        productId: product?._id,
        productName: product?.name,
        category: product?.category,
        rating: product?.rating,
        price: product?.price,
        image: product?.image,
        customerEmail: user?.email,
      };

      const postData = await addWishList(payload);
      console.log(postData);
      toast.success('product added to wishlist successfully');
    } catch (error) {
      console.log('data posting error', error);
      toast.error('something went wrong');
    }
  };

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
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{product.name}</h1>
          <p className="text-lg text-gray-600 dark:text-white">{product.description}</p>

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

          <div className="text-3xl font-semibold">${product.price}</div>

          <button
            className={`mt-6 px-8 py-3 text-white font-semibold rounded-full shadow-sm transition 
              ${
                isDisabled
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-black hover:scale-105'
              }
            `}
            onClick={handleBuy}
            disabled={isDisabled}
          >
            Buy Now
          </button>
          <button
            className={`mt-6 ms-2 px-8 py-3 text-white font-semibold rounded-full shadow-sm transition 
              ${
                isDisabled
                  ? 'bg-gray-400 cursor-not-allowed ms-2'
                  : 'bg-black hover:scale-105'
              }
            `}
            onClick={handleWishlist}
            disabled={isDisabled}
          >
            {isLoading ? 'Adding...' : 'Wish list'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
