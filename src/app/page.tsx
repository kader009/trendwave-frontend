import BrandMarquee from "@/components/BrandPromotion";
import Category from "@/pages/Category";
import FlashSale from "@/pages/FlashSale";
import Footer from "@/pages/Footer";
import Header from "@/pages/Header";
import TopProducts from "@/pages/TopProducts";

export default function Home() {
  return <div>
    <Header/>
    <FlashSale/>
    <Category/>
    <TopProducts/>
    <BrandMarquee/>
    <Footer/>
  </div>;
}
