export type Props = {
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