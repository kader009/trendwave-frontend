import BrandMarquee from '@/components/BrandPromotion';
import Testimonial from '@/components/Testimonial';
import Category from '@/pages/Category';
import FlashSale from '@/pages/FlashSale';
import Header from '@/components/Header';
import TopProducts from '@/pages/TopProducts';

export default function Home() {
  return (
    <div>
      <Header />
      <FlashSale />
      <Category />
      <TopProducts />
      <Testimonial />
      <BrandMarquee />
    </div>
  );
}
