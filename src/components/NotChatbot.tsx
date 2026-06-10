import { motion } from "framer-motion";

const rows = [
  { a: "Answers questions", b: "Executes workflows end-to-end" },
  { a: "Lives in a chat window", b: "Lives inside your stack" },
  { a: "Needs a human to act", b: "Acts, then reports back" },
  { a: "One-off conversations", b: "Persistent, monitored systems" },
];

const NotChatbot = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-minimal text-muted-foreground mb-4 tracking-[0.3em]">THE DIFFERENCE</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Chatbots answer.<br />
            <span className="text-cyan-400">ThinkFlow executes.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          <div className="bg-card/40 p-5 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Chatbot</p>
          </div>
          <div className="bg-card/60 p-5 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">ThinkFlow</p>
          </div>
          {rows.flatMap((r, i) => [
            <div key={`a-${i}`} className="bg-card/30 p-5 text-muted-foreground text-sm md:text-base">
              {r.a}
            </div>,
            <div key={`b-${i}`} className="bg-card/60 p-5 text-foreground text-sm md:text-base">
              {r.b}
            </div>,
          ])}
        </div>
      </div>
    </section>
  );
};

export default NotChatbot;
