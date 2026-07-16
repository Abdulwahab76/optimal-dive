import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Hero.jsx
export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/images/header-bg.png"
        alt="Background"
        fill
        className="mt-32 "
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold leading-15">
          Transforming
          <br />
          <span className="text-7xl font-bold text-indigo-500">
            Digital Futures
          </span>
        </h1>

        <div className="mt-8 flex w-fit mx-auto items-center gap-2 rounded-full bg-gradient-to-b from-primary-1 to-primary-2 px-6 py-3 text-white">
          <button className="text-sm font-semibold">Start Your Project</button>
          <ArrowRight size={14} />
        </div>

        <Image
          src="/images/center-img.png"
          alt="Hero"
          width={900}
          height={900}
          className="mx-auto mt-12 w-full max-w-2xl"
        />
      </div>
    </section>
  );
}
