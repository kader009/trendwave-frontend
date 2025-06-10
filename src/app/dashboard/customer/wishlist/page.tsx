'use client';

import Image from 'next/image';
import {
  useGetWishlistByemailQuery,
  useDeleteWishlistMutation,
} from '@/redux/api/endApi';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { toast } from 'sonner';

interface Wishlist {
  _id: string;
  productId: string;
  productName: string;
  category: string;
  rating: number;
  price: number;
  image: string;
}

const WishList = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  const { data, isLoading, error, refetch } = useGetWishlistByemailQuery(
    user?.email
  );
  const [deleteWishlist] = useDeleteWishlistMutation();

  const handleRemove = async (id: string) => {
    try {
      await deleteWishlist(id);
      toast.success('Wishlist item removed');
      refetch();
    } catch (err) {
      toast.error('Failed to remove wishlist item');
      console.error(err);
    }
  };

  if (isLoading)
    return <p className="text-center mt-10">Loading Wishlist...</p>;

  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load wishlist.</p>
    );

  if (!data || data.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500">Your wishlist is empty.</p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-10 text-center text-slate-800 dark:text-white">
        Your Wishlist
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((wishlist: Wishlist) => (
          <div
            key={wishlist._id}
            className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={wishlist.image}
                alt={wishlist.productName}
                fill
                className="object-cover rounded-t-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
              />
            </div>

            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                {wishlist.productName}
              </h2>
              <p className="text-sm text-gray-500">
                Category: {wishlist.category}
              </p>
              <p className="text-base font-medium text-gray-700">
                Price: <span className="text-black">${wishlist.price}</span>
              </p>

              <div className="flex gap-3">
                <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 transition">
                  Buy Now
                </button>
                <button
                  onClick={() => handleRemove(wishlist._id)}
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
