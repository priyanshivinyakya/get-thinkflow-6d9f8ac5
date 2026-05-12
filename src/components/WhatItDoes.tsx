import { motion } from "framer-motion";

const WhatItDoes = () => {
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
          WHAT IT IS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6"
        >
          What ThinkFlow actually does.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          One pipeline that turns leads into action — without the manual work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-wrap justify-center gap-3 text-xs md:text-sm"
        >
          {["Built for creators", "Built for startups", "Built for operators", "Built in public"].map((t) => (
            <span key={t} className="px-4 py-2 rounded-full border border-border bg-card/50 text-muted-foreground tracking-wide">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatItDoes;
