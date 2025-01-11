import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import PricingPlans from "@/components/PricingPlans";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section id="features">
        <HeroSection />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="pricing">
        <PricingPlans />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
