// components/blog/CategoryFilter.tsx
import { categories } from "@/app/lib/categories";
import { CategorySlug } from "@/types/blog";
 

interface CategoryFilterProps {
  activeCategory: CategorySlug;
  onChange: (category: CategorySlug) => void;
}

export default function CategoryFilter({
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter blogs by category"
      className="flex flex-wrap items-center justify-center gap-3"
    >
      {categories.map((category) => {
        const isActive = category.slug === activeCategory;
        return (
          <button
            key={category.slug}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category.slug)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
              isActive
                ? "border-transparent bg-linear-to-b from-primary-1 to-primary-2 text-white shadow-sm"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-900"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
