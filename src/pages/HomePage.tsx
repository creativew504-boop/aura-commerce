import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Headphones, RotateCcw, Star } from "lucide-react";
import { pageTransition, staggerContainer, fadeUpItem, appEasing } from "@/lib/animations";
import { products, categories, testimonials } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
  const featured = products.filter((p) => p.badge).slice(0, 4);
  const newProducts = products.slice(0, 8);

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface px-4 py-20 md:py-32">
        <div className="container mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: appEasing }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
          >
            🔥 Mega Sale — Up to 50% Off
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: appEasing }}
            className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Premium Electronics, Unbeatable Prices
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: appEasing }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Discover the latest in smartphones, laptops, audio gear, and more. Free shipping on orders over $99.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: appEasing }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/products"
              className="inline-flex h-12 items-center gap-2 rounded-full gradient-btn-brand px-8 text-sm font-medium text-accent-foreground shadow-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-btn-hover active:translate-y-0.5 active:scale-[0.98]"
            >
              Shop Now <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-8 text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
      </section>

      {/* Categories */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground">Shop by Category</h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8"
          >
            {categories.map((cat) => (
              <motion.div key={cat.slug} variants={fadeUpItem}>
                <Link
                  to={`/products?category=${cat.slug}`}
                  className="flex flex-col items-center gap-2 rounded-2xl bg-card p-4 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <span className="text-3xl">{cat.icon}</span>
                  <span className="text-xs font-medium text-foreground">{cat.name}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-surface px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Featured Products</h2>
              <p className="mt-1 text-sm text-muted-foreground">Hand-picked deals just for you</p>
            </div>
            <Link to="/products" className="text-sm font-medium text-accent hover:underline">
              View All →
            </Link>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: appEasing }}
            className="relative overflow-hidden rounded-3xl gradient-btn-brand px-8 py-16 text-center md:px-16"
          >
            <h2 className="text-3xl font-bold text-accent-foreground md:text-5xl">Cyber Monday Deals</h2>
            <p className="mt-4 text-lg text-accent-foreground/80">Save up to 60% on selected electronics. Limited time only.</p>
            <Link
              to="/products"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-card px-8 text-sm font-medium text-foreground shadow-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-btn-hover"
            >
              Shop Deals <ArrowRight size={16} />
            </Link>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-white/5" />
          </motion.div>
        </div>
      </section>

      {/* New Products */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">New Arrivals</h2>
              <p className="mt-1 text-sm text-muted-foreground">The latest products in our store</p>
            </div>
            <Link to="/products" className="text-sm font-medium text-accent hover:underline">
              View All →
            </Link>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 grid-cols-2 lg:grid-cols-4"
          >
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-surface px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-foreground">Why Shop With Us?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $99" },
              { icon: Shield, title: "Secure Payment", desc: "100% protected checkout" },
              { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
              { icon: Headphones, title: "24/7 Support", desc: "Dedicated customer help" },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3 rounded-2xl bg-card p-6 text-center shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <item.icon size={22} />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-foreground">What Our Customers Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-card p-6 shadow-card"
              >
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-foreground px-8 py-16 text-center"
          >
            <h2 className="text-2xl font-bold text-background md:text-3xl">Subscribe to Our Newsletter</h2>
            <p className="mt-3 text-background/60">Get exclusive deals, new product alerts, and more.</p>
            <div className="mx-auto mt-8 flex max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border-0 bg-background/10 px-5 py-3 text-sm text-background outline-none placeholder:text-background/40 focus:bg-background/20"
              />
              <button className="rounded-full gradient-btn-brand px-6 py-3 text-sm font-medium text-accent-foreground shadow-btn transition-all hover:-translate-y-0.5 hover:shadow-btn-hover">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
