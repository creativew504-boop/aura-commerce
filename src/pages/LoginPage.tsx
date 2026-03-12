import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { pageTransition } from "@/lib/animations";
import { toast } from "sonner";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(isSignup ? "Account created!" : "Logged in successfully!");
  };

  return (
    <motion.div {...pageTransition} className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-card p-8 shadow-card">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-foreground">{isSignup ? "Create Account" : "Welcome Back"}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {isSignup ? "Sign up to start shopping" : "Log in to your account"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                <input required className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground" />
              </div>
            )}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <input required type="email" className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 pr-10 text-sm outline-none focus:border-foreground"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center rounded-full gradient-btn-brand text-sm font-medium text-accent-foreground shadow-btn transition-all hover:-translate-y-0.5 hover:shadow-btn-hover"
            >
              {isSignup ? "Sign Up" : "Log In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={() => setIsSignup(!isSignup)} className="font-medium text-accent hover:underline">
              {isSignup ? "Log In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
