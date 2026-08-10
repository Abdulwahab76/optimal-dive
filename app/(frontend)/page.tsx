// app/(frontend)/page.tsx
import Header from "./components/Home/Header";
import AboutSection from "./components/Home/AboutSection";
import CompanySection from "./components/Home/CompanySection";
import SuccessStories from "./components/Home/SuccessStories";
import ServicesSection from "./components/Home/ServicesSection";
import ProductProcessSection from "./components/Home/Productprocesssection";
import Technologies from "./components/Home/Technologies";
import TestimonialSlider from "./components/Home/TestimonialSlider";
import IndustriesSection from "./components/Branding/IndustriesSection";
import LatestInsights from "./components/Home/LatestInsights";
import { getHomePage } from "@/lib/getHomePage";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePage();
  return {
    title: data.meta?.title ?? "Optimal Dive",
    description: data.meta?.description ?? undefined,
  };
}

export default async function Home() {
  const data = await getHomePage();

  return (
    <div>
      <Header hero={data.hero} />
      <AboutSection about={data.about} stats={data.stats} />
      <CompanySection clients={data.clients} />
      <SuccessStories successStories={data.successStories} />
      <ServicesSection services={data.services} />
      <ProductProcessSection process={data.process} />
      <Technologies technologies={data.technologies} />
      <TestimonialSlider testimonials={data.testimonials} />
      <IndustriesSection industries={data.industries} />
      <LatestInsights latestInsights={data.latestInsights} />
    </div>
  );
}