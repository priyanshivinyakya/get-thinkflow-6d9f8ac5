import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0B] pt-24 pb-24">
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Pulsing glow behind video */}
      <motion.div
        className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1200px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(closest-side, rgba(0,194,255,0.28), rgba(0,194,255,0.08) 50%, transparent 75%)',
          filter: 'blur(60px)',
        }}
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-10 flex flex-col items-center text-center">
        {/* 1. Brand fade in */}
        <motion.p
          initial={{ opacity: 0, y: 8, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-base md:text-xl uppercase text-muted-foreground/80"
        >
          ThinkFlow presents
        </motion.p>

        {/* 2. Headline slide up */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.05] whitespace-nowrap"
          style={{ textShadow: '0 0 60px rgba(255,255,255,0.1)' }}
        >
          Not everyone automates.
        </motion.h1>

        {/* 3. Subtext fade */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed"
        >
          ThinkFlow transforms manual workflows into intelligent, automated systems — so your business runs faster, smarter, and without chaos.
        </motion.p>

        {/* 4. CTA Buttons pop in */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="px-8 py-6 text-base font-medium tracking-wide bg-white text-black hover:bg-white/90 rounded-full transition-all duration-300"
            style={{ boxShadow: '0 0 25px rgba(255,255,255,0.18), 0 4px 18px rgba(0,0,0,0.4)' }}
            onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          >
            See it in action
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base font-medium tracking-wide rounded-full border-muted-foreground/30 text-foreground hover:border-foreground/60 hover:bg-white/5 transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Audit your workflow
          </Button>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="mt-5 text-xs md:text-sm text-muted-foreground/60 tracking-wide"
        >
          No code. No complexity. Just smarter workflows.
        </motion.p>

        {/* Tagline above video */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-sm md:text-base uppercase tracking-[0.25em] text-foreground/70"
        >
          Built for teams that don't scale manually
        </motion.p>

        {/* 5. Video delayed reveal with glow */}
        <motion.div
          id="demo-video"
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-8 w-full max-w-7xl group"
        >
          <motion.div
            aria-hidden
            className="absolute -inset-10 rounded-[2rem] pointer-events-none"
            style={{
              background: 'radial-gradient(closest-side, rgba(0,194,255,0.35), rgba(0,194,255,0.08) 60%, transparent 80%)',
              filter: 'blur(50px)',
            }}
            animate={{ opacity: [0.6, 0.95, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-black transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            style={{
              boxShadow: '0 40px 100px -20px rgba(0,0,0,0.8), 0 0 80px rgba(0,194,255,0.15)',
            }}
          >
            <video
              ref={videoRef}
              className="w-full h-auto block aspect-video object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/placeholder.svg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/demo.mp4" type="video/mp4" />
            </video>

            {!isPlaying && (
              <button
                onClick={handlePlay}
                aria-label="Play demo video"
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity"
              >
                <span className="w-20 h-20 rounded-full bg-white/95 text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </span>
              </button>
            )}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Hero;
