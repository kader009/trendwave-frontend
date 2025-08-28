'use client';

import { useState, useEffect, useCallback } from 'react';
import Filters from './Filters';
import Spinner from '../Sppiner';
import ProductCard from './ProductCards';
import { Product } from '@/types/Productstype';

export default function ProductListing({ products }: { products: Product[] }) {
  const [filtered, setFiltered] = useState<Product[]>(products);
  const [categories, setCategories] = useState<string[]>([]);
  const [ratings, setRatings] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  // filter states
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');
  const [price, setPrice] = useState([0, 100]);

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    setCategories([...new Set(products.map((p) => p.category))]);
    setRatings([...new Set(products.map((p) => Math.floor(p.rating)))].sort());
  }, [products]);

  const filterProducts = useCallback(() => {
    let updated = [...products];
    if (search)
      updated = updated.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    updated = updated.filter((p) => p.price >= price[0] && p.price <= price[1]);
    if (category) updated = updated.filter((p) => p.category === category);
    if (rating)
      updated = updated.filter((p) => Math.floor(p.rating) >= +rating);
    setFiltered(updated);
    setCurrentPage(1);
  }, [products, search, category, rating, price]);

  useEffect(() => {
    setLoading(true);
    filterProducts();
    setLoading(false);
  }, [filterProducts]);

  const last = currentPage * perPage;
  const first = last - perPage;
  const currentProducts = filtered.slice(first, last);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="w-full lg:w-1/4 bg-white shadow-md p-6 lg:sticky lg:top-0 lg:h-screen">
        <Filters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          categories={categories}
          rating={rating}
          setRating={setRating}
          ratings={ratings}
          price={price}
          setPrice={setPrice}
        />
      </aside>

      <main className="w-full p-6">
        {loading ? (
          <Spinner />
        ) : currentProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-md border ${
                    currentPage === i + 1
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center">
            No products match your filters.
          </p>
        )}
      </main>
    </div>
  );
}
