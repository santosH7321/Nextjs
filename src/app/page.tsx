import CardHoverEffect from "@/components/UpcomingWebinars";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MovingCards from "@/components/MovingCards";
import WaveBackground from "@/components/WaveBackground";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <MovingCards />
        <CardHoverEffect />
        <WaveBackground />
        <Footer />
    </main>
  );
}