import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Minus, Plus, ShoppingCart, ArrowLeft, Check } from "lucide-react";
import { pageTransition, staggerContainer, appEasing } from "@/lib/animations";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { toast } from "sonner";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
        <Link to="/products" className="mt-4 text-sm text-accent hover:underline">← Back to Products</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <motion.div {...pageTransition} className="px-4 py-8">
      <div className="container mx-auto">
        <Link to="/products" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> Back to Products
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Images */}
          <div className="flex flex-col gap-3">
            <div className="aspect-square overflow-hidden rounded-2xl bg-surface">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`h-20 w-20 overflow-hidden rounded-xl border-2 transition-colors ${
                      selectedImage === i ? "border-foreground" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="mb-3 inline-flex w-fit rounded-full gradient-btn-brand px-3 py-1 text-xs font-semibold text-accent-foreground">
                {product.badge}
              </span>
            )}
            <h1 className="text-3xl font-bold tracking-tight text-foreground">{product.name}</h1>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-warning text-warning" : "text-border"} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground tabular-nums">
                {product.rating} ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold tabular-nums text-foreground">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg tabular-nums text-muted-foreground line-through">${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-semibold text-success">
                  Save ${product.originalPrice - product.price}
                </span>
              )}
            </div>

            <p className="mt-6 leading-relaxed text-muted-foreground">{product.description}</p>

            {/* Features */}
            <div className="mt-6 space-y-2">
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check size={14} className="text-success" /> {f}
                </div>
              ))}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-full border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-12 w-12 items-center justify-center rounded-l-full text-foreground hover:bg-secondary"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium tabular-nums text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-12 w-12 items-center justify-center rounded-r-full text-foreground hover:bg-secondary"
                >
                  <Plus size={16} />
                </button>
              </div>

              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAdd}
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full gradient-btn-brand text-sm font-medium text-accent-foreground shadow-btn transition-shadow hover:shadow-btn-hover"
              >
                <ShoppingCart size={16} /> Add to Cart
              </motion.button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              {product.inStock ? "✓ In Stock — Ships within 24 hours" : "✗ Out of Stock"}
            </p>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">Related Products</h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-4 grid-cols-2 lg:grid-cols-4"
            >
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </motion.div>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;
