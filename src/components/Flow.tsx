import { motion } from "framer-motion";
import { UserPlus, ListChecks, Send, CheckCircle2, ArrowDown } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Lead captured", desc: "From any form, DM or inbox." },
  { icon: ListChecks, title: "Task created", desc: "Routed to the right owner instantly." },
  { icon: Send, title: "Follow-up sent", desc: "Personalized, on time, every time." },
  { icon: CheckCircle2, title: "Client updated", desc: "Status synced across your stack." },
];

const Flow = () => {
  return (
    <section className="py-24 md:py-32 bg-card border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-minimal text-muted-foreground mb-4 tracking-[0.3em]">THE FLOW</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            One pipeline. Zero manual work.
          </h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          {steps.map((s, i) => (
            <div key={s.title} className="w-full flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="w-full max-w-md rounded-xl border border-border bg-background p-5 flex items-center gap-4 hover:border-primary/40 transition-colors"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-muted/40">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                  className="origin-top my-1"
                >
                  <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow;
