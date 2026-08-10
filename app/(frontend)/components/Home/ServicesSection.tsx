"use client";

import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  title: string;
  image: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Branding",
    image: "/images/verified-img.png",
    description:
      "We craft iconic brand identities that combine visual design, strategic messaging, and precise positioning. Build trust, convey your value, and become unforgettable.",
  },
  {
    title: "Websites Development",
    image: "/images/setting-img.png",
    description:
      "Custom, high-performance websites built for speed, scale, and user experience. From sleek landing pages to complex platforms—we engineer digital presence that converts.",
  },
  {
    title: "Digital Marketing",
    image: "/images/digital-marketing.png",
    description:
      "Strategic digital campaigns that turn attention into action. From content to paid media, we drive engagement, leads, and conversions.",
  },
  {
    title: "Search Engine Optimization",
    image: "/images/seo.png",
    description:
      "Data-driven search optimization that puts your business in front of the right audience. Higher rankings, organic growth, and measurable ROI.",
  },
  {
    title: "Mobile Application Development",
    image: "/images/mobile.png",
    description:
      "Native and cross-platform apps built for iOS and Android. Intuitive design, robust architecture, and seamless performance—right in your users' pockets.",
  },
  {
    title: "AI Solution",
    image: "/images/ai-solution.png",
    description:
      "Intelligent automation and machine learning solutions that streamline operations, unlock insights, and give your business a competitive edge.",
  },
  // 👉 add more service objects here — the stack scales automatically
];

const STICKY_TOP = 110; // px from top of viewport where the stack "locks"
const PEEK = 22; // px of each earlier card left visible behind the next one

export default function ServicesSection() {
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
          Services We Provide
        </h2>

        <div className="relative w-11/12 mx-auto">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            return (
              <div
                key={service.title}
                className="relative my-5"
                style={{ height: isLast ? undefined : "65vh" }}
              >
                <div
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="sticky"
                  style={{
                    top: `${STICKY_TOP + index * PEEK}px`,
                    zIndex: index + 1,
                  }}
                >
                  <ServiceCard
                    {...service}
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
