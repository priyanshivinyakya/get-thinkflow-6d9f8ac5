import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { useState } from "react";

const AIBotButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-primary/30 shadow-lg shadow-primary/20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-primary/40"
      aria-label="AI Assistant"
    >
      <motion.div
        animate={{ 
          boxShadow: isHovered 
            ? "0 0 20px hsl(var(--primary) / 0.4)" 
            : "0 0 10px hsl(var(--primary) / 0.2)" 
        }}
        className="w-full h-full rounded-full flex items-center justify-center"
      >
        <Bot className="w-6 h-6 text-primary" />
      </motion.div>
      
      {/* Pulse ring animation */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full border border-primary/40"
      />
    </motion.button>
  );
};

export default AIBotButton;
