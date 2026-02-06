import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wide">
            ARE YOU READY FOR THE ASCENSION?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            "We don't take clients. We select partners. Currently accepting two new firms for Q1 2026."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
