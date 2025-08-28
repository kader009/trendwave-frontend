type Props = {
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  categories: string[];
  rating: string;
  setRating: (v: string) => void;
  ratings: number[];
  price: number[];
  setPrice: (v: number[]) => void;
};

export default function Filters({
  search, setSearch,
  category, setCategory, categories,
  rating, setRating, ratings,
  price, setPrice
}: Props) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 dark:text-black">Filters</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full p-2 border rounded-md mb-6 dark:text-black"
      />

      <div className="mb-6">
        <h3 className="font-semibold mb-2 dark:text-black">Category</h3>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-md dark:text-black"
        >
          <option value="">All</option>
          {categories.map((cat) => <option key={cat}>{cat}</option>)}
        </select>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold mb-2 dark:text-black">Price</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={price[1]}
          onChange={(e) => setPrice([0, +e.target.value])}
          className="w-full"
        />
        <p className="text-sm mt-1 dark:text-black">${price[0]} - ${price[1]}</p>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2 dark:text-black">Rating</h3>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 border rounded-md dark:text-black"
        >
          <option value="">All</option>
          {ratings.map((r) => <option key={r} value={r}>{r}+ stars</option>)}
        </select>
      </div>
    </>
  );
}
