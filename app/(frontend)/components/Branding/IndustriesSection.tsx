// app/(frontend)/components/Branding/IndustriesSection.tsx
"use client";
import { useState } from "react";
import IndustryCard from "./IndustryCard";
import type { HomePage } from "@/payload-types";
import { mediaUrl } from "@/lib/media";

const defaultIndustries = [
  { industryTitle: "Automotive", industryIcon: null, industryDescription: "Enhance vehicle management, driver experience, and connected mobility with secure software solutions." },
  { industryTitle: "Finance", industryIcon: null, industryDescription: "Build reliable digital banking, fintech platforms, and payment systems with security at their core." },
  { industryTitle: "Real Estate", industryIcon: null, industryDescription: "CRM, property management, online portals, and modern real-estate solutions." },
  { industryTitle: "Food", industryIcon: null, industryDescription: "Restaurant systems, online ordering, inventory management, and delivery platforms." },
  { industryTitle: "Education", industryIcon: null, industryDescription: "E-learning platforms, LMS solutions, student portals, and digital education experiences." },
  { industryTitle: "Healthcare", industryIcon: null, industryDescription: "Healthcare applications, EMR systems, appointment booking, and patient management." },
];

const defaultIcons = [
  "/icons/icon-2.png", "/icons/icon-5.png", "/icons/icon-4.png",
  "/icons/icon-6.png", "/icons/icon-3.png", "/icons/icon-1.png",
];

export default function IndustriesSection({ industries }: { industries?: HomePage["industries"] }) {
  const items = industries?.industryItems?.length ? industries.industryItems : defaultIndustries;
  const [activeIndustry, setActiveIndustry] = useState(items[1]?.industryTitle ?? "Finance");

  return (
    <section className="relative overflow-hidden bg-[#1C1C1C]">
      <div className="absolute top-0 left-0 z-30 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="block h-10 w-full md:hidden" style={{ transform: "scaleY(-1)" }}>
          <rect width="1440" height="40" fill="#fff" />
        </svg>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="hidden h-28 w-full md:block" style={{ transform: "scaleY(-1)" }}>
          <path fill="#fff" d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z" />
        </svg>
      </div>

      <div
        className="pointer-events-none absolute -bottom-52 left-1/2 -translate-x-1/2 z-0"
        style={{
          width: "1700px",
          height: "520px",
          background: `radial-gradient(ellipse at center, rgba(109,123,248,.48) 0%, rgba(81,87,247,.28) 35%, rgba(81,87,247,.12) 60%, transparent 100%)`,
          filter: "blur(110px)",
        }}
      />

      <div className="relative z-20 mx-auto max-w-6xl px-6 pt-36 pb-40">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-start">
          <h2 className="text-4xl font-semibold leading-tight text-white lg:text-5xl">
            {industries?.industriesHeading ?? "Industries We Serve"}
          </h2>
          <p className="max-w-md text-base leading-7 text-white">
            {industries?.industriesDescription ??
              "We provide tailored solutions that address the unique demands across various industries, delivering transformative experiences to drive significant impact."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <IndustryCard
              key={item.industryTitle + index}
              title={item.industryTitle}
              description={item.industryDescription}
              icon={mediaUrl(item.industryIcon, defaultIcons[index] ?? defaultIcons[0])}
              active={activeIndustry === item.industryTitle}
              onClick={() => setActiveIndustry(item.industryTitle)}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-30 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="block h-10 w-full md:hidden">
          <rect width="1440" height="40" fill="#fff" />
        </svg>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="hidden h-28 w-full md:block">
          <path fill="#fff" d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z" />
        </svg>
      </div>
    </section>
  );
}