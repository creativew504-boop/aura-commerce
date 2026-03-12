import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { fadeUpItem } from "@/lib/animations";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <motion.div variants={fadeUpItem} whileHover="hover" whileTap={{ scale: 0.98 }} className="group">
      <Link to={`/products/${product.id}`} className="flex flex-col rounded-2xl bg-card p-2 shadow-card transition-shadow duration-300 ease-app hover:shadow-card-hover">
        {/* Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-surface">
          <motion.img
            variants={{ hover: { scale: 1.05 } }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />

          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full gradient-btn-brand px-3 py-1 text-xs font-semibold text-accent-foreground">
              {product.badge}
            </span>
          )}

          {/* Quick Add */}
          <motion.button
            variants={{ hover: { opacity: 1, y: 0 } }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={handleAddToCart}
            className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-card/90 px-4 py-2.5 text-sm font-medium text-foreground shadow-btn backdrop-blur-sm transition-colors hover:bg-card"
          >
            <ShoppingCart size={14} />
            Quick Add
          </motion.button>
        </div>

        {/* Info */}
        <div className="flex flex-col px-2 pb-2 pt-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-medium leading-tight text-foreground line-clamp-2">
              {product.name}
            </h3>
            <div className="flex flex-col items-end">
              <span className="text-sm font-semibold tabular-nums text-foreground">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs tabular-nums text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
          <p className="mt-1 text-xs capitalize text-muted-foreground">{product.category}</p>
          <div className="mt-2 flex items-center gap-1">
            <Star size={12} className="fill-warning text-warning" />
            <span className="text-xs tabular-nums text-muted-foreground">
              {product.rating} ({product.reviews.toLocaleString()})
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
