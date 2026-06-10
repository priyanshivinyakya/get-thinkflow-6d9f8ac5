import { motion } from "framer-motion";
import { Inbox, Sparkles, Database, MessageSquare, Send, BarChart3 } from "lucide-react";

const steps = [
  { icon: Inbox, label: "Lead arrives", detail: "Form / inbox / ad" },
  { icon: Sparkles, label: "AI qualifies", detail: "Scores & enriches" },
  { icon: Database, label: "CRM updated", detail: "HubSpot · Salesforce" },
  { icon: MessageSquare, label: "Slack notified", detail: "Owner pinged" },
  { icon: Send, label: "Follow-up sent", detail: "Personalized email" },
  { icon: BarChart3, label: "Dashboard updated", detail: "Manager visibility" },
];

const WorkflowDemo = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-minimal text-muted-foreground mb-4 tracking-[0.3em]">ONE REAL WORKFLOW</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            From inbox to outcome — no human in the loop.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A single inbound lead, fully handled across your stack in under 60 seconds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative rounded-xl border border-white/10 bg-card/50 p-5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Step {i + 1}
                </span>
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
              </div>
              <s.icon className="w-5 h-5 text-cyan-400 mb-3" />
              <p className="font-display text-base text-foreground">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-muted-foreground tracking-wide"
        >
          <span>⌁ Cut manual handoffs by <span className="text-emerald-400 font-semibold">60–80%</span></span>
          <span>⌁ Response time <span className="text-emerald-400 font-semibold">&lt; 60s</span></span>
          <span>⌁ Zero CRM data entry</span>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowDemo;
