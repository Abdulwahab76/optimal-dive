"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export interface TocItem {
  id: string;
  title: string;
}

interface Props {
  items: TocItem[];
}

export default function BlogTopics({ items }: Props) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    items.forEach((item) => {
      const section = document.getElementById(item.id);

      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="rounded-3xl bg-[#F7F8FD] ">
      <h3 className="mb-5 text-xl font-semibold border-b p-4 px-6 border-[#D9DDFF]">
        Topics
      </h3>

      <nav>
        <ul className="space-y-2 px-3">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={clsx(
                  "block rounded-xl px-3 py-3 text-lg font-medium transition-all duration-300",
                  activeId === item.id
                    ? "bg-[#528AC81F] font-semibold text-black"
                    : "hover:bg-gray-100"
                )}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
