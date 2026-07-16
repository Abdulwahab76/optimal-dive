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
      let current = 0;
      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        // a card becomes "active" once it has scrolled up to its sticky slot
        if (top <= STICKY_TOP + index * PEEK + 4) current = index;
      });
      setActive(current);
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
                className="relative"
                style={{ height: isLast ? undefined : "60vh" }}
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
