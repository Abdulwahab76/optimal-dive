import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative   overflow-hidden lg:min-h-screen">
      {/* Background */}
      <Image
        src="/images/header-bg.png"
        alt=""
        fill
        priority
        className="object-contain object-bottom"
      />

      <div
        className="
        relative z-10
        mx-auto
        flex
        min-h-[70dvh]
        max-w-7xl
        flex-col
        px-4
        pt-8
        sm:px-5
        sm:pt-4
        lg:min-h-screen
        lg:pt-27
      "
      >
        {/* Text */}

        {/* Bottom Image */}
        <div
          className="
          mx-auto
          mt-auto
          w-full
          max-w-[300px]
          sm:max-w-md
          md:max-w-2xl
          lg:max-w-4xl
          
        "
        >
          <div
            className="text-center lg:mb-0
          mb-4"
          >
            <h1 className="font-semibold leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-6xl">
              Transforming
              <br />
              <span className="bg-gradient-to-b from-primary-1 to-primary-2 bg-clip-text text-transparent font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
                Digital Futures
              </span>
            </h1>

            <Link
              href="/contact"
              className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-primary-1 to-primary-2 px-5 py-3 text-white sm:mt-8 sm:px-6"
            >
              Start Your Project
              <ArrowRight size={15} />
            </Link>
          </div>

          <Image
            src="/images/center-img.png"
            alt="Hero"
            width={1100}
            height={900}
            priority
            className="h-auto w-full lg:pt-10"
          />
        </div>
      </div>
    </section>
  );
}
