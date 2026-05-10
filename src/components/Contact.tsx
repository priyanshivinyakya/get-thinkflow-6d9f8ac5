import { motion } from "framer-motion";
import DiscoveryForm from "./DiscoveryForm";

const Contact = () => {

  return (
    <section id="contact" className="py-24 md:py-32 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full mb-4">
            Get in touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-wide mb-3">
            Contact
          </h2>
          <p className="text-xs text-muted-foreground tracking-wide">
            LOOKING TO AUTOMATE YOUR WORKFLOWS? LET'S TALK.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-minimal text-primary tracking-[0.2em] mb-2">EMAIL</h3>
              <a
                href="mailto:priyanshivinyakya@gmail.com"
                className="text-xl hover:text-muted-foreground transition-colors block"
              >
                priyanshivinyakya@gmail.com
              </a>
            </div>
            
            <div>
              <h3 className="text-minimal text-primary tracking-[0.2em] mb-2">LINKEDIN</h3>
              <a
                href="https://linkedin.com/in/priyanshivinyakya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-muted-foreground transition-colors"
              >
                linkedin.com/in/priyanshivinyakya
              </a>
            </div>
            
            <div>
              <h3 className="text-minimal text-primary tracking-[0.2em] mb-2">PHONE</h3>
              <a
                href="tel:+919424579332"
                className="text-xl hover:text-muted-foreground transition-colors"
              >
                +91 94245 79332
              </a>
            </div>
          </motion.div>

          {/* Multi-step Discovery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <DiscoveryForm />
          </motion.div>
        </div>

        {/* Built by footer */}
      </div>
    </section>
  );
};

export default Contact;
