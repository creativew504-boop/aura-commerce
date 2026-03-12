import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { pageTransition, staggerContainer } from "@/lib/animations";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const setCategory = (cat: string) => {
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  const filtered = useMemo(() => {
    let result = [...products];
    if (categoryParam) result = result.filter((p) => p.category === categoryParam);
    if (search) result = result.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
    }
    return result;
  }, [categoryParam, search, sortBy]);

  return (
    <motion.div {...pageTransition} className="px-4 py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {categoryParam ? categories.find((c) => c.slug === categoryParam)?.name || "Products" : "All Products"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{filtered.length} products</p>
        </div>

        {/* Filters Bar */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="h-10 w-full rounded-full border border-border bg-card px-4 text-sm outline-none focus:border-foreground sm:w-64"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-10 rounded-full border border-border bg-card px-4 text-sm outline-none focus:border-foreground"
          >
            <option value="default">Sort By</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex h-10 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
        </div>

        {/* Category Chips */}
        <div className={`mb-8 flex-wrap gap-2 ${showFilters ? "flex" : "hidden md:flex"}`}>
          <button
            onClick={() => setCategory("")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              !categoryParam ? "gradient-btn-brand text-accent-foreground shadow-btn" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setCategory(cat.slug)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                categoryParam === cat.slug
                  ? "gradient-btn-brand text-accent-foreground shadow-btn"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <span>{cat.icon}</span> {cat.name}
            </button>
          ))}
          {categoryParam && (
            <button
              onClick={() => setCategory("")}
              className="flex items-center gap-1 rounded-full border border-border bg-card px-3 py-2 text-xs text-muted-foreground hover:text-foreground"
            >
              Clear <X size={12} />
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid gap-4 grid-cols-2 lg:grid-cols-4"
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-xl font-medium text-foreground">No products found</p>
            <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductsPage;
