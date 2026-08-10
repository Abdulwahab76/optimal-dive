import { Testimonial } from "./TestimonialCard";

interface Props {
  active: number;
  items: Testimonial[];
  setActive: (index: number) => void;
}

export function AvatarNavigation({ active, items, setActive }: Props) {
  return (
    <div className="flex justify-center gap-4">
      {items.map((item, index) => (
        <button
          key={item.id}
          onClick={() => setActive(index)}
          className={`
            transition-all duration-300
            rounded-full
            ${
              active === index
                ? "scale-125 ring-4 ring-indigo-400"
                : "opacity-70 hover:opacity-100"
            }
          `}
        >
          {item.avatar ? (
            <img
              src={item.avatar}
              alt={item.name}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div
              className="
              h-12
              w-12
              rounded-full
              border-2
              border-dashed
              border-white
              bg-gray-200
              "
            />
          )}
        </button>
      ))}
    </div>
  );
}
