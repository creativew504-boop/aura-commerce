const ProductSkeleton = () => (
  <div className="flex flex-col rounded-2xl bg-card p-2 shadow-card">
    <div className="aspect-square w-full animate-pulse rounded-xl bg-surface" />
    <div className="flex flex-col gap-2 px-2 pb-2 pt-3">
      <div className="h-4 w-3/4 animate-pulse rounded bg-surface" />
      <div className="h-3 w-1/2 animate-pulse rounded bg-surface" />
      <div className="h-3 w-1/3 animate-pulse rounded bg-surface" />
    </div>
  </div>
);

export default ProductSkeleton;
