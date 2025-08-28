import ProductListing from '@/components/products/ProductListing';

async function getProducts() {
  const res = await fetch(
    'https://trendwave-backend.onrender.com/api/v1/products',
    {
      cache: 'no-store',
    }
  );
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductListing products={products} />;
}
