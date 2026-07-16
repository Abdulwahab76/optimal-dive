"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  image: string;
  active: boolean;
  onClick: () => void;
}

export default function ServiceCard({
  title,
  description,
  image,
  active,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={`
        relative
        w-full
        overflow-hidden
        rounded-[26px]
        cursor-pointer
        transition-all
        duration-500
        ease-out

        px-6
        pt-8

        md:px-12
        md:pt-16
 
        ${
          active
            ? "bg-[#1F1F1F] text-white min-h-[390px] md:h-[450px]"
            : "bg-white shadow-[0_15px_60px_rgba(0,0,0,.08)] min-h-[220px] md:h-[350px]"
        }
      `}
    >
      <div className="relative z-10 max-w-xl ">
        <h3
          className="
            text-3xl
            leading-tight
            font-semibold

            md:text-[52px]
          "
        >
          {title}
        </h3>

        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            ease-out

            ${
              active
                ? "max-h-96 opacity-100 mt-4 md:mt-5"
                : "max-h-0 opacity-0 mt-0"
            }
          `}
        >
          <p
            className={`
              text-sm
              leading-7

              md:text-lg
              md:leading-8

              ${active ? "text-white/70" : "text-black"}
            `}
          >
            {description}
          </p>

          <button
            onClick={(e) => e.stopPropagation()}
            className="
      mt-8
      md:mt-10
      md:mr-auto

      flex
      h-11
      md:h-12
      w-full
      sm:w-fit

      items-center
      justify-center
      gap-2

      rounded-full
      bg-gradient-to-r
      from-primary-1
      to-primary-2

      px-6
      text-sm
      font-medium
      text-white
    "
          >
            Start Your Project
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <Image
        src={image}
        alt={title}
        width={430}
        height={430}
        className={`
          transition-all
          duration-500
          ease-out
          lg:block 
          hidden
          ${
            active
              ? `
                relative
                mx-auto
                mt-8
                w-52

                md:absolute
                md:right-8
                md:bottom-10
                md:mx-0
                md:mt-0
                md:w-[330px]
              `
              : `
                absolute
                right-4
                bottom-4

                w-36

                md:right-8
                md:top-0
                md:-translate-y-1/2
                md:bottom-auto
                md:w-[300px]
              `
          }
        `}
      />
    </div>
  );
}
