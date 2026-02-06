import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-wide">
            Get in Touch
          </h2>
          <p className="text-minimal text-muted-foreground tracking-[0.2em] mb-12">
            LOOKING TO AUTOMATE YOUR WORKFLOWS? LET'S TALK.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <motion.a
              href="mailto:priyanshhinyakya@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>priyanshhinyakya@gmail.com</span>
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/priyanshi-vinyakya"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>linkedin.com/in/priyanshi-vinyakya</span>
            </motion.a>
            
            <motion.a
              href="tel:9424579332"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>9424579332</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
