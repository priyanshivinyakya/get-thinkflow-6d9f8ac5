import { motion } from "framer-motion";
import { Shield, UserCheck, Wrench } from "lucide-react";

const tools = [
  "HubSpot", "Salesforce", "Slack", "Gmail",
  "Notion", "Airtable", "Zapier", "Linear",
  "Stripe", "Outlook", "Pipedrive", "Make",
];

const trust = [
  { icon: Shield, title: "Security first", detail: "SOC 2-ready providers, encrypted secrets, scoped API access." },
  { icon: UserCheck, title: "Human approval", detail: "Insert checkpoints anywhere — your team stays in control." },
  { icon: Wrench, title: "Ongoing support", detail: "Weekly improvements, monitoring, and on-call for breakages." },
];

const Integrations = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-minimal text-muted-foreground mb-4 tracking-[0.3em]">PLUGS INTO YOUR STACK</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Works with the tools you already use.
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-16">
          {tools.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-lg border border-white/10 bg-card/40 px-3 py-4 text-center"
            >
              <span className="font-display text-sm md:text-base tracking-wide text-foreground/80">{t}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trust.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-card/50 p-6"
            >
              <t.icon className="w-5 h-5 text-cyan-400 mb-3" />
              <h3 className="font-display text-lg text-foreground mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
