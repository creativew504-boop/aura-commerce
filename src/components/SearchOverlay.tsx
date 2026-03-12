import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ open, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.length > 1
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex flex-col bg-background/95 backdrop-blur-lg"
        >
          <div className="container mx-auto max-w-2xl px-4 pt-20">
            <div className="flex items-center gap-3 border-b-2 border-foreground pb-4">
              <Search size={24} className="text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 bg-transparent text-2xl font-medium text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button onClick={onClose} className="rounded-full p-2 hover:bg-secondary">
                <X size={24} />
              </button>
            </div>

            <div className="mt-6 space-y-2">
              {results.length > 0
                ? results.slice(0, 6).map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      onClick={onClose}
                      className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-secondary"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-14 w-14 rounded-lg bg-surface object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{product.name}</p>
                        <p className="text-sm text-muted-foreground capitalize">{product.category}</p>
                      </div>
                      <span className="text-sm font-semibold tabular-nums text-foreground">
                        ${product.price}
                      </span>
                    </Link>
                  ))
                : query.length > 1 && (
                    <p className="py-8 text-center text-muted-foreground">
                      No products found for "{query}"
                    </p>
                  )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
