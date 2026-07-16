import { Star } from "lucide-react";
export interface Testimonial {
  id: number;
  name: string;
  company?: string;
  review: string;
  rating: number;
  avatar?: string;
}
interface Props {
  item: Testimonial;
}

export function TestimonialCard({ item }: Props) {
  return (
    <div
      className="
      relative
      w-full
      max-w-3xl
      rounded-xl
      bg-gradient-to-r
      from-indigo-500
      to-indigo-400
      px-8
      py-10
      text-white
      transition-all
      duration-500
      "
    >
      <div className="absolute right-5 top-5 text-xl font-bold">G</div>

      <h3 className="text-center text-lg font-semibold">{item.name}</h3>

      <p className="mx-auto mt-5 max-w-xl text-center leading-8 text-sm md:text-base">
        {item.review}
      </p>

      <div className="mt-6 flex justify-center">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />
        ))}
      </div>

      <div
        className="
        absolute
        left-1/2
        bottom-[-10px]
        h-5
        w-5
        -translate-x-1/2
        rotate-45
        bg-indigo-500
        "
      />
    </div>
  );
}
