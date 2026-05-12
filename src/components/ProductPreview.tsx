import { motion } from "framer-motion";
import { Circle, CheckCircle2, Clock, Mail, Phone, Sparkles } from "lucide-react";

const columns = [
  {
    title: "Leads",
    accent: "text-cyan-400",
    items: [
      { name: "Acme Inc.", meta: "Website form · 2m ago", icon: Mail },
      { name: "Lina Park", meta: "Referral · 14m ago", icon: Phone },
      { name: "Stripe Co.", meta: "LinkedIn · 1h ago", icon: Mail },
    ],
  },
  {
    title: "Tasks",
    accent: "text-amber-400",
    items: [
      { name: "Send proposal", meta: "Owner · Sam", icon: Clock },
      { name: "Schedule demo", meta: "Owner · Mia", icon: Clock },
      { name: "Qualify lead", meta: "Owner · AI", icon: Sparkles },
    ],
  },
  {
    title: "Follow-ups",
    accent: "text-emerald-400",
    items: [
      { name: "Day 2 check-in", meta: "Auto · scheduled", icon: CheckCircle2 },
      { name: "Quote reminder", meta: "Auto · sent", icon: CheckCircle2 },
      { name: "Onboarding kit", meta: "Auto · queued", icon: Circle },
    ],
  },
];

const ProductPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-minimal text-muted-foreground mb-4 tracking-[0.3em]">THE PRODUCT</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            One pipeline. Zero manual work.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden shadow-2xl"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/40">
            <span className="w-3 h-3 rounded-full bg-red-400/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
            <span className="w-3 h-3 rounded-full bg-green-400/60" />
            <span className="ml-4 text-xs text-muted-foreground tracking-wide">thinkflow / pipeline</span>
          </div>

          {/* Kanban */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60">
            {columns.map((col) => (
              <div key={col.title} className="bg-card/80 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-sm font-semibold tracking-wide ${col.accent}`}>{col.title}</h3>
                  <span className="text-xs text-muted-foreground">{col.items.length}</span>
                </div>
                <div className="space-y-3">
                  {col.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-lg border border-border/60 bg-background/60 p-3 flex items-start gap-3"
                    >
                      <item.icon className="w-4 h-4 mt-0.5 text-muted-foreground" />
                      <div className="min-w-0">
                        <p className="text-sm text-foreground truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{item.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPreview;
