import Image from "next/image";
import Header from "./components/Home/Header";
import AboutSection from "./components/Home/AboutSection";
import CompanySection from "./components/Home/CompanySection";
import SuccessStories from "./components/Home/SuccessStories";
import ServicesSection from "./components/Home/ServicesSection";
import ProductProcessSection from "./components/Home/Productprocesssection";
import Technologies from "./components/Home/Technologies";
import TestimonialSlider from "./components/Home/TestimonialSlider";
import IndustriesSection from "./components/Branding/IndustriesSection";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <AboutSection />

      <CompanySection />
      <SuccessStories />
      {/* <ServicesSection />
      <ProductProcessSection />
      <Technologies />
      <TestimonialSlider />
      <IndustriesSection /> */}
    </div>
  );
}
