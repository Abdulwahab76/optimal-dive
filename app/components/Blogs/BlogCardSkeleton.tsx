// components/blog/BlogCardSkeleton.tsx
export default function BlogCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="h-52 animate-pulse bg-gray-200" />
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
        </div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-5 w-2/3 animate-pulse rounded bg-gray-200" />
        <div className="flex justify-end pt-5">
          <div className="h-8 w-24 animate-pulse rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
