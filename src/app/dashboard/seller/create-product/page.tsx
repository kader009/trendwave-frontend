'use client';

import {
  SetCategory,
  SetImageUrl,
  SetPrice,
  SetproductDescription,
  SetProductName,
  SetRating,
  SetStock,
} from '@/redux/features/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type ProductFormValues = {
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  stock: number;
  totalSales: number;
};

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormValues>();
  const {
    category,
    imageUrl,
    price,
    productDescription,
    productName,
    rating,
    stock,
  } = useAppSelector((state: RootState) => state.product);
  const dispatch = useAppDispatch();

  const onSubmit = (data: ProductFormValues) => {
    console.log(data);
    toast.success('Product created successfully');
    reset();
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg mt-10">
      <h1 className="text-xl font-bold mb-6 text-gray-800">
        Create New Product
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            {...register('name', { required: 'Product name is required' })}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="Product name"
            value={productName}
            onChange={(e) => dispatch(SetProductName(e.target.value))}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register('description', {
              required: 'Description is required',
            })}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="Product description"
            value={productDescription}
            onChange={(e) => dispatch(SetproductDescription(e.target.value))}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            {...register('category', { required: 'Category is required' })}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            value={category}
            onChange={(e) => dispatch(SetCategory(e.target.value))}
          >
            <option value="">Select category</option>
            <option value="Footwear">Footwear</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Sports">Sports</option>
            <option value="Toys">Toys</option>
            <option value="Beauty">Beauty</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price ($)
          </label>
          <input
            type="number"
            step="0.01"
            {...register('price', {
              required: 'Price is required',
              valueAsNumber: true,
              min: { value: 0, message: 'Price must be positive' },
            })}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="60"
            value={price}
            onChange={(e) => dispatch(SetPrice(e.target.value))}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rating (1 to 5)
          </label>
          <input
            type="number"
            step="0.1"
            {...register('rating', {
              required: 'Rating is required',
              valueAsNumber: true,
              min: { value: 1, message: 'Minimum rating is 1' },
              max: { value: 5, message: 'Maximum rating is 5' },
            })}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="4.3"
            value={rating}
            onChange={(e) => dispatch(SetRating(e.target.value))}
          />
          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            {...register('image', { required: 'Image URL is required' })}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="https://image-url.com"
            value={imageUrl}
            onChange={(e) => dispatch(SetImageUrl(e.target.value))}
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Stock
          </label>
          <input
            type="number"
            {...register('stock', {
              required: 'Stock is required',
              valueAsNumber: true,
              min: { value: 0, message: 'Stock must be 0 or more' },
            })}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            placeholder="200"
            value={stock}
            onChange={(e) => dispatch(SetStock(e.target.value))}
          />
          {errors.stock && (
            <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
