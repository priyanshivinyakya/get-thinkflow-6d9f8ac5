import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="standard" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-minimal text-muted-foreground mb-6">THE STANDARD</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            See What You Can Automate
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            We don't take clients. We select partners. Currently accepting two new firms for Q1 2026.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base font-medium border-foreground/30 hover:bg-foreground/10 text-foreground tracking-wider"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Automation Access
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
