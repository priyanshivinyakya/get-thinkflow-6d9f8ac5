import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import thinkflowLogo from "@/assets/thinkflow-logo.png";
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
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.08)_0%,transparent_70%)]" />
        {/* Corner accent lines */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10"
          style={{
            background: 'linear-gradient(225deg, rgba(0,194,255,0.2) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={thinkflowLogo} alt="ThinkFlow" className="h-12 md:h-14 w-auto mb-4" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wide text-foreground"
              style={{ textShadow: '0 0 40px rgba(0, 194, 255, 0.3)' }}
            >
              THINK
              <br />
              FLOW
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed"
            >
              ThinkFlow is an advanced AI-powered automation platform engineered for precision, adaptability, and seamless integration into daily life and industrial workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4"
            >
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-medium border-foreground/30 hover:bg-foreground/10 text-foreground tracking-wider"
              >
                Request Access
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Robot Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={heroRobot}
                alt="AI Robot"
                className="w-[350px] md:w-[450px] lg:w-[500px] xl:w-[550px] h-auto drop-shadow-[0_0_40px_rgba(0,194,255,0.15)]"
              />
              {/* Floating info card */}
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

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C2FF]/20 to-transparent" />
    </section>
  );
};

export default Hero;
