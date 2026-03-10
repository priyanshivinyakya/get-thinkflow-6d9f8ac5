import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


const Services = () => {
  const services = [
    {
      id: "cognitive",
      title: "COGNITIVE ENTITIES",
      tagline: "Autonomous Intelligence",
      description: "We build autonomous agents trained for domain-specific tasks. These systems don't just process data; they execute complex industry functions with precision and zero human oversight.",
      features: ["Domain-Specific Training", "Zero Human Oversight", "Real-Time Decision Making"],
    },
    {
      id: "knowledge",
      title: "PRIVATE KNOWLEDGE",
      tagline: "Enterprise Memory",
      description: "Enterprise-grade RAG (Retrieval-Augmented Generation) architectures. We give your AI a perfect, secure, and real-time memory of your entire corporate knowledge base.",
      features: ["Secure Data Retrieval", "Real-Time Indexing", "Corporate Knowledge Graphs"],
    },
    {
      id: "workflows",
      title: "SYSTEMIC WORKFLOWS",
      tagline: "Operational Logic",
      description: "End-to-end integration of LLMs into your existing ecosystem. We solve multi-step operational problems by replacing manual friction with self-correcting logic.",
      features: ["Multi-Step Automation", "Self-Correcting Logic", "Seamless Integration"],
    },
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
          <img src={thinkflowLogo} alt="ThinkFlow" className="h-10 w-auto" />
        </motion.div>

        {/* Tabbed Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Tabs defaultValue="cognitive" className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none h-auto p-0 gap-0">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none bg-transparent text-muted-foreground data-[state=active]:text-foreground px-6 py-4 text-xs tracking-[0.2em] font-medium transition-all duration-300"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="py-12 md:py-16"
                >
                  <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                      <span className="text-minimal text-muted-foreground tracking-[0.3em] mb-4 block">
                        {service.tagline.toUpperCase()}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        "{service.description}"
                      </p>
                    </div>
                    <div className="space-y-4 md:pt-10">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="flex items-center gap-4 border border-border p-4 group hover:border-foreground transition-colors duration-300"
                        >
                          <span className="text-minimal text-muted-foreground group-hover:text-foreground transition-colors">
                            0{i + 1}
                          </span>
                          <span className="text-sm tracking-[0.15em] text-muted-foreground group-hover:text-foreground transition-colors">
                            {feature.toUpperCase()}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
