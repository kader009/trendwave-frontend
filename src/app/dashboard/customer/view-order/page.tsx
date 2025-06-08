'use client';

import Image from 'next/image';
import { useGetorderByemailQuery } from '@/redux/api/endApi';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';

interface Orders {
  _id: string;
  productId: string;
  productName: string;
  category: string;
  rating: number;
  price: number;
  image: string;
}

const ViewOrder = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  const { data, isLoading, error } = useGetorderByemailQuery(user?.email);

  if (isLoading) return <p className="text-center mt-10">Loading orders...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load orders.</p>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-slate-800">
        Your Orders
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((order: Orders) => (
          <div
            key={order._id}
            className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={order.image}
                alt={order.productName}
                fill
                className="object-cover rounded-t-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
              />
            </div>

            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                {order.productName}
              </h2>
              <p className="text-sm text-gray-500">
                Category: {order.category}
              </p>
              <p className="text-base font-medium text-gray-700">
                Price: <span className="text-blue-600">${order.price}</span>
              </p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Pay Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewOrder;
