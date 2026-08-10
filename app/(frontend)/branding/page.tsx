import BrandingHeader from "../components/Branding/BrandingHeader";
import BrandingShowcase from "../components/Branding/BrandingShowcase";
import BrandingServices from "../components/Branding/BrandingServices";
import BrandingProcess from "../components/Branding/BrandingProcess";
import SuccessStories from "../components/Home/SuccessStories";
import TestimonialSlider from "../components/Home/TestimonialSlider";
import IndustriesSection from "../components/Branding/IndustriesSection";
import BrandingFAQ from "../components/Branding/BrandingFAQ";

const Branding = () => {
  return (
    <>
      <BrandingHeader />
      <BrandingShowcase />
      <BrandingServices />
      <BrandingProcess />
      <SuccessStories />
      <TestimonialSlider />
      <IndustriesSection />
      <BrandingFAQ />
    </>
  );
};

export default Branding;
