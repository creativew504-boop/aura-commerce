import { motion } from "framer-motion";
import { pageTransition, appEasing } from "@/lib/animations";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <motion.div {...pageTransition} className="px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Get in Touch</h1>
          <p className="mt-2 text-muted-foreground">We'd love to hear from you.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: Mail, label: "Email", value: "support@electromart.com" },
              { icon: Phone, label: "Phone", value: "+1 (800) 123-4567" },
              { icon: MapPin, label: "Address", value: "123 Tech Street, San Francisco, CA" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-2xl bg-card p-5 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 lg:col-span-3">
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                  <input required className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                  <input required type="email" className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Subject</label>
                  <input required className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-foreground" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                  <textarea required rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground" />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 flex h-12 w-full items-center justify-center rounded-full gradient-btn-brand text-sm font-medium text-accent-foreground shadow-btn transition-all hover:-translate-y-0.5 hover:shadow-btn-hover"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
