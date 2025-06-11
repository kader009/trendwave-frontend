import BrandMarquee from "@/components/BrandPromotion";
import StatsCounter from "@/components/StatsCounter";
import Category from "@/pages/Category";
import FlashSale from "@/pages/FlashSale";
import Header from "@/pages/Header";
import TopProducts from "@/pages/TopProducts";

export default function Home() {
  return <div>
    <Header/>
    <FlashSale/>
    <Category/>
    <TopProducts/>
    <BrandMarquee/>
    <StatsCounter/>
  </div>;
}
