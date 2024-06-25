import AnimatedReviews from "@components/AnimatedReviews";
import CustomerReviews from "@components/CustomerReviews";
import HeroSection from "@components/HeroSection"

export default function Home() {
  return (
    <div className="bg-slate-50">
      <HeroSection />
      <CustomerReviews />
      
      <div className="pt-16">
        <AnimatedReviews />
      </div>
    </div>
  );
}
