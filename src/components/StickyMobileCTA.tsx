import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full rounded-full bg-white text-black py-4 text-sm font-semibold tracking-wide shadow-2xl"
            style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 25px rgba(255,255,255,0.15)" }}
          >
            Get Early Access →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
