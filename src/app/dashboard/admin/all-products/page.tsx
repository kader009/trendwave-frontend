'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import {
  useAllProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from '@/redux/api/endApi';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { toast } from 'sonner';
import Spinner from '@/components/Sppiner';
import { Product } from '@/types/Productstype';

const AllProducts = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  const {
    data: products,
    isLoading,
    isError,
  } = useAllProductsQuery(user?.email, { pollingInterval: 2000 });

  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const [visibleCount, setVisibleCount] = useState(15);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    rating: '',
  });

  const Handleview = () => {
    setVisibleCount((prev) => prev + 10);
  };

  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <div className="text-red-600 text-center font-bold">
        Something went wrong
      </div>
    );

  const handleUpdate = (product: Product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      price: String(product.price),
      rating: String(product.rating),
    });
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    deleteProduct(id);
    toast('Product deleted successfully');
  };

  const handleModalSubmit = async () => {
    if (!selectedProduct) return;

    try {
      const { _id, ...rest } = selectedProduct;
      await updateProduct({
        id: _id,
        body: {
          ...rest,
          name: formData.name,
          price: Number(formData.price),
          rating: Number(formData.rating),
        },
      });

      toast.success('Product updated successfully');
      setShowModal(false);
    } catch (error) {
      toast.error('Failed to update product');
      console.log(error);
    }
  };

  const visibleData = products?.slice(0, visibleCount);

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
          {visibleData?.map((product: Product, index: number) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="px-4 py-3 dark:text-black">{index + 1}</td>
              <td className="px-4 py-3 font-medium text-gray-800">
                {product.name}
              </td>
              <td className="px-4 py-3 font-medium dark:text-black">
                ${product.price}
              </td>
              <td className="px-4 py-3 font-medium dark:text-black">
                {product.totalSales}
              </td>
              <td className="px-4 py-3 flex items-center gap-1 dark:text-black">
                {product.rating}
                <Star
                  size={16}
                  fill="currentColor"
                  stroke="none"
                  className="text-yellow-600"
                />
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleUpdate(product)}
                    className="bg-black hover:bg-gray-700 text-white px-3 py-1 rounded text-sm cursor-pointer"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-black hover:bg-gray-700 text-white px-3 py-1 rounded text-sm cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {visibleCount < products?.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={Handleview}
            className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full transition"
          >
            View More
          </button>
        </div>
      )}

      {/* Update Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Update Product</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Name"
                className="border p-2 rounded"
              />
              <input
                type="number"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                placeholder="Price"
                className="border p-2 rounded"
              />
              <input
                type="number"
                value={formData.rating}
                onChange={(e) =>
                  setFormData({ ...formData, rating: e.target.value })
                }
                placeholder="Rating"
                className="border p-2 rounded"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-400 rounded text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleModalSubmit}
                  className="px-4 py-2 bg-black text-white rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
