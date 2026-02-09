import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const pageLinks = [
  { label: "SERVICES", path: "/services" },
  { label: "WORK", path: "/work" },
  { label: "ABOUT", path: "/about" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT", path: "/contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToStandard = () => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("founder")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById("founder")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 border border-foreground flex items-center justify-center">
            <span className="font-display text-sm font-bold">T</span>
          </div>
          <span className="text-minimal text-foreground tracking-[0.3em]">
            THINKFLOW
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {pageLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-minimal tracking-[0.15em] transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={scrollToStandard}
            className="text-minimal tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            STANDARD
          </button>
        </div>

        <div className="hidden md:block">
          <Button
            variant="outline"
            size="sm"
            className="text-minimal border-foreground hover:bg-foreground hover:text-background"
            asChild
          >
            <Link to="/contact">REQUEST ACCESS</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
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
              {pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-minimal tracking-[0.15em] transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={scrollToStandard}
                className="block text-minimal tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                STANDARD
              </button>

              <div className="pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-minimal border-foreground w-full"
                  asChild
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    REQUEST ACCESS
                  </Link>
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
