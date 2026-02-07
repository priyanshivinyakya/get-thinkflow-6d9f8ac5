import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-wide">
            Contact
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground">
              Looking to automate your workflows? Reach out via email, data
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:priyanshhinyakya@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>priyanshhinyakya@gmail.com</span>
              </a>
              
              <a
                href="https://linkedin.com/in/priyanshi-vinyakya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/priyanshi-vinyakya</span>
              </a>
              
              <a
                href="tel:9424579332"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>9424579332</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-6 border border-border rounded-lg bg-background/50">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  required 
                  className="bg-muted/50 border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  required 
                  className="bg-muted/50 border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="How can I help you?" 
                  rows={5}
                  required 
                  className="bg-muted/50 border-border resize-none"
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Built by footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground">
            Built by Priyanshi Vinyakya 💡
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
