import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background - Desktop Only */}
      <Image
        src="/images/header-bg.png"
        alt=""
        fill
        priority
        className="hidden md:block object-contain object-bottom relative top-20"
      />

      <div
        className="
    relative z-10
    max-w-7xl
    mx-auto

    flex
    flex-col-reverse
    sm:flex-col

    px-4
    pt-8

    sm:px-5
    sm:pt-4

    lg:pt-24
  "
      >
        {/* Text */}
        <div className="text-center">
          <h1
            className="
        font-semibold
        leading-tight

        text-3xl

        sm:text-5xl
        md:text-6xl
        lg:text-6xl
      "
          >
            Transforming
            <br />
            <span
              className="
    bg-gradient-to-b
    from-primary-1
    to-primary-2
    bg-clip-text
    text-transparent
    font-bold
    text-4xl
    sm:text-6xl
    md:text-7xl
    lg:text-8xl
  "
            >
              Digital Futures
            </span>
          </h1>

          <Link
            href="/contact"
            className="mx-auto mt-6 sm:mt-8 flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-primary-1 to-primary-2 px-5 py-3 sm:px-6 text-white"
          >
            Start Your Project
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Image */}
        <div
          className="
      mx-auto

      mb-8
      sm:mb-0
      sm:mt-10

      w-full
      max-w-[300px]

      sm:max-w-md
      md:max-w-2xl
      lg:max-w-4xl
    "
        >
          <Image
            src="/images/center-img.png"
            alt="Hero"
            width={1100}
            height={900}
            priority
            className="h-auto w-full  pt-10"
          />
        </div>
      </div>
    </section>
  );
}
