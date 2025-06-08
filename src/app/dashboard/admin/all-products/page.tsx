'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { useAllProductsQuery, useDeleteProductMutation } from '@/redux/api/endApi';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { toast } from 'sonner';

type Product = {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  stock: number;
  totalSales: number;
};

const AllProducts = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  const {
    data: products,
    isLoading,
    isError,
  } = useAllProductsQuery(user?.email);
  const [deleteproduct] = useDeleteProductMutation()

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const handleUpdate = (id: string) => {
    alert(`Update product ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    deleteproduct(id)
    toast('product delete successfully')
  };

  return (
    <div className="overflow-x-auto w-full bg-white p-4 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold text-slate-700 mb-4">
        All Products
      </h1>
      <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Product Name</th>
            <th className="px-4 py-3 text-left">Price</th>
            <th className="px-4 py-3 text-left">Total Sale</th>
            <th className="px-4 py-3 text-left">Rating</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {products?.map((product: Product, index: number) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3 font-medium text-gray-800">
                {product.name}
              </td>
              <td className="px-4 py-3 font-medium">
                ${product.price}
              </td>
              <td className="px-4 py-3 font-medium">
                {product.totalSales}
              </td>
              <td className="px-4 py-3 flex items-center gap-1">
                {product.rating}
                <Star size={16} fill="currentColor" stroke="none" className='text-yellow-600'/>
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleUpdate(product?._id)}
                    className="bg-black hover:bg-gray-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(product?._id)}
                    className="bg-black hover:bg-gray-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
