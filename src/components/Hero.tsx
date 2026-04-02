import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User, Mail, Brain, CheckCircle } from "lucide-react";

const Hero = () => {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10"
          style={{ background: "linear-gradient(225deg, hsl(var(--primary) / 0.2) 0%, transparent 60%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-bold tracking-wide text-foreground leading-none"
              style={{ textShadow: "0 0 40px hsl(var(--primary) / 0.3)" }}
            >
              THINKFLOW
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="font-display text-xl md:text-2xl lg:text-3xl font-medium tracking-wide text-foreground/90"
            >
              Not Everyone Automates
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="text-foreground/70 text-sm md:text-base"
            >
              The operating system for AI-driven businesses.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="text-muted-foreground text-xs md:text-sm max-w-[520px]"
            >
              Build, deploy, and scale intelligent workflows across your entire company — without manual work or bottlenecks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
              className="pt-2"
            >
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base font-medium tracking-wider border border-primary/30 bg-primary/10 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Automation Access
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="px-8 py-6 text-base font-medium text-foreground tracking-wider border border-muted-foreground/30 hover:border-foreground"
                  onClick={() => document.getElementById("standard")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Audit Your Workflow →
                </Button>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="text-xs text-muted-foreground/60 tracking-wide pt-4"
            >
              Trusted by AI-first teams and modern operators.
            </motion.p>
          </div>

          {/* Right Content - AI Automation Flow Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="relative hidden lg:flex justify-center lg:justify-end"
          >
            <div className="relative w-[460px] h-[420px]">
              {/* Ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.12)_0%,transparent_70%)]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-sm" />

              {/* Lead Captured Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-0 left-0"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-xl border border-primary/25 bg-card/70 backdrop-blur-xl p-4 w-[200px] shadow-[0_0_30px_hsl(var(--primary)/0.08)]"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">Lead Captured</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-3.5 h-3.5 text-primary/70" />
                    <div className="h-2 w-20 rounded-full bg-muted/40" />
                  </div>
                  <div className="h-2 w-16 rounded-full bg-muted/30" />
                </motion.div>
              </motion.div>

              {/* Connector 1 */}
              <motion.svg
                className="absolute top-[90px] left-[160px] w-[100px] h-[80px]"
                viewBox="0 0 100 80"
                fill="none"
              >
                <motion.path
                  d="M0 0 L0 40 Q0 60 20 60 L100 60"
                  stroke="hsl(var(--primary) / 0.5)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
              </motion.svg>

              {/* AI Automation Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute top-[130px] left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 30px hsl(var(--primary) / 0.1)",
                      "0 0 50px hsl(var(--primary) / 0.2)",
                      "0 0 30px hsl(var(--primary) / 0.1)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-xl border border-primary/35 bg-card/75 backdrop-blur-xl p-6 w-[200px] text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-base font-bold text-foreground">AI Automation</span>
                </motion.div>
              </motion.div>

              {/* Connector 2 */}
              <motion.svg
                className="absolute top-[270px] right-[50px] w-[100px] h-[60px]"
                viewBox="0 0 100 60"
                fill="none"
              >
                <motion.path
                  d="M0 0 L80 0 Q100 0 100 20 L100 60"
                  stroke="hsl(var(--primary) / 0.5)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                />
              </motion.svg>

              {/* Task Completed Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-0 right-0"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="rounded-xl border border-primary/25 bg-card/70 backdrop-blur-xl p-4 w-[200px] shadow-[0_0_30px_hsl(var(--primary)/0.08)]"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-foreground">Task Completed</span>
                  </div>
                  <div className="h-2 w-24 rounded-full bg-muted/40 mb-2" />
                  <div className="h-2 w-16 rounded-full bg-muted/30" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default Hero;
