import {
  Car,
  Landmark,
  Building2,
  Utensils,
  GraduationCap,
  HeartPulse,
} from "lucide-react";
import IndustryCard from "./IndustryCard";

const industries = [
  {
    title: "Automotive",
    icon: Car,
    description:
      "Enhance vehicle management, driver experience, and connected mobility with secure software solutions.",
  },
  {
    title: "Finance",
    icon: Landmark,
    active: true,
    description:
      "Build reliable digital banking, fintech platforms, and payment systems with security at their core.",
  },
  {
    title: "Real Estate",
    icon: Building2,
    description:
      "CRM, property management, online portals, and modern real-estate solutions.",
  },
  {
    title: "Food",
    icon: Utensils,
    description:
      "Restaurant systems, online ordering, inventory management, and delivery platforms.",
  },
  {
    title: "Education",
    icon: GraduationCap,
    description:
      "E-learning platforms, LMS solutions, student portals, and digital education experiences.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    description:
      "Healthcare applications, EMR systems, appointment booking, and patient management.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-[#1C1C1C]">
      {/* Top Curve */}
      <div className="absolute top-0 left-0 z-30 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-28 w-full"
          style={{ transform: "scaleY(-1)" }}
        >
          <path
            fill="#fff"
            d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z"
          />
        </svg>
      </div>

      {/* Bottom Purple Glow */}
      <div
        className="pointer-events-none absolute -bottom-52 left-1/2 -translate-x-1/2 z-0"
        style={{
          width: "1700px",
          height: "520px",
          background: `
          radial-gradient(
            ellipse at center,
            rgba(109,123,248,.48) 0%,
            rgba(81,87,247,.28) 35%,
            rgba(81,87,247,.12) 60%,
            transparent 100%
          )
        `,
          filter: "blur(110px)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-6xl px-6 pt-36 pb-40">
        {/* Heading */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-start">
          <h2 className="text-4xl font-semibold leading-tight text-white lg:text-5xl">
            Industries We Serve
          </h2>

          <p className="max-w-md text-base leading-7 text-white">
            We provide tailored solutions that address the unique demands across
            various industries, delivering transformative experiences to drive
            significant impact.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <IndustryCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 z-30 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-28 w-full"
        >
          <path
            fill="#fff"
            d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z"
          />
        </svg>
      </div>
    </section>
  );
}
