import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, CreditCard, Banknote } from "lucide-react";
import { pageTransition } from "@/lib/animations";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const shipping = totalPrice > 99 ? 0 : 9.99;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    toast.success("Order placed successfully!");
  };

  if (submitted) {
    return (
      <motion.div {...pageTransition} className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
          <Check size={40} className="text-success" />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-foreground">Order Confirmed!</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          Thank you for your purchase. You'll receive a confirmation email shortly.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full gradient-btn-brand px-8 text-sm font-medium text-accent-foreground shadow-btn"
        >
          Continue Shopping
        </Link>
      </motion.div>
    );
  }

  if (items.length === 0) {
    return (
      <motion.div {...pageTransition} className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <p className="text-lg text-muted-foreground">Your cart is empty.</p>
        <Link to="/products" className="mt-4 text-sm text-accent hover:underline">Browse Products</Link>
      </motion.div>
    );
  }

  return (
    <motion.div {...pageTransition} className="px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        <Link to="/cart" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> Back to Cart
        </Link>

        <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="space-y-6 lg:col-span-3">
            {/* Contact */}
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Contact Information</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                  <input required className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                  <input required type="email" className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Phone</label>
                  <input required type="tel" className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground" />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Shipping Address</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Address</label>
                  <input required className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">City</label>
                  <input required className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">ZIP Code</label>
                  <input required className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground" />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Payment Method</h2>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl border-2 p-4 text-sm font-medium transition-colors ${
                    paymentMethod === "card" ? "border-foreground text-foreground" : "border-border text-muted-foreground"
                  }`}
                >
                  <CreditCard size={18} /> Credit Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl border-2 p-4 text-sm font-medium transition-colors ${
                    paymentMethod === "cod" ? "border-foreground text-foreground" : "border-border text-muted-foreground"
                  }`}
                >
                  <Banknote size={18} /> Cash on Delivery
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl bg-card p-6 shadow-card">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Order Summary</h2>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    <img src={item.product.image} alt={item.product.name} className="h-12 w-12 rounded-lg bg-surface object-cover" />
                    <div className="flex-1 text-sm">
                      <p className="font-medium text-foreground line-clamp-1">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium tabular-nums text-foreground">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="tabular-nums">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between border-t border-border pt-2 text-base font-semibold text-foreground">
                  <span>Total</span>
                  <span className="tabular-nums">${(totalPrice + shipping).toFixed(2)}</span>
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 flex h-12 w-full items-center justify-center rounded-full gradient-btn-brand text-sm font-medium text-accent-foreground shadow-btn transition-all hover:-translate-y-0.5 hover:shadow-btn-hover"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default CheckoutPage;
