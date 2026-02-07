import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Founder = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            While our 2026 partner slots are currently open, our architectures are built on the same frameworks that have reduced operational overhead by up to 70% in industrial benchmarks. We don't just build tools; we implement proven, high-performance cognitive structures designed for scale.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-foreground text-background hover:bg-foreground/90 text-minimal tracking-[0.2em] px-8 py-6"
          >
            REQUEST ACCESS
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
