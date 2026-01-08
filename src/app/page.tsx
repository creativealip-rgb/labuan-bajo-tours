import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularTrips from "@/components/PopularTrips";
import PlanningSection from "@/components/PlanningSection";
import DiscoverSection from "@/components/DiscoverSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PopularTrips />
        <PlanningSection />
        <DiscoverSection />
        <Testimonials />
        <FAQ />
        <PromoSection />
      </main>
      <Footer />
    </>
  );
}
