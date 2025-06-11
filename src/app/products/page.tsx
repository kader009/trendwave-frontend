'use client';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Spinner from '@/components/Sppiner';

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

const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [ratings, setRatings] = useState<number[]>([]);
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://trendwave-backend.onrender.com/api/v1/products')
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setFeaturedProducts(data);
        setLoading(false);
        const uniqueCategories = [...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
        const uniqueRatings = [
          ...new Set(data.map((p) => Math.floor(p.rating))),
        ];
        setRatings(uniqueRatings.sort());
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filterProducts = useCallback(() => {
    let updated = [...products];

    if (searchTerm) {
      updated = updated.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (priceRange) {
      updated = updated.filter(
        (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
      );
    }

    if (selectedCategory) {
      updated = updated.filter((p) => p.category === selectedCategory);
    }

    if (selectedRating) {
      updated = updated.filter(
        (p) => Math.floor(p.rating) >= Number(selectedRating)
      );
    }

    setFeaturedProducts(updated);
  }, [products, searchTerm, priceRange, selectedCategory, selectedRating]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 bg-white shadow-md p-6 lg:sticky lg:top-0 lg:h-screen">
          <h1 className="text-2xl font-bold mb-4 dark:text-black">Filters</h1>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full p-2 border rounded-md mb-6 dark:text-black"
          />

          <div className="mb-6">
            <h3 className="font-semibold mb-2 dark:text-black">Category</h3>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border rounded-md dark:text-black"
            >
              <option value="">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold mb-2 dark:text-black">Price</h2>
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, +e.target.value])}
              className="w-full "
            />
            <p className="text-sm mt-1 dark:text-black">
              ${priceRange[0]} - ${priceRange[1]}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2 dark:text-black">Rating</h3>
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="w-full p-2 border rounded-md dark:text-black"
            >
              <option value="">All</option>
              {ratings.map((rating) => (
                <option key={rating} value={rating}>
                  {rating}+ stars
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Main Product Grid */}
        <main className="w-full p-6">
          {loading ? (
            <Spinner />
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-lg shadow-sm p-3 flex flex-col justify-between hover:shadow-lg transition"
                >
                  {/* Product Image with Hover Zoom */}
                  <div className="relative group">
                    <div className="h-56 w-full rounded-md overflow-hidden bg-gray-100 relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="px-2 pt-2">
                    <p
                      className="text-sm font-medium truncate dark:text-black"
                      title={product.name}
                    >
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm font-bold dark:text-black">${product.price}</span>
                      <div className="text-yellow-500 text-sm">
                        {product.rating} {'★'.repeat(Math.floor(product.rating))}
                      </div>
                    </div>
                    <div className="flex justify-end mt-2">
                      <Link href={`/products/${product._id}`}>
                        <button className="bg-black text-white rounded-full px-4 py-2 text-sm hover:bg-gray-800 transition cursor-pointer">
                          Detail &rarr;
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No products match your filters.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductListing;
