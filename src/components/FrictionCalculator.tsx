import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, ArrowLeft, Zap, Clock, Brain, Download } from "lucide-react";

type Answers = {
  companySize: string;
  frictionPoint: string;
  hoursWasted: number;
  existingAI: string;
  goal: string;
};

const STEPS = [
  {
    key: "companySize" as const,
    label: "COMPANY SIZE",
    question: "How many team members currently handle operations?",
    type: "buttons" as const,
    options: [
      { value: "sme", label: "SME", desc: "1–50 members" },
      { value: "mid", label: "Mid-Market", desc: "51–500 members" },
      { value: "enterprise", label: "Enterprise", desc: "500+ members" },
    ],
  },
  {
    key: "frictionPoint" as const,
    label: "THE FRICTION POINT",
    question: "Which department feels the most manual?",
    type: "buttons" as const,
    options: [
      { value: "sales", label: "Sales / Ops", desc: "Pipeline & revenue ops" },
      { value: "data", label: "Data Entry", desc: "Manual input & syncing" },
      { value: "support", label: "Customer Support", desc: "Tickets & responses" },
      { value: "research", label: "Research", desc: "Analysis & reporting" },
    ],
  },
  {
    key: "hoursWasted" as const,
    label: "TIME LEAK",
    question: "How many hours per week does a team member spend on repetitive tasks?",
    type: "slider" as const,
  },
  {
    key: "existingAI" as const,
    label: "EXISTING TECH",
    question: "Are you currently using any AI tools at an organizational level?",
    type: "buttons" as const,
    options: [
      { value: "none", label: "No AI Tools", desc: "Starting fresh" },
      { value: "basic", label: "Basic Usage", desc: "ChatGPT, Claude, etc." },
      { value: "integrated", label: "Fully Integrated", desc: "Org-wide AI stack" },
    ],
  },
  {
    key: "goal" as const,
    label: "THE GOAL",
    question: "What is your primary objective for Q2 2026?",
    type: "buttons" as const,
    options: [
      { value: "cost", label: "Reduce Costs", desc: "Lower headcount spend" },
      { value: "responsive", label: "24/7 Response", desc: "Always-on operations" },
      { value: "speed", label: "Faster Delivery", desc: "Accelerate projects" },
    ],
  },
];

function computeResults(answers: Answers) {
  let score = 50;
  let hoursBase = answers.hoursWasted * 4; // monthly

  // Company size multiplier
  if (answers.companySize === "mid") { score += 12; hoursBase *= 3; }
  else if (answers.companySize === "enterprise") { score += 20; hoursBase *= 8; }
  else { hoursBase *= 1.5; }

  // Friction point
  if (answers.frictionPoint === "data") score += 15;
  else if (answers.frictionPoint === "support") score += 12;
  else if (answers.frictionPoint === "sales") score += 10;
  else score += 8;

  // Hours wasted — more hours = more opportunity
  if (answers.hoursWasted >= 15) score += 10;
  else if (answers.hoursWasted >= 8) score += 5;

  // Existing AI — less AI = more room
  if (answers.existingAI === "none") score += 10;
  else if (answers.existingAI === "basic") score += 5;

  score = Math.min(98, Math.max(40, score));
  const hoursRecovered = Math.round(hoursBase * (score / 100) * 0.7);

  const entityMap: Record<string, string> = {
    sales: "Sales Ops",
    data: "Data Pipeline",
    support: "Customer Success",
    research: "Intelligence & Analytics",
  };

  return {
    score,
    hoursRecovered,
    entity: entityMap[answers.frictionPoint] || "Operations",
    readiness: score >= 80 ? "Highly Ready for Autonomous Workflows" : score >= 60 ? "Strong Candidate for AI Automation" : "Emerging Automation Opportunity",
  };
}

interface FrictionCalculatorProps {
  embedded?: boolean;
}

const FrictionCalculator = ({ embedded = false }: FrictionCalculatorProps) => {
  const [step, setStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Answers>({
    companySize: "",
    frictionPoint: "",
    hoursWasted: 10,
    existingAI: "",
    goal: "",
  });
  const [emailInput, setEmailInput] = useState("");

  const currentStep = STEPS[step];

  const setAnswer = useCallback((key: string, value: string | number) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  }, []);

  const canProceed = () => {
    const key = currentStep.key;
    if (key === "hoursWasted") return true;
    return answers[key] !== "";
  };

  const next = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else setShowResults(true);
  };

  const prev = () => {
    if (showResults) setShowResults(false);
    else if (step > 0) setStep(s => s - 1);
  };

  const results = computeResults(answers);

  const slideVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  if (showResults) {
    return (
      <div className={embedded ? "" : "max-w-2xl mx-auto"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Score */}
          <div className="text-center space-y-3">
            <p className="text-minimal text-muted-foreground">YOUR AUTOMATION POTENTIAL</p>
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-36 h-36" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="hsl(var(--border))" strokeWidth="6" />
                <motion.circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke="hsl(195 100% 50%)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${results.score * 3.27} 327`}
                  transform="rotate(-90 60 60)"
                  initial={{ strokeDasharray: "0 327" }}
                  animate={{ strokeDasharray: `${results.score * 3.27} 327` }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                />
              </svg>
              <motion.span
                className="absolute font-display text-4xl font-bold text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {results.score}%
              </motion.span>
            </div>
            <p className="text-muted-foreground text-sm">{results.readiness}</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="border border-border rounded-lg p-4 text-center space-y-2"
            >
              <Clock className="w-5 h-5 mx-auto text-muted-foreground" />
              <p className="font-display text-2xl font-bold text-foreground">~{results.hoursRecovered}</p>
              <p className="text-xs text-muted-foreground">Hours Recovered / Month</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="border border-border rounded-lg p-4 text-center space-y-2"
            >
              <Zap className="w-5 h-5 mx-auto text-muted-foreground" />
              <p className="font-display text-2xl font-bold text-foreground">{results.score}%</p>
              <p className="text-xs text-muted-foreground">Efficiency Gain</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="border border-border rounded-lg p-4 text-center space-y-2"
            >
              <Brain className="w-5 h-5 mx-auto text-muted-foreground" />
              <p className="font-display text-lg font-bold text-foreground">{results.entity}</p>
              <p className="text-xs text-muted-foreground">Recommended Entity</p>
            </motion.div>
          </div>

          {/* Suggestion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="border border-border rounded-lg p-5 space-y-2"
          >
            <p className="text-minimal text-muted-foreground">SUGGESTED AGENTIC STRUCTURE</p>
            <p className="text-foreground text-sm leading-relaxed">
              Based on your inputs, we recommend a <span className="font-semibold">Cognitive Entity</span> for your{" "}
              <span className="font-semibold">{results.entity}</span> department. This could reclaim{" "}
              <span className="font-semibold">~{results.hoursRecovered} hours/month</span> of manual work.
            </p>
          </motion.div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="border border-border rounded-lg p-5 space-y-4"
          >
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-muted-foreground" />
              <p className="text-sm font-medium text-foreground">Download your custom 3-page Blueprint</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <Button
                size="default"
                className="shrink-0"
                onClick={() => {
                  if (emailInput) {
                    // Could integrate with backend later
                    alert("Blueprint request sent! We'll be in touch.");
                  }
                }}
              >
                Get Blueprint
              </Button>
            </div>
          </motion.div>

          {/* Back */}
          <button
            onClick={prev}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider"
          >
            ← Retake Audit
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={embedded ? "" : "max-w-2xl mx-auto"}>
      {/* Progress */}
      <div className="flex items-center gap-3 mb-8">
        {STEPS.map((_, i) => (
          <div key={i} className="flex-1 h-0.5 rounded-full overflow-hidden bg-border">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: "hsl(195 100% 50%)" }}
              initial={{ width: "0%" }}
              animate={{ width: i <= step ? "100%" : "0%" }}
              transition={{ duration: 0.4 }}
            />
          </div>
        ))}
        <span className="text-xs text-muted-foreground shrink-0">
          {step + 1}/{STEPS.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-minimal text-muted-foreground mb-3">{currentStep.label}</p>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-8">
            {currentStep.question}
          </h3>

          {currentStep.type === "buttons" && currentStep.options && (
            <div className="grid gap-3">
              {currentStep.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setAnswer(currentStep.key, opt.value)}
                  className={`text-left border rounded-lg p-4 transition-all duration-300 group ${
                    answers[currentStep.key] === opt.value
                      ? "border-foreground bg-accent"
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <span className="text-sm font-medium text-foreground block">{opt.label}</span>
                  <span className="text-xs text-muted-foreground">{opt.desc}</span>
                </button>
              ))}
            </div>
          )}

          {currentStep.type === "slider" && (
            <div className="space-y-6">
              <div className="text-center">
                <span className="font-display text-5xl font-bold text-foreground">
                  {answers.hoursWasted}
                </span>
                <span className="text-muted-foreground text-lg ml-2">hrs / week</span>
              </div>
              <Slider
                value={[answers.hoursWasted]}
                onValueChange={([v]) => setAnswer("hoursWasted", v)}
                min={1}
                max={40}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 hr</span>
                <span>40 hrs</span>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10">
        <button
          onClick={prev}
          className={`text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider flex items-center gap-1 ${
            step === 0 ? "invisible" : ""
          }`}
        >
          <ArrowLeft className="w-3 h-3" /> Back
        </button>
        <Button
          onClick={next}
          disabled={!canProceed()}
          className="gap-2"
        >
          {step === STEPS.length - 1 ? "See My Score" : "Next"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default FrictionCalculator;
