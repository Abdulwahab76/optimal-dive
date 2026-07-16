import Image from "next/image";
import Header from "./components/Home/Header";
import AboutSection from "./components/Home/AboutSection";
import CompanySection from "./components/Home/CompanySection";
import SuccessStories from "./components/Home/SuccessStories";
import ServicesSection from "./components/Home/ServicesSection";
import ProductProcessSection from "./components/Home/Productprocesssection";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutSection />
      <CompanySection />
      <SuccessStories />
      <ServicesSection />
      <ProductProcessSection />
    </div>
  );
}
