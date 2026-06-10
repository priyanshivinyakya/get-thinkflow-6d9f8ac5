import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Map your workflow", detail: "We audit handoffs, tools, and bottlenecks across sales and ops." },
  { n: "02", title: "Build the automation layer", detail: "Custom agents wired into your CRM, inbox, Slack, and internal tools." },
  { n: "03", title: "Deploy & monitor", detail: "Human approval steps where it matters. Full logs, zero black box." },
  { n: "04", title: "Improve weekly", detail: "We refine prompts, routes, and triggers as your business evolves." },
];

const Process = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-minimal text-muted-foreground mb-4 tracking-[0.3em]">HOW WE WORK</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            A clear, four-step process.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/50 p-8"
            >
              <p className="font-display text-3xl text-muted-foreground/40 mb-3">{s.n}</p>
              <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
