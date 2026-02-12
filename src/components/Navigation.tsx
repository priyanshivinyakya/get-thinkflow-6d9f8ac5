import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import thinkflowLogo from "@/assets/thinkflow-logo-cutout.png";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={thinkflowLogo} alt="ThinkFlow" className="h-8 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          <button 
            onClick={() => scrollToSection("mission")}
            className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            MISSION
          </button>
          <button 
            onClick={() => scrollToSection("services")}
            className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            SERVICES
          </button>
          <button 
            onClick={() => scrollToSection("standard")}
            className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            STANDARD
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            CONTACT
          </button>
        </div>

        <div className="hidden md:block">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-minimal border-foreground hover:bg-foreground hover:text-background"
            onClick={() => scrollToSection("contact")}
          >
            REQUEST ACCESS
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection("mission")}
                className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                MISSION
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                SERVICES
              </button>
              <button 
                onClick={() => scrollToSection("standard")}
                className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                STANDARD
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                CONTACT
              </button>
              
              <div className="pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-minimal border-foreground w-full"
                  onClick={() => scrollToSection("contact")}
                >
                  REQUEST ACCESS
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
