import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const chaotic = [
  "Inbound request",
  "Manual triage",
  "Spreadsheet update",
  "Email chain",
  "Manual QA",
  "Delayed dispatch",
];

const optimized = [
  "Inbound request",
  "Cognitive entity routes",
  "Self-correcting workflow",
  "Auto-dispatch",
];

const NodeList = ({
  items,
  tone,
}: {
  items: string[];
  tone: "chaotic" | "optimized";
}) => (
  <div className="flex flex-col gap-3">
    {items.map((label, i) => (
      <motion.div
        key={label}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
        className={`glass-card rounded-md px-4 py-3 text-sm tracking-wide ${
          tone === "chaotic"
            ? "text-muted-foreground border-border/40"
            : "text-foreground"
        }`}
        style={
          tone === "optimized"
            ? { boxShadow: "0 0 24px rgba(0,194,255,0.08)" }
            : undefined
        }
      >
        <span className="text-minimal mr-3 text-muted-foreground/60">
          0{i + 1}
        </span>
        {label}
      </motion.div>
    ))}
  </div>
);

const WorkflowComparison = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-minimal text-muted-foreground mb-4">
            B E F O R E &nbsp; / &nbsp; A F T E R
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            The Architecture Shift
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            From fragmented manual chains to a single, self-correcting system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-start max-w-5xl mx-auto">
          <div>
            <p className="text-minimal text-muted-foreground/70 mb-4">
              C H A O T I C &nbsp; W O R K F L O W
            </p>
            <NodeList items={chaotic} tone="chaotic" />
          </div>

          <div className="hidden md:flex items-center justify-center pt-24">
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
          </div>

          <div>
            <p
              className="text-minimal mb-4"
              style={{ color: "hsl(195 100% 60%)" }}
            >
              T H I N K F L O W &nbsp; O P T I M I Z E D
            </p>
            <NodeList items={optimized} tone="optimized" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowComparison;
