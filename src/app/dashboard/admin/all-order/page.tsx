'use client';

import { useAllOrdersQuery, useDeleteOrderMutation } from '@/redux/api/endApi';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import React from 'react';
import { toast } from 'sonner';

interface Orders {
  _id: string;
  productId: string;
  productName: string;
  category: string;
  rating: number;
  price: number;
  image: string;
  customerEmail: string;
  paymentStatus: string;
}

const OrderTable = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useAllOrdersQuery(user?.email, { pollingInterval: 2000 });

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

  if (isLoading) return <p className="text-center py-4">Loading...</p>;

  return (
    <div className="overflow-x-auto w-full bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">All Orders</h2>
      <table className="min-w-full text-sm md:text-base divide-y divide-gray-200">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Image</th>
            <th className="px-4 py-3 text-left">Product Name</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">Rating</th>
            <th className="px-4 py-3 text-left">Price</th>
            <th className="px-4 py-3 text-left">Customer Email</th>
            <th className="px-4 py-3 text-left">status</th>
            <th className="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {orders?.map((order: Orders, index: number) => (
            <tr key={order._id} className="hover:bg-gray-50">
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-2">
                <Image
                  src={order.image}
                  alt={order.productName}
                  width={50}
                  height={50}
                  className="rounded-md object-cover"
                />
              </td>
              <td className="px-4 py-2 font-medium text-slate-800">
                {order.productName}
              </td>
              <td className="px-4 py-2 text-slate-600">{order.category}</td>
              <td className="px-4 py-2">
                <span className=" font-semibold">{order.rating} ⭐</span>
              </td>
              <td className="px-4 py-2 font-semibold ">${order.price}</td>
              <td className="px-4 py-2 text-slate-600">
                {order.customerEmail}
              </td>
              <td className="px-4 py-2 text-slate-600">
                {order.paymentStatus}
              </td>
              <td className="px-4 py-2 space-x-2">
                <button
                  className="text-white text-sm bg-black px-3 py-1 rounded-full cursor-pointer"
                  onClick={() => handleRemove(order._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
