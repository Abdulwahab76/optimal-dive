"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const firstRow = ["sony", "amazon", "deloitte", "walmart", "starbucks"];

const secondRow = ["allianz", "unitedhealthcare", "shell", "visa", "att"];

const mobileLogos = [...firstRow, ...secondRow];

export default function ClientsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % mobileLogos.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="mb-10 text-center text-xl font-semibold text-primary-1">
          Clients We've Served
        </h2>

        {/* ---------------- Desktop ---------------- */}

        <div className="hidden md:block">
          {/* First Row */}

          <div className="mr-auto w-8/12 overflow-hidden">
            <div className="flex w-max animate-marquee-left gap-6">
              {[...firstRow, ...firstRow].map((logo, i) => (
                <ClientCard key={`${logo}-${i}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* Second Row */}

          <div className="mt-6 ml-auto w-8/12 overflow-hidden">
            <div className="ml-24 flex w-max animate-marquee-right gap-6">
              {[...secondRow, ...secondRow].map((logo, i) => (
                <ClientCard key={`${logo}-${i}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- Mobile ---------------- */}

        <div className="md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {mobileLogos.map((logo) => (
              <div
                key={logo}
                className="flex w-full shrink-0 justify-center px-4"
              >
                <ClientCard logo={logo} />
              </div>
            ))}
          </div>

          {/* Dots */}

          <div className="mt-6 flex justify-center gap-2">
            {mobileLogos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all ${
                  active === i
                    ? "h-2 w-6 rounded-full bg-primary-1"
                    : "h-2 w-2 rounded-full bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientCard({ logo }: { logo: string }) {
  return (
    <div
      className="
        h-52
        w-full
        max-w-[250px]
        shrink-0
        rounded-2xl
        border
        border-[#ECECEC]
        bg-white
      "
      style={{
        boxShadow: `
          inset 0 0 10px rgba(0,0,0,0.035),
          0 8px 24px rgba(0,0,0,0.025)
        `,
      }}
    >
      <div className="flex h-full items-center justify-center">
        <Image
          src={`/images/${logo}.png`}
          alt={logo}
          width={120}
          height={50}
          className="h-auto w-28 object-contain opacity-60"
        />
      </div>
    </div>
  );
}
