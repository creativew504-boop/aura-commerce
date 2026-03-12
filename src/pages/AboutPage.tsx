import { motion } from "framer-motion";
import { pageTransition, appEasing } from "@/lib/animations";
import { Users, Award, Globe, Zap } from "lucide-react";

const AboutPage = () => (
  <motion.div {...pageTransition}>
    {/* Hero */}
    <section className="bg-surface px-4 py-20 text-center">
      <div className="container mx-auto max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: appEasing }}
          className="text-4xl font-bold tracking-tight text-foreground md:text-5xl"
        >
          About ElectroMart
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: appEasing }}
          className="mt-4 text-lg text-muted-foreground"
        >
          We're on a mission to make premium electronics accessible to everyone. Since 2020, we've served over 500,000 happy customers worldwide.
        </motion.p>
      </div>
    </section>

    {/* Stats */}
    <section className="px-4 py-16">
      <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Users, value: "500K+", label: "Happy Customers" },
          { icon: Award, value: "50+", label: "Brand Partners" },
          { icon: Globe, value: "120+", label: "Countries Served" },
          { icon: Zap, value: "99.9%", label: "Uptime" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 rounded-2xl bg-card p-8 text-center shadow-card"
          >
            <stat.icon size={24} className="text-accent" />
            <span className="text-3xl font-bold tabular-nums text-foreground">{stat.value}</span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Story */}
    <section className="bg-surface px-4 py-16">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          ElectroMart was founded with a simple vision: bring the world's best electronics to your doorstep at fair prices. We partner directly with top brands to eliminate middlemen and pass the savings on to you. Every product in our catalog is carefully curated, tested, and backed by our satisfaction guarantee.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          From smartphones and laptops to gaming consoles and smart home devices, we've built a collection that caters to every tech need. Our dedicated support team is available 24/7 to ensure your shopping experience is seamless.
        </p>
      </div>
    </section>
  </motion.div>
);

export default AboutPage;
