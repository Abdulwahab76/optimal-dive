// app/(frontend)/components/Home/ServicesSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import type { HomePage } from "@/payload-types";
import { mediaUrl } from "@/lib/media";

const defaultServices = [
  { serviceTitle: "Branding", serviceImage: null, serviceDescription: "We craft iconic brand identities that combine visual design, strategic messaging, and precise positioning. Build trust, convey your value, and become unforgettable." },
  { serviceTitle: "Websites Development", serviceImage: null, serviceDescription: "Custom, high-performance websites built for speed, scale, and user experience. From sleek landing pages to complex platforms—we engineer digital presence that converts." },
  { serviceTitle: "Digital Marketing", serviceImage: null, serviceDescription: "Strategic digital campaigns that turn attention into action. From content to paid media, we drive engagement, leads, and conversions." },
  { serviceTitle: "Search Engine Optimization", serviceImage: null, serviceDescription: "Data-driven search optimization that puts your business in front of the right audience. Higher rankings, organic growth, and measurable ROI." },
  { serviceTitle: "Mobile Application Development", serviceImage: null, serviceDescription: "Native and cross-platform apps built for iOS and Android. Intuitive design, robust architecture, and seamless performance—right in your users' pockets." },
  { serviceTitle: "AI Solution", serviceImage: null, serviceDescription: "Intelligent automation and machine learning solutions that streamline operations, unlock insights, and give your business a competitive edge." },
];

const defaultImages = [
  "/images/verified-img.png", "/images/setting-img.png", "/images/digital-marketing.png",
  "/images/seo.png", "/images/mobile.png", "/images/ai-solution.png",
];

const STICKY_TOP = 110;
const PEEK = 22;

export default function ServicesSection({ services }: { services?: HomePage["services"] }) {
  const items = services?.serviceItems?.length ? services.serviceItems : defaultServices;
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ticking = useRef(false);

  useEffect(() => {
    const updateActive = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActive(closestIndex);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-14 text-center text-5xl font-bold">
          {services?.servicesHeading ?? "Services We Provide"}
        </h2>

        <div className="relative w-11/12 mx-auto">
          {items.map((service, index) => {
            const isLast = index === items.length - 1;
            return (
              <div
                key={service.serviceTitle + index}
                className="relative my-5"
                style={{ height: isLast ? undefined : "65vh" }}
              >
                <div
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="sticky"
                  style={{ top: `${STICKY_TOP + index * PEEK}px`, zIndex: index + 1 }}
                >
                  <ServiceCard
                    title={service.serviceTitle}
                    description={service.serviceDescription}
                    image={mediaUrl(service.serviceImage, defaultImages[index] ?? defaultImages[0])}
                    active={active === index}
                    onClick={() => setActive(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}