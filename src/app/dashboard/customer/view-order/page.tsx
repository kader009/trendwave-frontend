'use client';

import Image from 'next/image';
import {
  useGetorderByemailQuery,
  useDeleteOrderMutation,
} from '@/redux/api/endApi';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { toast } from 'sonner';

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
  const { data, isLoading, error, refetch } = useGetorderByemailQuery(
    user?.email,
    { pollingInterval: 2000 }
  );
  const [deleteOrder] = useDeleteOrderMutation();

  const handleRemove = async (id: string) => {
    try {
      await deleteOrder(id);
      toast.success('Order removed successfully');
      refetch(); // refresh the list
    } catch (err) {
      toast.error('Failed to remove order');
      console.error(err);
    }
  };

  if (isLoading) return <p className="text-center mt-10">Loading orders...</p>;

  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load orders.</p>
    );

  if (!data || data.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500">You have no orders yet.</p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-10 text-center text-slate-800">
        Your Orders
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((order: Orders) => (
          <div
            key={order._id}
            className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
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
                Price: <span className="text-black">${order.price}</span>
              </p>

              <div className="flex gap-3">
                <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 transition">
                  Pay Now
                </button>
                <button
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-600 transition"
                  onClick={() => handleRemove(order._id)}
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

export default ViewOrder;
