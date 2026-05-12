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

          {/* Main Quote */}
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed">
            "Scale isn't measured by headcount. It's measured by the flow of your intelligence."
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
