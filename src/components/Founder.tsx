import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import priyanshiPhoto from "@/assets/priyanshi-jain.png";

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
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="w-8 h-8 border border-foreground flex items-center justify-center">
            <span className="font-display text-sm font-bold">T</span>
          </div>
          <span className="text-minimal text-foreground tracking-[0.3em]">
            THINKFLOW
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-right mb-8"
        >
          <span className="text-minimal text-muted-foreground tracking-[0.3em]">
            FOUNDER
          </span>
        </motion.div>

        {/* The Architect Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            THE ARCHITECT
          </h2>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md mx-auto mb-16"
        >
          <div className="relative p-6 border border-border bg-background/50">
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              "I founded ThinkFlow to bridge the gap between human intuition and autonomous execution. We don't just build tools; we architect the intelligence that defines the next era of enterprise."
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-muted overflow-hidden">
                <img 
                  src={priyanshiPhoto} 
                  alt="Priyanshi Jain" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">PRIYANSHI</p>
                <p className="text-muted-foreground text-sm">JAIN</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ThinkFlow Standard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
