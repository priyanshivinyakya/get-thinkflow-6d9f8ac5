import { motion } from "framer-motion";
import { Quote, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const testimonials = [
  {
    quote:
      "The audit showed us we were wasting 80 hrs/month on data entry — ThinkFlow fixed that in a week.",
    name: "Anika R.",
    role: "Operations Lead",
    company: "Northwind Logistics",
  },
  {
    quote:
      "We replaced four manual handoffs with one pipeline. Leads now reach sales in minutes, not days.",
    name: "Marcus T.",
    role: "Head of Growth",
    company: "Octavia Finance",
  },
  {
    quote:
      "Felt like hiring an ops team overnight. The blueprint alone was worth the call.",
    name: "Priya S.",
    role: "Founder",
    company: "Helix Legal",
  },
];

const Results = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-24 md:pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-minimal text-muted-foreground mb-4 tracking-[0.3em]">
              EARLY OPERATOR FEEDBACK
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Results, in their words.
            </h1>
          </motion.div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-white/10 bg-card/40 p-6 flex flex-col"
              >
                <Quote className="w-5 h-5 text-cyan-400/70 mb-4" />
                <p className="text-foreground/90 leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <p className="text-minimal text-muted-foreground mb-4 tracking-[0.3em]">
              BY THE NUMBERS
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide">
              IMPACT & PERFORMANCE
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "AI Models Deployed" },
              { value: "98%", label: "Client Retention" },
              { value: "40M+", label: "Data Points Processed" },
              { value: "24/7", label: "Autonomous Operations" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-minimal text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Results;
