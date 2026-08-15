// app/(frontend)/components/Home/Technologies.tsx
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { HomePage } from "@/payload-types";
import { mediaUrl } from "@/lib/media";

const defaultIcons = [
  { techName: "github", techLogo: null, techX: 70, techY: 10, techSize: 66 },
  { techName: "html", techLogo: null, techX: 205, techY: -5, techSize: 62 },
  { techName: "mysql", techLogo: null, techX: 330, techY: -18, techSize: 66 },
  { techName: "unreal", techLogo: null, techX: 440, techY: -5, techSize: 68 },
  { techName: "mongodb", techLogo: null, techX: 540, techY: 10, techSize: 60 },
  { techName: "slack", techLogo: null, techX: 620, techY: -18, techSize: 58 },
  { techName: "java", techLogo: null, techX: 20, techY: 95, techSize: 68 },
  { techName: "css", techLogo: null, techX: 150, techY: 65, techSize: 66 },
  { techName: "react", techLogo: null, techX: 260, techY: 55, techSize: 70 },
  { techName: "python", techLogo: null, techX: 340, techY: 98, techSize: 54 },
  { techName: "unity", techLogo: null, techX: 430, techY: 85, techSize: 56 },
  { techName: "docker", techLogo: null, techX: 500, techY: 105, techSize: 60 },
  { techName: "firebase", techLogo: null, techX: 590, techY: 82, techSize: 62 },
  { techName: "kotlin", techLogo: null, techX: 50, techY: 185, techSize: 54 },
  { techName: "laravel", techLogo: null, techX: 160, techY: 170, techSize: 70 },
  { techName: "next", techLogo: null, techX: 250, techY: 150, techSize: 74 },
  { techName: "wordpress", techLogo: null, techX: 360, techY: 170, techSize: 58 },
  { techName: "node", techLogo: null, techX: 460, techY: 175, techSize: 66 },
  { techName: "vercel", techLogo: null, techX: 560, techY: 170, techSize: 58 },
  { techName: "notion", techLogo: null, techX: 120, techY: 245, techSize: 56 },
  { techName: "figma", techLogo: null, techX: 230, techY: 230, techSize: 54 },
  { techName: "shopify", techLogo: null, techX: 330, techY: 228, techSize: 56 },
  { techName: "openai", techLogo: null, techX: 540, techY: 235, techSize: 56 },
];

 
 function resolvePosition(
  entry: { techName: string; techX?: number | null; techY?: number | null; techSize?: number | null },
  fallbackIndex: number
) {
  const hasCustomPosition = !!entry.techX || !!entry.techY;

  if (hasCustomPosition) {
    return {
      x: entry.techX ?? 0,
      y: entry.techY ?? 0,
      size: entry.techSize || 60,
    };
  }

  const matchedDefault = defaultIcons.find(
    (d) => d.techName.toLowerCase() === entry.techName?.trim().toLowerCase()
  );

  if (matchedDefault) {
    return {
      x: matchedDefault.techX,
      y: matchedDefault.techY,
      size: entry.techSize || matchedDefault.techSize,
    };
  }

  const col = fallbackIndex % 6;
  const row = Math.floor(fallbackIndex / 6);
  return {
    x: col * 130,
    y: row * 130,
    size: entry.techSize || 60,
  };
}

export default function Technologies({ technologies: tech }: { technologies?: HomePage["technologies"] }) {
  const icons = tech?.techIcons?.length ? tech.techIcons : defaultIcons;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-left text-4xl font-semibold text-[#111] md:text-5xl">
          {tech?.techHeading ?? "Technologies We Use"}
        </h2>

        <p className="mt-5 max-w-5xl font-normal text-lg leading-7 text-[#6A7280]">
          {tech?.techDescription ??
            "Hire from our pool of 350+ specialized experts in web, mobile and software engineering, specializing in the latest technologies and frameworks ready to scale your development team effortlessly."}
        </p>

        {/* Desktop */}
        <div className="relative mx-auto mt-20 hidden h-[480px] max-w-[1100px] lg:block">
          {icons.map((t, i) => {
            const { x, y, size } = resolvePosition(t, i);
            const src = mediaUrl(t.techLogo, `/images/tech/${t.techName}.svg`);

            return (
              <div
                key={t.techName + i}
                className="absolute flex items-center justify-center rounded-full border border-[#1E1E1E] bg-white transition-all duration-300 hover:-translate-y-1"
                style={{ left: x * 1.4, top: y * 1.4, width: size * 1.3, height: size * 1.3 }}
              >
                <Image src={src} alt={t.techName} width={size * 0.55} height={size * 0.55} className="object-contain" />
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="mt-14 grid grid-cols-4 place-items-center gap-5 sm:grid-cols-5 lg:hidden">
          {icons.map((t, i) => {
            const src = mediaUrl(t.techLogo, `/images/tech/${t.techName}.svg`);
            return (
              <div key={t.techName + i} className="flex items-center justify-center rounded-full border border-[#1E1E1E] bg-white" style={{ width: 58, height: 58 }}>
                <Image src={src} alt={t.techName} width={26} height={26} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col items-center justify-between gap-8 rounded-lg lg:rounded-full border border-[#9AA5FF] bg-[#F5F6FFB2] px-8 py-10 md:flex-row md:px-10 lg:px-14">
            <h2 className="text-center text-2xl font-semibold tracking-[-0.02em] text-[#111] md:text-left lg:text-4xl lg:leading-none">
              {tech?.techCtaHeading ?? "Ready to build something lasting?"}
            </h2>
            <Link href={tech?.techCtaLink ?? "/contact-us"}>
              <button className="flex cursor-pointer h-12 items-center gap-2 rounded-full bg-gradient-to-r from-primary-1 to-primary-2 px-6 text-sm font-medium text-white transition-transform duration-300 hover:scale-105">
                {tech?.techCtaLabel ?? "Start Your Project"}
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}