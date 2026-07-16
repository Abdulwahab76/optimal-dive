import { ArrowRight } from "lucide-react";
import Image from "next/image";

const technologies = [
  { name: "github", x: 70, y: 10, size: 66 },
  { name: "html", x: 205, y: -5, size: 62 },
  { name: "mysql", x: 330, y: -18, size: 66 },
  { name: "unreal", x: 440, y: -5, size: 68 },
  { name: "mongodb", x: 540, y: 10, size: 60 },
  { name: "slack", x: 620, y: -18, size: 58 },

  { name: "java", x: 20, y: 95, size: 68 },
  { name: "css", x: 150, y: 65, size: 66 },
  { name: "react", x: 260, y: 55, size: 70 },
  { name: "python", x: 340, y: 98, size: 54 },
  { name: "unity", x: 430, y: 85, size: 56 },
  { name: "docker", x: 500, y: 105, size: 60 },
  { name: "firebase", x: 590, y: 82, size: 62 },

  { name: "kotlin", x: 50, y: 185, size: 54 },
  { name: "laravel", x: 160, y: 170, size: 70 },
  { name: "next", x: 250, y: 150, size: 74 },
  { name: "wordpress", x: 360, y: 170, size: 58 },
  { name: "node", x: 460, y: 175, size: 66 },
  { name: "vercel", x: 560, y: 170, size: 58 },

  { name: "notion", x: 120, y: 245, size: 56 },
  { name: "figma", x: 230, y: 230, size: 54 },
  { name: "shopify", x: 330, y: 228, size: 56 },
  { name: "openai", x: 540, y: 235, size: 56 },
];

export default function Technologies() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-left text-4xl font-semibold text-[#111] md:text-5xl">
          Technologies We Use
        </h2>

        <p className="  mt-5 max-w-5xl font-normal   text-lg leading-7 text-[#6A7280]">
          Hire from our pool of 350+ specialized experts in web, mobile and
          software engineering, specializing in the latest technologies and
          frameworks ready to scale your development team effortlessly.
        </p>

        {/* Desktop */}
        <div className="relative mx-auto mt-20 hidden h-[480px] max-w-[1100px] lg:block">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="absolute flex items-center justify-center rounded-full border border-[#1E1E1E] bg-white transition-all duration-300 hover:-translate-y-1"
              style={{
                left: tech.x * 1.4,
                top: tech.y * 1.4,
                width: tech.size * 1.3,
                height: tech.size * 1.3,
              }}
            >
              <Image
                src={`/images/tech/${tech.name}.svg`}
                alt={tech.name}
                width={tech.size * 0.55}
                height={tech.size * 0.55}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="mt-14 grid grid-cols-4 place-items-center gap-5 sm:grid-cols-5 lg:hidden">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center rounded-full border border-[#1E1E1E] bg-white"
              style={{
                width: 58,
                height: 58,
              }}
            >
              <Image
                src={`/images/tech/${tech.name}.svg`}
                alt={tech.name}
                width={26}
                height={26}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col items-center justify-between gap-8 rounded-lg lg:rounded-full border border-[#9AA5FF] bg-[#F5F6FFB2] px-8 py-10 md:flex-row md:px-10 lg:px-14">
            <h2 className="text-center text-2xl font-semibold tracking-[-0.02em] text-[#111] md:text-left lg:text-4xl lg:leading-none">
              Ready to build something lasting?
            </h2>

            <button className="flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-primary-1 to-primary-2 px-6 text-sm font-medium text-white transition-transform duration-300 hover:scale-105">
              Start Your Project
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
