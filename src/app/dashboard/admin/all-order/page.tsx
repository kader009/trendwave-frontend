'use client';

import { useAllOrdersQuery } from '@/redux/api/endApi';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import React from 'react';

interface Orders {
  _id: string;
  productId: string;
  productName: string;
  category: string;
  rating: number;
  price: number;
  image: string;
  customerEmail: string;
  paymentStatus:string
}

const OrderTable = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  const { data: orders, isLoading } = useAllOrdersQuery(user?.email);

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
                <span className="text-yellow-600 font-semibold">
                  {order.rating} ⭐
                </span>
              </td>
              <td className="px-4 py-2 font-semibold text-green-600">
                ${order.price}
              </td>
              <td className="px-4 py-2 text-slate-600">
                {order.customerEmail}
              </td>
              <td className="px-4 py-2 text-slate-600">
                {order.paymentStatus}
              </td>
              <td className="px-4 py-2 space-x-2">
                <button className="text-red-600 hover:underline text-sm">
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
