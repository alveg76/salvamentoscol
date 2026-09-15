import Header from "@/components/Header";
import InfoBar from "@/components/InfoBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CatalogSection from "@/components/CatalogSection";
import InstagramSection from "@/components/InstagramSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <InfoBar />
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
