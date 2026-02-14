import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroWaves from "@/assets/hero-waves.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroWaves} 
          alt="Abstract waves" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 border border-foreground flex items-center justify-center">
              <span className="font-display text-lg font-bold">T</span>
            </div>
            <span className="text-minimal text-foreground tracking-[0.3em]">
              THINKFLOW
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wide"
        >
          THINKFLOW:
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide"
        >
          NOT EVERYONE AUTOMATES
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-minimal text-muted-foreground mb-12 tracking-[0.3em]"
        >
          THE ELITE INFRASTRUCTURE FOR AUTONOMOUS ENTERPRISE.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button 
            onClick={scrollToContact}
            className="bg-foreground text-background hover:bg-foreground/90 text-minimal tracking-[0.2em] px-10 py-6 rounded-full"
          >
            Start Your Flow
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
