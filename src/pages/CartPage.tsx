import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { pageTransition, appEasing } from "@/lib/animations";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <motion.div {...pageTransition} className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <ShoppingBag size={64} className="text-muted-foreground/30" />
        <h1 className="mt-6 text-2xl font-bold text-foreground">Your cart is empty</h1>
        <p className="mt-2 text-sm text-muted-foreground">Looks like you haven't added anything yet.</p>
        <Link
          to="/products"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full gradient-btn-brand px-8 text-sm font-medium text-accent-foreground shadow-btn"
        >
          Continue Shopping <ArrowRight size={16} />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div {...pageTransition} className="px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
          Shopping Cart <span className="text-lg font-normal text-muted-foreground">({totalItems} items)</span>
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Items */}
          <div className="space-y-4 lg:col-span-2">
            {items.map((item) => (
              <motion.div
                key={item.product.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex gap-4 rounded-2xl bg-card p-4 shadow-card"
              >
                <Link to={`/products/${item.product.id}`} className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-surface">
                  <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover" />
                </Link>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link to={`/products/${item.product.id}`} className="text-sm font-medium text-foreground hover:underline">
                        {item.product.name}
                      </Link>
                      <p className="text-xs capitalize text-muted-foreground">{item.product.category}</p>
                    </div>
                    <span className="text-sm font-semibold tabular-nums text-foreground">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-border">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="flex h-8 w-8 items-center justify-center rounded-l-full hover:bg-secondary">
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-xs font-medium tabular-nums">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="flex h-8 w-8 items-center justify-center rounded-r-full hover:bg-secondary">
                        <Plus size={12} />
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground transition-colors hover:text-destructive">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="h-fit rounded-2xl bg-card p-6 shadow-card">
            <h2 className="text-lg font-semibold text-foreground">Order Summary</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="tabular-nums">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>{totalPrice > 99 ? "Free" : "$9.99"}</span>
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex justify-between font-semibold text-foreground">
                  <span>Total</span>
                  <span className="tabular-nums">${(totalPrice + (totalPrice > 99 ? 0 : 9.99)).toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Link
              to="/checkout"
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full gradient-btn-brand text-sm font-medium text-accent-foreground shadow-btn transition-all hover:-translate-y-0.5 hover:shadow-btn-hover"
            >
              Proceed to Checkout <ArrowRight size={16} />
            </Link>
            <Link to="/products" className="mt-3 block text-center text-sm text-muted-foreground hover:text-foreground">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartPage;
