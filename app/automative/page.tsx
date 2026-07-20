import React from "react";
import AutoHeader from "../components/Automative/AutoHeader";
import SolutionsSection from "../components/Automative/SolutionsSection";
import WhyChooseUs from "../components/Automative/WhyChooseUs";
import ServicesSection from "../components/Home/ServicesSection";
import SuccessStories from "../components/Home/SuccessStories";
import Technologies from "../components/Home/Technologies";
import TestimonialSlider from "../components/Home/TestimonialSlider";
const solutions = [
  {
    id: 1,
    number: "01",
    title: "Autonomous Driving Systems",
    description:
      "Autonomous Driving Systems enhance safety and efficiency by enabling self-navigation using AI, sensors, and real-time data for precision.",
    features: [
      "Smart Navigation",
      "Adaptive Cruise Control",
      "Automatic Parking",
      "Night Vision Assistance",
      "Real-time Object Detection",
      "Traffic Signal Recognition",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Predictive Maintenance",
    description:
      "Predictive Maintenance uses AI to detect issues before breakdowns, ensuring smooth and safe vehicle operation.",
    features: [
      "AI-driven Diagnostics",
      "Automated Alerts",
      "Early Issue Detection",
      "Data-driven Maintenance",
      "Performance Monitoring",
      "Improved Vehicle Longevity",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "AI-powered Safety Features",
    description:
      "AI-powered safety features improve autonomous driving by detecting hazards and preventing collisions using real-time sensor data.",
    features: [
      "Collision Prevention",
      "Emergency Braking",
      "Blind Spot Detection",
      "Weather Condition Alerts",
      "Cross Traffic Alerts",
      "Lane Keeping Assistance",
    ],
  },
];
const Automative = () => {
  return (
    <div>
      <AutoHeader />
      <SolutionsSection
        title="Software Solutions for"
        highlight="Automotive Industry"
        solutions={solutions}
      />
      <WhyChooseUs />
      <ServicesSection />
      <SuccessStories />
      <Technologies />
      <TestimonialSlider />
    </div>
  );
};

export default Automative;
