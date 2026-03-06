import { motion } from "framer-motion";

const Quote = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="w-8 h-8 border border-foreground flex items-center justify-center">
              <span className="font-display text-sm font-bold">T</span>
            </div>
            <span className="text-minimal text-foreground tracking-[0.3em]">
              THINKFLOW
            </span>
          </div>

          {/* Tagline */}
          <p className="text-minimal text-muted-foreground mb-12 tracking-[0.3em]">
            YOUR DATA ISN'T OUR BUSINESS. KEEPING IT SAFE IS.
          </p>

          {/* Main Quote - Mixed white/gray effect */}
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-12 leading-[1.2] tracking-tight">
            <span className="text-foreground">all your per</span>
            <span className="text-muted-foreground">sonal data and</span>
            {" "}
            <span className="text-foreground">tra</span>
            <span className="text-muted-foreground">n</span>
            <span className="text-foreground">sactions</span>
            {" "}
            <span className="text-muted-foreground">a</span>
            <span className="text-foreground">r</span>
            <span className="text-muted-foreground">e encrypted and</span>
            {" "}
            <span className="text-foreground">secur</span>
            <span className="text-muted-foreground">ed. there's </span>
            <span className="text-muted-foreground">no room for mistakes</span>
            {" "}
            <span className="text-foreground">beca</span>
            <span className="text-muted-foreground">u</span>
            <span className="text-foreground">se</span>
            {" "}
            <span className="text-muted-foreground">we </span>
            <span className="text-foreground">didn't leave any.</span>
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 border border-border text-minimal text-muted-foreground">
              Encrypted.
              
            </span>
            <span className="px-4 py-2 border border-border text-minimal text-muted-foreground">
              Secure.
            </span>
            <span className="px-4 py-2 border border-border text-minimal text-muted-foreground">
              Autonomous.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
