import { motion } from "framer-motion";

const Mission = () => {
  const coreValues = [
    {
      number: "1",
      title: "Innovation",
      description: "Leading the frontier of Agentic AI and LLM-powered applications."
    },
    {
      number: "2",
      title: "Efficiency",
      description: "Eliminating manual friction by replacing tasks with autonomous departments."
    },
    {
      number: "3",
      title: "Integrity",
      description: "Delivering secure, self-hosted, and ethical automation solutions."
    }
  ];

  return (
    <section id="mission" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-16"
        >
          <div className="w-8 h-8 border border-foreground flex items-center justify-center">
            <span className="font-display text-sm font-bold">T</span>
          </div>
          <span className="text-minimal text-foreground tracking-[0.3em]">
            THINKFLOW
          </span>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 tracking-wide">
            MISSION
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl">
            "At ThinkFlow, we architect intelligence to streamline business processes. Our mission is to help elite enterprises unlock efficiency and growth through autonomous, domain-specific AI solutions."
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 tracking-wide">
            CORE VALUES
          </h3>
          
          <div className="space-y-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex gap-4"
              >
                <span className="text-muted-foreground">{value.number})</span>
                <div>
                  <span className="font-semibold">{value.title}:</span>
                  <span className="text-muted-foreground ml-2">"{value.description}"</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground text-sm text-center italic">
            "Founded to revolutionize operations, ThinkFlow empowers companies with secure AI technology that handles specialized industry tasks with precision"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
