import { Header } from "@/components/Header";
import HeroSection from "@/components/hero/heroSection";
import BrandStrip from "@/components/brandStrip/brandStrip";
import TopSelling from "@/components/product/topSelling/topSelling";
import StyleSection from "@/components/styleSection/styleSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BrandStrip />
      <TopSelling/>
      <StyleSection/>
    </div>
  );
}
