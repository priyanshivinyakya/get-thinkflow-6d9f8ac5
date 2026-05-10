import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

type Answers = {
  overhead: string;
  team: string;
  timeline: string;
  email: string;
};

const STEPS = [
  {
    key: "overhead" as const,
    label: "S T E P  0 1",
    question: "What is your current monthly manual overhead?",
    options: [
      { value: "<40h", label: "Under 40 hours" },
      { value: "40-150h", label: "40 – 150 hours" },
      { value: "150-500h", label: "150 – 500 hours" },
      { value: ">500h", label: "500+ hours" },
    ],
  },
  {
    key: "team" as const,
    label: "S T E P  0 2",
    question: "Which team carries most of that load?",
    options: [
      { value: "ops", label: "Operations / Logistics" },
      { value: "sales", label: "Sales / Revenue Ops" },
      { value: "support", label: "Customer Support" },
      { value: "data", label: "Data / Research" },
    ],
  },
  {
    key: "timeline" as const,
    label: "S T E P  0 3",
    question: "When are you looking to deploy?",
    options: [
      { value: "30d", label: "Within 30 days" },
      { value: "quarter", label: "This quarter" },
      { value: "exploring", label: "Exploring fit" },
    ],
  },
];

const DiscoveryForm = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Answers>({
    overhead: "",
    team: "",
    timeline: "",
    email: "",
  });

  const current = STEPS[step];
  const set = (k: keyof Answers, v: string) =>
    setAnswers((p) => ({ ...p, [k]: v }));

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  if (submitted) {
    return (
      <div className="glass-card rounded-lg p-8 text-center">
        <Check className="w-8 h-8 mx-auto mb-4 text-foreground" />
        <h3 className="font-display text-2xl font-bold mb-2">Request received.</h3>
        <p className="text-muted-foreground text-sm">
          We review every inquiry personally. Expect a reply within 48 hours.
        </p>
      </div>
    );
  }

  // Email capture step
  if (step === STEPS.length) {
    return (
      <div className="glass-card rounded-lg p-6 space-y-5">
        <div className="flex items-center gap-2 mb-2">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className="h-0.5 flex-1 rounded-full"
              style={{ backgroundColor: "hsl(195 100% 50%)" }}
            />
          ))}
        </div>
        <p className="text-minimal text-muted-foreground">F I N A L  S T E P</p>
        <h3 className="font-display text-xl md:text-2xl font-bold">
          Where should we send the audit?
        </h3>
        <input
          type="email"
          value={answers.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="you@company.com"
          className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={prev}
            className="text-xs text-muted-foreground hover:text-foreground tracking-wider flex items-center gap-1"
          >
            <ArrowLeft className="w-3 h-3" /> Back
          </button>
          <Button
            disabled={!answers.email}
            onClick={() => setSubmitted(true)}
            className="gap-2"
          >
            Request Access <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  }

  const value = answers[current.key];

  return (
    <div className="glass-card rounded-lg p-6 space-y-5">
      {/* progress */}
      <div className="flex items-center gap-2">
        {STEPS.map((_, i) => (
          <div
            key={i}
            className="h-0.5 flex-1 rounded-full overflow-hidden bg-border"
          >
            <motion.div
              className="h-full"
              style={{ backgroundColor: "hsl(195 100% 50%)" }}
              initial={{ width: "0%" }}
              animate={{ width: i <= step ? "100%" : "0%" }}
              transition={{ duration: 0.4 }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-5"
        >
          <p className="text-minimal text-muted-foreground">{current.label}</p>
          <h3 className="font-display text-xl md:text-2xl font-bold">
            {current.question}
          </h3>
          <div className="grid gap-2">
            {current.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => set(current.key, opt.value)}
                className={`text-left rounded-md p-3 text-sm transition-all duration-300 border ${
                  value === opt.value
                    ? "border-foreground bg-accent text-foreground"
                    : "border-border hover:border-muted-foreground text-muted-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between pt-2">
        <button
          onClick={prev}
          className={`text-xs text-muted-foreground hover:text-foreground tracking-wider flex items-center gap-1 ${
            step === 0 ? "invisible" : ""
          }`}
        >
          <ArrowLeft className="w-3 h-3" /> Back
        </button>
        <Button onClick={next} disabled={!value} className="gap-2">
          {step === STEPS.length - 1 ? "Continue" : "Next"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default DiscoveryForm;
