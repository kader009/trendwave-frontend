'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  useDeleteProductMutation,
  useSellerProductQuery,
  useUpdateProductMutation,
} from '@/redux/api/endApi';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { Star, Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import Spinner from '@/components/Sppiner';

interface Product {
  _id: string;
  category: string;
  imageUrl: string;
  price: number;
  description: string;
  name: string;
  rating: number;
  stock: number;
  totalSales: number;
  sellerEmail: string;
}

const ViewProduct = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useSellerProductQuery(user?.email, { pollingInterval: 2000 });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      toast.success('Product deleted successfully');
      refetch();
    } catch (err) {
      toast.error('Failed to delete product');
      console.log(err);
    }
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedProduct) return;

    try {
      const { _id, ...updatedData } = selectedProduct;
      await updateProduct({ id: _id, body: updatedData });
      toast.success('Product updated successfully');
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      toast.error('Failed to update product');
      console.log(error);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !products?.length) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        No products found or something went wrong.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Your Uploaded Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative w-full h-52">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-gray-600 text-sm">
                {product.description.slice(0, 80)}...
              </p>
              <div className="flex items-center gap-2 text-yellow-600">
                <Star size={18} fill="currentColor" stroke="none" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>Price: ${product.price}</span>
                <span>Stock: {product.stock}</span>
              </div>
              <div className="text-sm text-gray-500">
                🛒 Sold: {product.totalSales}
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsModalOpen(true);
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md relative">
            <h3 className="text-xl font-semibold mb-4">Update Product</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                value={selectedProduct.name}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    name: e.target.value,
                  })
                }
                className="w-full border px-3 py-2 rounded-md"
                placeholder="Product Name"
              />
              <input
                type="number"
                value={selectedProduct.price}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    price: +e.target.value,
                  })
                }
                className="w-full border px-3 py-2 rounded-md"
                placeholder="Price"
              />
              <textarea
                value={selectedProduct.description}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    description: e.target.value,
                  })
                }
                className="w-full border px-3 py-2 rounded-md"
                placeholder="Description"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-md"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
