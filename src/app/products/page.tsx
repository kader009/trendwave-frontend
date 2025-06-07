'use client';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';

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
    fetch('http://localhost:5000/api/v1/products')
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
    <Container>
    <div className="flex flex-col lg:flex-row">
      <aside className="w-full lg:w-1/4 bg-white shadow-md p-6 lg:sticky lg:top-0 lg:h-screen">
        <h1 className="text-2xl font-bold mb-4">Filters</h1>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full p-2 border rounded-md mb-6"
        />

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Category</h3>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
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
          <h2 className="font-semibold mb-2">Price</h2>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, +e.target.value])}
            className="w-full"
          />
          <p className="text-sm mt-1">
            ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Rating</h3>
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="w-full p-2 border rounded-md"
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

      <main className="w-full lg:w-3/4 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : featuredProducts.length > 0 ? (
          featuredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-all"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                loading='lazy'
                className="w-full h-56 object-cover rounded-md"
              />
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="font-bold mt-1">${product.price}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-sm">
                  {'★'.repeat(Math.floor(product.rating))}
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  ({product.rating.toFixed(1)} Stars)
                </span>
              </div>
              <Link
                href={`/product/${product._id}`}
                className="mt-4 inline-block w-full text-center bg-black text-white py-2 rounded-md hover:bg-gray-600"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No products match your filters.</p>
        )}
      </main>
    </div>
    </Container>
  );
};

export default ProductListing;
