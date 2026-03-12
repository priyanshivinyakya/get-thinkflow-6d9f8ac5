import { motion } from "framer-motion";
import FrictionCalculator from "./FrictionCalculator";

const CTA = () => {
  return (
    <section id="standard" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-minimal text-muted-foreground mb-6">THE STANDARD</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            See What You Can Automate
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Take our 30-second diagnostic to get your personalized Automation Score and projected Efficiency Gain.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <FrictionCalculator />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
