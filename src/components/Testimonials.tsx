import { motion } from "framer-motion";
import { Quote } from "lucide-react";

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

const Testimonials = () => {
  return (
    <section className="py-24 md:py-28 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-minimal text-muted-foreground mb-4 tracking-[0.3em]">
            EARLY OPERATOR FEEDBACK
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Results, in their words.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-card/40 p-6 flex flex-col"
            >
              <Quote className="w-5 h-5 text-cyan-400/70 mb-4" />
              <p className="text-foreground/90 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role} · {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
