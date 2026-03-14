import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeatureSection from "@/components/FeatureSection";
import ReviewSection from "@/components/ReviewSection";
import LowerCallToActionSection from "@/components/LowerCallToActionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Stats />
      <FeatureSection />
      <ReviewSection />
      <LowerCallToActionSection />
      <Footer />
    </div>
  );
}
