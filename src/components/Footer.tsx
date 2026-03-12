import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg gradient-btn-brand text-xs font-bold text-accent-foreground">E</span>
            ElectroMart
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Your one-stop destination for premium electronics. Quality products, unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/products", label: "All Products" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
              { to: "/cart", label: "Cart" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">Categories</h4>
          <div className="flex flex-col gap-2">
            {["Smartphones", "Laptops", "Audio", "Gaming"].map((cat) => (
              <Link key={cat} to={`/products?category=${cat.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">Stay Updated</h4>
          <p className="mb-3 text-sm text-muted-foreground">Get the latest deals and product updates.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-foreground"
            />
            <button className="flex h-10 w-10 items-center justify-center rounded-full gradient-btn shadow-btn">
              <Mail size={16} className="text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ElectroMart. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
