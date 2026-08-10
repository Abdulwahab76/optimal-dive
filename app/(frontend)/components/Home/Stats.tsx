// app/(frontend)/components/Home/Stats.tsx
import type { HomePage } from "@/payload-types";

const defaultStats = [
  { statValue: "500+", statLabel: "Projects Delivered" },
  { statValue: "98%", statLabel: "Client Satisfaction" },
  { statValue: "10+", statLabel: "Years Experience" },
  { statValue: "50M+", statLabel: "Revenue Generated" },
];

export default function Stats({ stats }: { stats?: HomePage["stats"] }) {
  const items = stats?.length ? stats : defaultStats;
  return (
    <div className="mt-24 grid grid-cols-2 gap-12 text-center lg:grid-cols-4">
      {items.map((item, index) => (
        <div key={item.statValue + index} className={index === 1 || index === 2 ? "lg:mt-8" : ""}>
          <h3 className="text-3xl lg:text-6xl font-bold">{item.statValue}</h3>
          <p className="mt-3 text-sm tracking-wider">{item.statLabel}</p>
        </div>
      ))}
    </div>
  );
}