import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  image: string;
  dark?: boolean;
}

export default function ServiceCard({
  title,
  description,
  image,
  dark,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-[26px] px-12 py-10
      ${
        dark
          ? "bg-[#1F1F1F] text-white h-[350px] pt-17"
          : "bg-white shadow-[0_15px_60px_rgba(0,0,0,.08)] h-[420px] pt-17"
      }`}
    >
      <div className="relative z-10  max-w-xl">
        <h3 className="text-[52px] font-semibold leading-tight lg:text-nowrap  ">
          {title}
        </h3>

        <p
          className={`mt-5 text-[16px] leading-8 ${
            dark ? "text-white/70" : "text-[#666]"
          }`}
        >
          {description}
        </p>

        {!dark && (
          <button className="mt-20   flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-primary-1 to-primary-2 px-6 text-sm font-medium text-white">
            Start Your Project
            <ArrowRight size={15} />
          </button>
        )}
      </div>

      <Image
        src={image}
        alt={title}
        width={430}
        height={430}
        className={`absolute right-8 object-contain
    ${
      dark
        ? "-bottom-10 w-[300px] lg:w-[320px]"
        : "top-1/2 -translate-y-1/2 w-[360px] lg:w-[390px]"
    }`}
      />
    </div>
  );
}
