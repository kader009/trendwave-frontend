import { Props } from '@/types/Filtertype';

export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
  categories,
  rating,
  setRating,
  ratings,
  price,
  setPrice,
}: Props) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Filters</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full p-2 rounded-md border border-gray-300 bg-white text-gray-800 
               dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 
               focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mb-6">
        <h3 className="font-semibold mb-2 dark:text-white">Category</h3>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300 bg-white text-gray-800 
               dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 
               focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold mb-2 dark:text-white">Price</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={price[1]}
          onChange={(e) => setPrice([0, +e.target.value])}
          className="w-full"
        />
        <p className="text-sm mt-1 dark:text-white">
          ${price[0]} - ${price[1]}
        </p>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Rating
        </h3>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300 bg-white text-gray-800 
               dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 
               focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          {ratings.map((r) => (
            <option key={r} value={r}>
              {r}+ stars
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
