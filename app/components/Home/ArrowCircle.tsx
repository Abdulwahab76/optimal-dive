import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ArrowCircle() {
  return (
    <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28 md:h-32 md:w-32">
      {/* Background Image */}
      <Image
        src="/images/button-bg.png" // your gradient circle image
        alt="Arrow Background"
        fill
        priority
        className="object-contain"
      />

      {/* Arrow */}
      <ArrowUpRight
        className="relative z-10 text-white"
        size={30}
        strokeWidth={2}
      />
    </div>
  );
}
