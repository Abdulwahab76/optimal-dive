import Image from "next/image";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  icon: string;
  active?: boolean;
  onClick?: () => void;
};

export default function IndustryCard({
  title,
  description,
  icon,
  active = false,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `
        group relative overflow-hidden rounded-2xl
        border p-6 text-left
        transition-all duration-300
        `,
        active
          ? "border-[#5157F7]"
          : "border-transparent hover:border-[#5157F7]"
      )}
    >
      {/* Glow */}
      <div
        className={clsx(
          `
          pointer-events-none absolute inset-0
          transition-opacity duration-300
          `,
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}
        style={{
          background: `
          radial-gradient(
            ellipse 140% 70% at 50% 0%,
            rgba(109,123,248,.35),
            rgba(81,87,247,.22),
            transparent 75%
          )
          `,
          filter: "blur(45px)",
        }}
      />

      <div className="relative z-10">
        <Image
          src={icon}
          alt={title}
          width={45}
          height={45}
          className={clsx("  mb-5", active && "blue-icon")}
        />

        <h3 className="mb-3 text-2xl font-semibold text-white">{title}</h3>

        <p className="text-base leading-7 text-white">{description}</p>
      </div>
    </button>
  );
}
