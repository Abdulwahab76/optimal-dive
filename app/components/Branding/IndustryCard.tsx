import Image from "next/image";

type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function IndustryCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-transparent
        p-6 transition-all duration-300
        hover:border-[#5157F7]
      "
    >
      {/* Top → Center Glow */}
      <div
        className="
    pointer-events-none
    absolute inset-0
    opacity-0 transition-opacity duration-300
    group-hover:opacity-100
  "
        style={{
          background: `
      radial-gradient(
        ellipse 140% 70% at 50% 0%,
        rgba(109,123,248,.35) 0%,
        rgba(81,87,247,.22) 35%,
        rgba(81,87,247,.10) 55%,
        transparent 75%
      )
    `,
          filter: "blur(45px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-5 text-white">
          <Image src={Icon} alt="icon" width={45} height={45} />
        </div>

        <h3 className="mb-3 text-2xl font-semibold text-white">{title}</h3>

        <p className="text-base leading-7 text-white">{description}</p>
      </div>
    </div>
  );
}
