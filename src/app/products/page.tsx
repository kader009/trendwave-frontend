import ProductListing from '@/components/products/ProductListing';

async function getProducts() {
  try {
    const res = await fetch(
      'https://trendwave-backend.onrender.com/api/v1/products',
      {
        cache: 'no-store',
        next: { revalidate: 0 },
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    return res.json();
  } catch (error) {
    console.error('Fetch failed:', error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductListing products={products} />;
}
