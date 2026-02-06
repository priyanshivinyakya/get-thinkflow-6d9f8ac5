import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "COGNITIVE ENTITIES",
      description: "We build autonomous agents trained for domain-specific tasks. These systems don't just process data; they execute complex industry functions with precision and zero human oversight."
    },
    {
      title: "PRIVATE KNOWLEDGE",
      description: "Enterprise-grade RAG (Retrieval-Augmented Generation) architectures. We give your AI a perfect, secure, and real-time memory of your entire corporate knowledge base."
    },
    {
      title: "SYSTEMIC WORKFLOWS",
      description: "End-to-end integration of LLMs into your existing ecosystem. We solve multi-step operational problems by replacing manual friction with self-correcting logic."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-16"
        >
          <div className="w-8 h-8 border border-foreground flex items-center justify-center">
            <span className="font-display text-sm font-bold">T</span>
          </div>
          <span className="text-minimal text-foreground tracking-[0.3em]">
            THINKFLOW
          </span>
        </motion.div>

        {/* Services */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-border pb-12 last:border-0"
            >
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-lg max-w-3xl">
                "{service.description}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
