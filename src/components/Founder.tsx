import { motion } from "framer-motion";

const Founder = () => {
  return (
    <section id="founder" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* ThinkFlow Standard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 tracking-wide">
            THE THINKFLOW STANDARD
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            While our 2026 partner slots are currently open, our architectures are built on the same frameworks that have reduced operational overhead by up to 70% in industrial benchmarks. We don't just build tools; we implement proven, high-performance cognitive structures designed for scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
