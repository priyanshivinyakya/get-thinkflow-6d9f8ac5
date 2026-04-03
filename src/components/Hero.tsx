import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User, Mail, Brain, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Grid Background - reduced opacity */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 194, 255, 0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 194, 255, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.06)_0%,transparent_65%)]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.06]"
          style={{ background: 'linear-gradient(225deg, rgba(0,194,255,0.15) 0%, transparent 60%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left Content - LEFT aligned */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide text-foreground"
              style={{ textShadow: '0 0 30px rgba(0, 194, 255, 0.2)' }}
            >
              THINKFLOW
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-xl md:text-2xl lg:text-3xl font-medium tracking-wide mt-2"
              style={{ color: '#E5E7EB' }}
            >
              Not Everyone Automates
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-foreground text-base md:text-lg max-w-lg mt-4"
            >
              The operating system for AI-driven businesses.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground text-sm md:text-base max-w-[600px] mt-3"
            >
              Build, deploy, and scale intelligent workflows across your entire company.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base font-medium tracking-wider text-white relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,194,255,0.9) 0%, rgba(0,150,220,0.9) 100%)',
                    boxShadow: '0 0 20px rgba(0,194,255,0.3), 0 4px 15px rgba(0,0,0,0.3)',
                  }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(0,194,255,0.5), 0 4px 20px rgba(0,0,0,0.4)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0,194,255,0.3), 0 4px 15px rgba(0,0,0,0.3)';
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
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-muted-foreground/60 tracking-wide mt-4"
            >
              Trusted by AI-first teams and modern operators.
            </motion.p>
          </div>

          {/* Right Content - moved closer, reduced glow, slower animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-center"
          >
            <div className="relative w-[320px] md:w-[380px] lg:w-[420px] h-[340px] md:h-[400px]">
              {/* Ambient glow - reduced */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.07)_0%,transparent_70%)]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,194,255,0.25)] to-transparent blur-sm" />

              {/* Lead Captured Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-0 left-0 md:left-2"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-xl border border-[rgba(0,194,255,0.2)] bg-[rgba(10,20,40,0.65)] backdrop-blur-xl p-4 w-[170px] md:w-[190px] shadow-[0_0_20px_rgba(0,194,255,0.05)]"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[rgba(0,194,255,0.12)] flex items-center justify-center">
                      <User className="w-4 h-4 text-[#00C2FF]" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">Lead Captured</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-3.5 h-3.5 text-[#00C2FF]/60" />
                    <div className="h-2 w-20 rounded-full bg-muted/30" />
                  </div>
                  <div className="h-2 w-16 rounded-full bg-muted/20" />
                </motion.div>
              </motion.div>

              {/* Connector Line 1 */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="absolute top-[85px] left-[130px] md:left-[150px] w-[80px] md:w-[90px] h-[80px]"
                viewBox="0 0 100 80"
                fill="none"
              >
                <motion.path
                  d="M0 0 L0 40 Q0 60 20 60 L100 60"
                  stroke="rgba(0,194,255,0.35)"
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </motion.svg>

              {/* AI Automation Card - Center */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-[115px] md:top-[125px] left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(0,194,255,0.06)",
                      "0 0 35px rgba(0,194,255,0.12)",
                      "0 0 20px rgba(0,194,255,0.06)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-xl border border-[rgba(0,194,255,0.3)] bg-[rgba(10,20,40,0.7)] backdrop-blur-xl p-6 w-[170px] md:w-[190px] text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[rgba(0,194,255,0.08)] border border-[rgba(0,194,255,0.25)] flex items-center justify-center">
                    <Brain className="w-6 h-6 text-[#00C2FF]" />
                  </div>
                  <span className="text-base font-bold text-foreground">AI Automation</span>
                </motion.div>
              </motion.div>

              {/* Connector Line 2 */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.2 }}
                className="absolute top-[240px] md:top-[260px] right-[55px] md:right-[50px] w-[70px] md:w-[90px] h-[55px]"
                viewBox="0 0 100 60"
                fill="none"
              >
                <motion.path
                  d="M0 0 L80 0 Q100 0 100 20 L100 60"
                  stroke="rgba(0,194,255,0.35)"
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
              </motion.svg>

              {/* Task Completed Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-0 right-0 md:right-2"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="rounded-xl border border-[rgba(0,194,255,0.2)] bg-[rgba(10,20,40,0.65)] backdrop-blur-xl p-4 w-[170px] md:w-[190px] shadow-[0_0_20px_rgba(0,194,255,0.05)]"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <CheckCircle className="w-5 h-5 text-[#00C2FF]" />
                    <span className="text-sm font-semibold text-foreground">Task Completed</span>
                  </div>
                  <div className="h-2 w-24 rounded-full bg-muted/30 mb-2" />
                  <div className="h-2 w-16 rounded-full bg-muted/20" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C2FF]/15 to-transparent" />
    </section>
  );
};

export default Hero;
