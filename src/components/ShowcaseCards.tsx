import { motion } from "framer-motion";
import { Bot, Brain, Workflow, Zap } from "lucide-react";
import { ArrowRight } from "lucide-react";

const ShowcaseCards = () => {
  const cards = [
    {
      icon: Bot,
      label: "AI AGENTS",
      headline: "autonomous agents.\nzero oversight.",
      description: "Deploy intelligent AI agents that handle tasks, make decisions, and execute workflows automatically. Our agents operate 24/7, reducing manual effort while increasing speed, accuracy, and productivity.",
      gradient: "from-purple-600/40 via-pink-500/20 to-transparent",
    },
    {
      icon: Brain,
      label: "RAG SYSTEMS",
      headline: "enterprise memory.\non demand.",
      description: "Build Retrieval-Augmented Generation systems that connect AI with your company data. Instantly search documents, knowledge bases, and databases to deliver accurate, context-aware answers in real time.",
      gradient: "from-cyan-500/40 via-blue-500/20 to-transparent",
    },
    {
      icon: Workflow,
      label: "WORKFLOWS",
      headline: "automate processes.\nscale infinitely.",
      description: "Design automated workflows that eliminate repetitive work and connect business operations. From lead handling to internal processes, our systems streamline tasks and scale as your business grows.",
      gradient: "from-green-500/40 via-emerald-500/20 to-transparent",
    },
    {
      icon: Zap,
      label: "INTEGRATIONS",
      headline: "connect everything.\nseamlessly.",
      description: "Integrate AI with your existing tools, APIs, and platforms. We connect CRMs, databases, SaaS apps, and internal systems to create a unified, intelligent infrastructure.",
      gradient: "from-amber-500/40 via-orange-500/20 to-transparent",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-minimal text-muted-foreground tracking-[0.3em] block mb-4">
            WHAT WE BUILD
          </span>
          <h3 className="font-display text-3xl md:text-5xl font-bold tracking-wide">
            Our Capabilities
          </h3>
        </motion.div>
      </div>

      <div className="flex gap-6 px-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="min-w-[320px] md:min-w-[380px] snap-start flex-shrink-0 group"
          >
            <div className="relative border border-border rounded-lg p-8 h-[480px] flex flex-col justify-between overflow-hidden bg-card hover:border-muted-foreground/30 transition-colors duration-500">
              {/* Gradient glow at bottom */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <card.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-minimal text-muted-foreground">
                    {card.label}
                  </span>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold leading-tight whitespace-pre-line text-foreground mb-4">
                  {card.headline}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="relative z-10">
                <button className="inline-flex items-center gap-3 border border-border px-5 py-2.5 text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300 group/btn">
                  KNOW MORE
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseCards;
