import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Grid Background - subtle */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 194, 255, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 194, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Single premium touch: slow-moving gradient line */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,194,255,0.15) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 md:px-12 lg:px-16 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-0 items-center">
          {/* Left Content */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-foreground/80"
            >
              THINKFLOW
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide mt-2 text-foreground"
              style={{ textShadow: '0 0 40px rgba(0, 194, 255, 0.15)' }}
            >
              Not Everyone Automates
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground text-base md:text-lg max-w-lg mt-5"
            >
              The operating system for AI-driven businesses. Build, deploy, and scale intelligent workflows across your entire company.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base font-medium tracking-wider text-white relative overflow-hidden transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,194,255,0.9) 0%, rgba(0,150,220,0.9) 100%)',
                    boxShadow: '0 0 20px rgba(0,194,255,0.25), 0 4px 15px rgba(0,0,0,0.3)',
                  }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 35px rgba(0,194,255,0.4), 0 4px 20px rgba(0,0,0,0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0,194,255,0.25), 0 4px 15px rgba(0,0,0,0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Get Automation Access
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base font-medium text-foreground tracking-wider border-muted-foreground/30 hover:border-foreground/60 hover:bg-muted/10 transition-all duration-300"
                  onClick={() => document.getElementById('standard')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Audit Your Workflow →
                </Button>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-sm text-muted-foreground/50 tracking-wide mt-5"
            >
              Trusted by AI-first teams and modern operators.
            </motion.p>
          </div>

          {/* Right Content - simplified to 2 cards, closer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-[280px] md:w-[320px] h-[300px] md:h-[340px]">
              {/* AI Automation Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-0 left-0"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-xl border border-[rgba(0,194,255,0.15)] bg-[rgba(10,20,40,0.6)] backdrop-blur-xl p-5 w-[240px] md:w-[270px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(0,194,255,0.08)] border border-[rgba(0,194,255,0.2)] flex items-center justify-center">
                      <Brain className="w-5 h-5 text-[#00C2FF]" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">AI Automation</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-muted/20" />
                    <div className="h-2 w-3/4 rounded-full bg-muted/15" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Connector Line */}
              <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="absolute top-[100px] md:top-[110px] left-[40px] md:left-[50px] w-[200px] md:w-[220px] h-[120px] md:h-[130px]"
                viewBox="0 0 220 130"
                fill="none"
              >
                <motion.path
                  d="M0 0 L0 60 Q0 90 30 90 L220 90 L220 130"
                  stroke="rgba(0,194,255,0.2)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.9 }}
                />
              </motion.svg>

              {/* Task Completed Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-0 right-0"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="rounded-xl border border-[rgba(0,194,255,0.15)] bg-[rgba(10,20,40,0.6)] backdrop-blur-xl p-5 w-[220px] md:w-[250px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-[#00C2FF]/70" />
                    <span className="text-sm font-semibold text-foreground">Task Completed</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-muted/20" />
                    <div className="h-2 w-1/2 rounded-full bg-muted/15" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C2FF]/10 to-transparent" />
    </section>
  );
};

export default Hero;
