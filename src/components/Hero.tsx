import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import thinkflowLogo from "@/assets/thinkflow-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Wave Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
        >
          <defs>
            <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(270, 60%, 30%)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(200, 60%, 30%)" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(200, 60%, 25%)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="hsl(160, 50%, 25%)" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="wave-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(220, 50%, 20%)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(280, 40%, 20%)" stopOpacity="0.03" />
            </linearGradient>
          </defs>

          {/* Wave 1 - slowest, back */}
          <path fill="url(#wave-grad-1)">
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="
                M0,600 C180,500 360,700 540,600 C720,500 900,700 1080,600 C1260,500 1440,650 1440,650 L1440,900 L0,900 Z;
                M0,650 C180,550 360,750 540,650 C720,550 900,650 1080,550 C1260,650 1440,600 1440,600 L1440,900 L0,900 Z;
                M0,600 C180,700 360,550 540,650 C720,750 900,600 1080,650 C1260,550 1440,700 1440,700 L1440,900 L0,900 Z;
                M0,600 C180,500 360,700 540,600 C720,500 900,700 1080,600 C1260,500 1440,650 1440,650 L1440,900 L0,900 Z
              "
            />
          </path>

          {/* Wave 2 - mid */}
          <path fill="url(#wave-grad-2)">
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,700 C180,650 360,750 540,700 C720,650 900,750 1080,700 C1260,650 1440,700 1440,700 L1440,900 L0,900 Z;
                M0,720 C180,680 360,760 540,720 C720,680 900,720 1080,680 C1260,720 1440,680 1440,680 L1440,900 L0,900 Z;
                M0,690 C180,730 360,680 540,710 C720,750 900,690 1080,720 C1260,680 1440,730 1440,730 L1440,900 L0,900 Z;
                M0,700 C180,650 360,750 540,700 C720,650 900,750 1080,700 C1260,650 1440,700 1440,700 L1440,900 L0,900 Z
              "
            />
          </path>

          {/* Wave 3 - front, fastest */}
          <path fill="url(#wave-grad-3)">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,780 C180,750 360,800 540,770 C720,740 900,790 1080,760 C1260,730 1440,770 1440,770 L1440,900 L0,900 Z;
                M0,760 C180,790 360,750 540,780 C720,810 900,760 1080,790 C1260,760 1440,780 1440,780 L1440,900 L0,900 Z;
                M0,790 C180,760 360,790 540,760 C720,730 900,780 1080,750 C1260,790 1440,760 1440,760 L1440,900 L0,900 Z;
                M0,780 C180,750 360,800 540,770 C720,740 900,790 1080,760 C1260,730 1440,770 1440,770 L1440,900 L0,900 Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="flex items-center justify-center mb-8">
            <img src={thinkflowLogo} alt="ThinkFlow" className="h-16 md:h-20 w-auto" />
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
