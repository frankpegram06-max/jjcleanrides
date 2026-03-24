/* ============================================================
   JJCleanRides — Home Page
   Single-page scrollable layout assembling all sections
   ============================================================ */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnquiryFormSection from "@/components/EnquiryFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.18 0.04 255)" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <GallerySection />
      <AboutSection />
      <TestimonialsSection />
      <EnquiryFormSection />
      <Footer />
    </div>
  );
}
