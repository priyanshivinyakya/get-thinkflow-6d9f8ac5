import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content — centered single column */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wider text-foreground mb-6"
          style={{ textShadow: "0 0 60px hsl(var(--primary) / 0.25)" }}
        >
          THINKFLOW
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="font-display text-xl md:text-2xl lg:text-3xl font-medium tracking-wide text-muted-foreground mb-6"
        >
          Not Everyone Automates.
        </motion.h2>

        {/* One-line explanation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="text-foreground/80 text-base md:text-lg font-medium mb-3"
        >
          The operating system for AI-driven businesses.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-10"
        >
          Build, deploy, and scale intelligent workflows across your company — without manual work or bottlenecks.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
        >
          <Button
            size="lg"
            className="px-10 py-6 text-base font-semibold tracking-widest border border-primary/30 bg-primary/10 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Automation Access
          </Button>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default Hero;
