// app/(frontend)/components/Home/CompanySection.tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { HomePage } from "@/payload-types";
import { mediaUrl } from "@/lib/media";   // ✅ changed from '@/lib/getHomePage'

export default function CompanySection({ clients }: { clients?: HomePage["clients"] }) {
  const logos = clients?.clientLogos?.length
    ? clients.clientLogos
    : ["sony", "amazon", "deloitte", "walmart", "starbucks", "allianz", "Healthcare", "shell", "visa", "att"]
        .map((clientName) => ({ clientName, clientLogo: null }));

  const half = Math.ceil(logos.length / 2);
  const firstRow = logos.slice(0, half);
  const secondRow = logos.slice(half);
  const mobileLogos = logos;

  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % mobileLogos.length), 2500);
    return () => clearInterval(timer);
  }, [mobileLogos.length]);

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="mb-10 text-center text-xl font-semibold text-primary-1">
          {clients?.clientsHeading ?? "Clients We've Served"}
        </h2>

        <div className="hidden md:block">
          <div className="mr-auto w-8/12 overflow-hidden">
            <div className="flex w-max animate-marquee-left gap-6">
              {[...firstRow, ...firstRow].map((logo, i) => (
                <ClientCard key={`${logo.clientName}-${i}`} logo={logo} />
              ))}
            </div>
          </div>
          <div className="mt-6 ml-auto w-8/12 overflow-hidden">
            <div className="ml-24 flex w-max animate-marquee-right gap-6">
              {[...secondRow, ...secondRow].map((logo, i) => (
                <ClientCard key={`${logo.clientName}-${i}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${active * 100}%)` }}>
            {mobileLogos.map((logo) => (
              <div key={logo.clientName} className="flex w-full shrink-0 justify-center px-4">
                <ClientCard logo={logo} />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {mobileLogos.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`transition-all ${active === i ? "h-2 w-6 rounded-full bg-primary-1" : "h-2 w-2 rounded-full bg-gray-300"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientCard({ logo }: { logo: { clientName: string; clientLogo?: any } }) {
  const src = mediaUrl(logo.clientLogo, `/images/${logo.clientName}.png`);
  return (
    <div className="h-52 w-full max-w-[250px] shrink-0 rounded-2xl border border-[#ECECEC] bg-white" style={{ boxShadow: `inset 0 0 10px rgba(0,0,0,0.035), 0 8px 24px rgba(0,0,0,0.025)` }}>
      <div className="flex h-full items-center justify-center">
        <Image src={src} alt={logo.clientName} width={120} height={120} className="h-auto w-32 object-contain" />
      </div>
    </div>
  );
}