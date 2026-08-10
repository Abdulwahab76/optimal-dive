import React from "react";
import AutoHeader from "../components/Automative/AutoHeader";
import SolutionsSection from "../components/Automative/SolutionsSection";
import WhyChooseUs from "../components/Automative/WhyChooseUs";
import ServicesSection from "../components/Home/ServicesSection";
import SuccessStories from "../components/Home/SuccessStories";
import Technologies from "../components/Home/Technologies";
import TestimonialSlider from "../components/Home/TestimonialSlider";
import IndustriesSection from "../components/Branding/IndustriesSection";
import BrandingFAQ from "../components/Branding/BrandingFAQ";
import { getAutomotivePage } from "@/lib/getAutomotivePage";
import { getHomePage } from "@/lib/getHomePage";
import type { Metadata } from "next";
import { generateSEOMetadata, generateJsonLD } from "@/lib/seo";

import JsonLd from "../components/JsonLd";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAutomotivePage();

  return generateSEOMetadata(page.meta);
}

const Automative = async () => {
  const autoData = await getAutomotivePage();
  const homeData = await getHomePage(); // for shared sections

  return (
    <div>
      <JsonLd data={generateJsonLD(autoData?.meta)} />
      <AutoHeader autoHero={autoData.autoHero} />
      <SolutionsSection autoSolutions={autoData.autoSolutions} />
      <WhyChooseUs autoWhyChooseUs={autoData.autoWhyChooseUs} />
      <ServicesSection services={homeData.services} />
      <SuccessStories successStories={homeData.successStories} />
      <Technologies technologies={homeData.technologies} />
      <TestimonialSlider testimonials={homeData.testimonials} />
      <IndustriesSection industries={homeData.industries} />
      <BrandingFAQ autoFaq={autoData.autoFaq} />
    </div>
  );
};

export default Automative;
