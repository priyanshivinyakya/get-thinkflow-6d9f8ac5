import { useEffect, useState } from "react";

/**
 * Minimalist top-bar loader. Shows on first mount, then fades out.
 * Adds a subtle "event" feel to page entry.
 */
const TopLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] overflow-hidden pointer-events-none">
      <div
        className="top-loader-bar h-full w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,194,255,0.9) 50%, rgba(255,255,255,0.6) 80%, transparent)",
          boxShadow: "0 0 12px rgba(0,194,255,0.6)",
        }}
      />
    </div>
  );
};

export default TopLoader;
