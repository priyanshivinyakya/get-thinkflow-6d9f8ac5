import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Activity, CheckCircle2, Clock, FileText, Sparkles, TrendingUp, Zap } from "lucide-react";

const useCounter = (target: number, duration = 1800) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return { ref, val };
};

const recentDocs = [
  { name: "Invoice_2891.pdf", tag: "Parsed", time: "just now" },
  { name: "Lead_form_intake.csv", tag: "Routed", time: "1m ago" },
  { name: "Contract_v3.docx", tag: "Reviewed", time: "4m ago" },
  { name: "Customer_email.eml", tag: "Replied", time: "7m ago" },
];

const flowSteps = [
  { label: "Trigger", detail: "New lead", icon: Zap },
  { label: "Enrich", detail: "AI scoring", icon: Sparkles },
  { label: "Assign", detail: "Owner picked", icon: Activity },
  { label: "Follow-up", detail: "Auto-sent", icon: CheckCircle2 },
];

const ProductPreview = () => {
  const hours = useCounter(1284);
  const tasks = useCounter(372);

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
          <p className="text-minimal text-muted-foreground mb-4 tracking-[0.3em]">THE PRODUCT</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            See it run. In real time.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm overflow-hidden"
          style={{ boxShadow: "0 40px 100px -30px rgba(0,0,0,0.8), 0 0 40px rgba(0,194,255,0.05)" }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-background/40">
            <span className="w-3 h-3 rounded-full bg-red-400/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
            <span className="w-3 h-3 rounded-full bg-green-400/60" />
            <span className="ml-4 text-xs text-muted-foreground tracking-wide">thinkflow / live</span>
            <span className="ml-auto flex items-center gap-2 text-xs text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              live
            </span>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-12 gap-px bg-white/5 p-px">
            {/* Active automation flow */}
            <div className="col-span-12 md:col-span-8 bg-card/80 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Active automation</p>
                  <h3 className="font-display text-xl mt-1">Lead → Follow-up pipeline</h3>
                </div>
                <span className="text-xs text-emerald-400 border border-emerald-400/30 rounded-full px-3 py-1">running</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {flowSteps.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    className="rounded-lg border border-white/10 bg-background/60 p-3"
                  >
                    <s.icon className="w-4 h-4 text-cyan-400 mb-2" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
                    <p className="text-sm text-foreground mt-1">{s.detail}</p>
                  </motion.div>
                ))}
              </div>

              {/* progress bar */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span>This run</span>
                  <span>76%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "76%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                  />
                </div>
              </div>
            </div>

            {/* Time saved */}
            <div className="col-span-12 md:col-span-4 bg-card/80 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <p className="text-xs uppercase tracking-[0.2em]">Time saved</p>
              </div>
              <div>
                <p className="font-display text-5xl font-bold tracking-tight">
                  <span ref={hours.ref}>{hours.val.toLocaleString()}</span>
                  <span className="text-muted-foreground text-2xl ml-1">hrs</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">+18%</span> vs last month
                </p>
              </div>
            </div>

            {/* Tasks processed */}
            <div className="col-span-6 md:col-span-4 bg-card/80 p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <Activity className="w-4 h-4" />
                <p className="text-xs uppercase tracking-[0.2em]">Tasks today</p>
              </div>
              <p className="font-display text-4xl font-bold">
                <span ref={tasks.ref}>{tasks.val}</span>
              </p>
              <div className="flex gap-1 mt-3 h-6 items-end">
                {[35, 60, 45, 80, 55, 92, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.6 }}
                    className="flex-1 bg-cyan-400/40 rounded-sm"
                  />
                ))}
              </div>
            </div>

            {/* Recent docs */}
            <div className="col-span-12 md:col-span-8 bg-card/80 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FileText className="w-4 h-4" />
                  <p className="text-xs uppercase tracking-[0.2em]">Recently processed</p>
                </div>
                <span className="text-xs text-muted-foreground">auto</span>
              </div>
              <div className="space-y-2">
                {recentDocs.map((d, i) => (
                  <motion.div
                    key={d.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center justify-between rounded-md border border-white/5 bg-background/40 px-3 py-2"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                      <p className="text-sm truncate">{d.name}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-emerald-400/30 text-emerald-400">
                        {d.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">{d.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPreview;
