import AnimatedReviews from "@components/AnimatedReviews";
import CaseExample from "@components/CaseExample";
import CustomerReviews from "@components/CustomerReviews";
import HeroSection from "@components/HeroSection"


export default function Home() {
  return (
    <div className="bg-slate-50">
      <HeroSection />
      <CustomerReviews />
      <AnimatedReviews />
      <CaseExample />
    </div>
  );
}
