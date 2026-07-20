// components/blog/Pagination.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

// Builds a compressed page list like: 1 2 3 4 5 ... 10
function getPageList(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set<number>([
    1,
    2,
    total - 1,
    total,
    current - 1,
    current,
    current + 1,
  ]);
  const sorted = [...pages]
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  const result: (number | "ellipsis")[] = [];
  let prev = 0;
  for (const page of sorted) {
    if (prev && page - prev > 1) result.push("ellipsis");
    result.push(page);
    prev = page;
  }
  return result;
}

export default function Pagination({
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageList = getPageList(currentPage, totalPages);

  const pillBase =
    "flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-medium transition";

  return (
    <nav
      aria-label="Blog pagination"
      className="flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={`${pillBase} border border-gray-200 bg-white text-gray-500 disabled:cursor-not-allowed disabled:opacity-40 hover:enabled:border-gray-300`}
      >
        <ChevronLeft size={14} />
      </button>

      {pageList.map((item, idx) =>
        item === "ellipsis" ? (
          <span
            key={`ellipsis-${idx}`}
            className="flex h-9 min-w-9 items-center justify-center text-sm text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            aria-current={item === currentPage ? "page" : undefined}
            className={`${pillBase} ${
              item === currentPage
                ? "bg-linear-to-b from-primary-1 to-primary-2 text-white shadow-sm"
                : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-900"
            }`}
          >
            {item}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-9 items-center gap-1 rounded-full border border-gray-200 bg-white px-4 text-sm font-medium text-gray-600 disabled:cursor-not-allowed disabled:opacity-40 hover:enabled:border-gray-300"
      >
        Next
        <ChevronRight size={14} />
      </button>
    </nav>
  );
}
