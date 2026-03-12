import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pageTransition, staggerContainer } from "@/lib/animations";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const NotFoundPage = () => {
  const trending = products.slice(0, 4);

  return (
    <motion.div {...pageTransition} className="px-4 py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-8xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-xl text-muted-foreground">Page not found</p>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full gradient-btn-brand px-8 text-sm font-medium text-accent-foreground shadow-btn"
        >
          Go Home
        </Link>

        <div className="mt-20">
          <h2 className="mb-6 text-xl font-bold text-foreground">Trending Products</h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid gap-4 grid-cols-2 lg:grid-cols-4"
          >
            {trending.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
