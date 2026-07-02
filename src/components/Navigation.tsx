import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import thinkflowLogo from "@/assets/thinkflow-logo.png";

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
        <div className="flex items-center gap-3">
          <img src={thinkflowLogo} alt="ThinkFlow" className="h-12 md:h-14 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          <button 
            onClick={() => scrollToSection("mission")}
            className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            RESULTS
          </button>
          <button 
            onClick={() => scrollToSection("standard")}
            className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            STANDARD
          </button>
          <button 
            onClick={() => scrollToSection("book-demo")}
            className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            CONTACT
          </button>
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
                onClick={() => scrollToSection("standard")}
                className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                STANDARD
              </button>
              <button 
                onClick={() => scrollToSection("book-demo")}
                className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                CONTACT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
