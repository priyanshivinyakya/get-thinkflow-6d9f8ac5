import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Truck, Landmark, Scale, ArrowRight } from "lucide-react";

const industries = [
  {
    id: "logistics",
    label: "Logistics",
    icon: Truck,
    pain: "Customs paperwork, dispatch updates, and proof-of-delivery chasing.",
    before: "Hours per shipment spent re-keying invoices, chasing drivers, and emailing customs forms.",
    after: "AI parses bills of lading, syncs ETAs, and files customs paperwork automatically.",
    features: ["Customs document parsing", "Dispatch + ETA sync", "POD collection on autopilot"],
  },
  {
    id: "finance",
    label: "Finance",
    icon: Landmark,
    pain: "Manual reconciliation, KYC review, and quarter-end reporting.",
    before: "Analysts copy data between bank feeds, ERPs, and spreadsheets every week.",
    after: "AI reconciles transactions, flags anomalies, and drafts the report — you approve.",
    features: ["Auto reconciliation", "KYC + AML pre-review", "Report drafts in one click"],
  },
  {
    id: "legal",
    label: "Legal",
    icon: Scale,
    pain: "Contract review, intake triage, and clause comparison across templates.",
    before: "Associates spend nights redlining and copying clauses between matters.",
    after: "AI redlines drafts, surfaces risky clauses, and routes intake to the right partner.",
    features: ["Contract redline + summary", "Clause risk detection", "Smart intake routing"],
  },
];

const IndustryTabs = () => {
  const [active, setActive] = useState(industries[0].id);
  const current = industries.find((i) => i.id === active)!;

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-minimal text-muted-foreground mb-4 tracking-[0.3em]">TAILORED FOR YOUR INDUSTRY</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Built for the work you actually do.
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isActive = ind.id === active;
            return (
              <button
                key={ind.id}
                onClick={() => setActive(ind.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border text-sm tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-muted-foreground border-white/15 hover:border-white/40 hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {ind.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Before */}
            <div className="rounded-xl border border-white/10 bg-card/40 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-red-400/80 mb-3">Before</p>
              <p className="text-foreground/90 leading-relaxed">{current.before}</p>
            </div>
            {/* After */}
            <div className="rounded-xl border border-emerald-400/20 bg-card/60 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 mb-3">After ThinkFlow</p>
              <p className="text-foreground/90 leading-relaxed">{current.after}</p>
            </div>

            {/* Features */}
            <div className="md:col-span-2 grid sm:grid-cols-3 gap-3">
              {current.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-background/40 px-4 py-3"
                >
                  <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>

            <p className="md:col-span-2 text-xs text-muted-foreground text-center mt-2">
              Pain we hear from {current.label.toLowerCase()} teams: {current.pain}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustryTabs;
