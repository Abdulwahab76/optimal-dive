import BrandingHeader from "../components/Branding/BrandingHeader";
import BrandingShowcase from "../components/Branding/BrandingShowcase";
import BrandingServices from "../components/Branding/BrandingServices";
import BrandingProcess from "../components/Branding/BrandingProcess";
import SuccessStories from "../components/Home/SuccessStories";
import TestimonialSlider from "../components/Home/TestimonialSlider";
import IndustriesSection from "../components/Branding/IndustriesSection";
import BrandingFAQ from "../components/Branding/BrandingFAQ";
import { getBrandingPage } from "@/lib/getBrandingPage";
import { getHomePage } from "@/lib/getHomePage";
import { getAutomotivePage } from "@/lib/getAutomotivePage";
import { generateSEOMetadata, generateJsonLD,   } from "@/lib/seo"; // your existing SEO helpers
import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getBrandingPage();
  return generateSEOMetadata(page.meta);
}

const Branding = async () => {
  const brandData = await getBrandingPage();
  const homeData = await getHomePage();
  const autoData = await getAutomotivePage(); // reuse FAQ

  return (
    <>
      <JsonLd data={generateJsonLD(brandData?.meta)} />
      <BrandingHeader brandHero={brandData.brandHero} />
      <BrandingShowcase brandShowcase={brandData.brandShowcase} />
      <BrandingServices brandServices={brandData.brandServices} />
      <BrandingProcess brandProcess={brandData.brandProcess} brandStats={brandData.brandStats} />
      <SuccessStories successStories={homeData.successStories} />
      <TestimonialSlider testimonials={homeData.testimonials} />
      <IndustriesSection industries={homeData.industries} />
      <BrandingFAQ autoFaq={autoData.autoFaq} />
    </>
  );
};

export default Branding;