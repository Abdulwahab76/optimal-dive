"use client";
import { useRef, useState } from "react";
import {
  UserRound, Cog, ShieldCheck, ClipboardCheck, LayoutDashboard, Megaphone,
  type LucideIcon, ArrowLeft, ArrowRight,
} from "lucide-react";
import type { AutomotivePage } from "@/payload-types";

const iconMap: Record<string, LucideIcon> = {
  UserRound, Cog, ShieldCheck, ClipboardCheck, LayoutDashboard, Megaphone,
};

const defaultItems = [
  { whyTitle: "Automobile Experts", whyIcon: "UserRound", whyDescription: "Our team of experienced automotive specialists provides deep industry expertise, delivering optimized and reliable software solutions." },
  { whyTitle: "Custom Solutions", whyIcon: "Cog", whyDescription: "Every automotive business is unique. We build scalable, efficient, and custom software tailored to your requirements." },
  { whyTitle: "Data Security", whyIcon: "ShieldCheck", whyDescription: "Enterprise-grade security practices ensure your sensitive business and vehicle data remains protected." },
  { whyTitle: "QA & Testing", whyIcon: "ClipboardCheck", whyDescription: "Comprehensive testing guarantees high performance, stability, and long-term reliability." },
  { whyTitle: "Digital Cockpits", whyIcon: "LayoutDashboard", whyDescription: "Modern digital dashboards with AI-powered experiences create seamless interactions." },
  { whyTitle: "Effective Onboarding", whyIcon: "Megaphone", whyDescription: "A smooth onboarding process enables your teams to become productive quickly." },
];

export default function WhyChooseUs({ autoWhyChooseUs }: { autoWhyChooseUs?: AutomotivePage["autoWhyChooseUs"] }) {
  const title = autoWhyChooseUs?.autoWhyTitle ?? "Why us for Automotive business";
  const data = autoWhyChooseUs?.autoWhyItems?.length ? autoWhyChooseUs.autoWhyItems : defaultItems;

  const [activeId, setActiveId] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "right" ? 340 : -340, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#f6f7fd] py-24">
      <div className="absolute top-0 left-0 z-30 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="block h-28 w-full" style={{ transform: "scaleY(-1)" }}>
          <path fill="#fff" d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-5 pt-12">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-center md:text-5xl">{title}</h2>

        <div className="hidden gap-6 justify-center lg:grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 320px))" }}>
          {data.map((item, index) => {
            const Icon = iconMap[item.whyIcon ?? "UserRound"] ?? UserRound;
            const active = activeId === index;

            return (
              <button
                key={item.whyTitle + index}
                onClick={() => setActiveId(index)}
                className={`group w-80 rounded-2xl p-7 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  active ? "bg-gradient-to-br from-[#5B66F6] to-[#737DFF] text-white" : "bg-white shadow-sm"
                }`}
              >
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full ${active ? "bg-white text-[#5B66F6]" : "bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600"}`}>
                  <Icon size={24} />
                </div>
                <h3 className={`mb-3 text-xl font-semibold ${active ? "text-white" : "text-gray-900"}`}>{item.whyTitle}</h3>
                <p className={`text-lg leading-6 ${active ? "text-blue-100" : "text-gray-500"}`}>{item.whyDescription}</p>
              </button>
            );
          })}
        </div>

        <div className="relative mt-12 lg:hidden">
          <div ref={scrollRef} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 scroll-smooth">
            {data.map((item, index) => {
              const Icon = iconMap[item.whyIcon ?? "UserRound"] ?? UserRound;
              return (
                <div key={item.whyTitle + index} className="w-full shrink-0 snap-center rounded-2xl p-7 transition-all duration-500 text-white bg-white shadow-sm">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.whyTitle}</h3>
                  <p className="text-lg leading-6 text-gray-500">{item.whyDescription}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <button onClick={() => scroll("left")} className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 transition hover:border-primary-1 hover:bg-primary-1 hover:text-white">
              <ArrowLeft size={18} />
            </button>
            <button onClick={() => scroll("right")} className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 transition hover:border-primary-1 hover:bg-primary-1 hover:text-white">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}