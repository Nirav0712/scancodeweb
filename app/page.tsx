import Header from "./components/Header";
import HeroSection from "./components/Herosection";
import CategoriesSection from "./components/CategoriesSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import MarqueeBanner from "./components/MarqueeBanner";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturesFan from "./components/FeaturesFan";
import CustomPrintServices from "./components/CustomPrintServices";
import PartnersSection from "./components/PartnersSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <AboutSection />
      <ServicesSection />
      <MarqueeBanner />
      <WhyChooseUs />
      <FeaturesFan />
      <CustomPrintServices />
      <PartnersSection />
      <TeamSection />
      <TestimonialsSection />
    </>
  );
}
