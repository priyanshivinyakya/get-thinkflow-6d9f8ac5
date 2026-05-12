import { motion } from "framer-motion";
import { Bot, Clock, Settings2 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI workflows",
    description: "Repetitive tasks, handled automatically.",
  },
  {
    icon: Clock,
    title: "Hours back",
    description: "Save 10–50 hours every week.",
  },
  {
    icon: Settings2,
    title: "Built for you",
    description: "Designed around how you actually work.",
  },
];

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
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl">
            Help teams unlock efficiency through autonomous, domain-specific AI.
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

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-12 tracking-wide">
            Features that turn thinking into execution
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group rounded-xl border border-border bg-background/50 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] hover:scale-[1.03]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/50 transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
                  <feature.icon className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Mission;
