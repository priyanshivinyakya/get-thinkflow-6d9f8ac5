import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroRobot from "@/assets/hero-robot.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 194, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 194, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10"
          style={{ background: 'linear-gradient(225deg, rgba(0,194,255,0.2) 0%, transparent 60%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wide text-foreground"
              style={{ textShadow: '0 0 40px rgba(0, 194, 255, 0.3)' }}
            >
              THINKFLOW
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground tracking-wide"
            >
              Not Everyone Automates
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-foreground text-base md:text-lg max-w-lg"
            >
              The operating system for AI-driven businesses.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground text-sm md:text-base max-w-lg"
            >
              Build, deploy, and scale intelligent workflows across your entire company.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2"
            >
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-medium border-foreground/30 hover:bg-foreground/10 text-foreground tracking-wider"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Automation Access
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-muted-foreground/60 tracking-wide pt-4"
            >
              Trusted by AI-first teams and modern operators.
            </motion.p>
          </div>

          {/* Right Content - Robot Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.img
                src={heroRobot}
                alt="AI Robot"
                className="w-[350px] md:w-[450px] lg:w-[500px] xl:w-[550px] h-auto drop-shadow-[0_0_40px_rgba(0,194,255,0.15)]"
                animate={{
                  y: [0, -12, 0],
                  filter: [
                    'drop-shadow(0 0 40px rgba(0,194,255,0.15))',
                    'drop-shadow(0 0 60px rgba(0,194,255,0.3))',
                    'drop-shadow(0 0 40px rgba(0,194,255,0.15))',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-8 -right-4 md:right-0 bg-card/80 backdrop-blur-md border border-border/50 rounded-lg p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">AI-CORE</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Next-gen automation engine powering intelligent workflows across your business.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C2FF]/20 to-transparent" />
    </section>
  );
};

export default Hero;
