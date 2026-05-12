import { motion } from "framer-motion";
import { X } from "lucide-react";

const pains = [
  "Missed leads",
  "Forgotten follow-ups",
  "Scattered tasks",
  "Too many tools",
];

const Problem = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-minimal text-muted-foreground mb-4 tracking-[0.3em]"
        >
          THE PROBLEM
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl font-bold mb-12 tracking-tight"
        >
          Still managing everything manually?
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {pains.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card/50 p-5 flex flex-col items-center gap-3"
            >
              <X className="w-5 h-5 text-red-400/80" />
              <span className="text-sm md:text-base text-foreground/90">{p}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-2xl md:text-3xl font-semibold"
        >
          ThinkFlow automates the chaos.
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
