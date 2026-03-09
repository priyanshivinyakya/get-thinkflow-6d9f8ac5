import { useRef, useEffect } from "react";

const SilkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      time += 0.003;

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      const layers = 6;

      for (let layer = 0; layer < layers; layer++) {
        const layerOffset = layer * 0.4;
        const speed = 1 + layer * 0.15;
        const amplitude = 40 + layer * 15;
        const frequency = 0.002 + layer * 0.0005;

        ctx.beginPath();

        for (let x = 0; x <= w; x += 2) {
          const y1 = Math.sin(x * frequency + time * speed + layerOffset) * amplitude;
          const y2 = Math.sin(x * frequency * 1.5 + time * speed * 0.7 + layerOffset + 2) * (amplitude * 0.6);
          const y3 = Math.cos(x * frequency * 0.8 + time * speed * 1.2 + layerOffset + 4) * (amplitude * 0.4);
          const baseY = h * (0.2 + layer * 0.12);
          const y = baseY + y1 + y2 + y3;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, h * 0.1, 0, h);
        const alpha = 0.04 + layer * 0.02;
        gradient.addColorStop(0, `rgba(180, 180, 190, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(100, 100, 110, ${alpha * 0.7})`);
        gradient.addColorStop(1, `rgba(20, 20, 25, ${alpha * 0.3})`);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Silk highlight
        ctx.beginPath();
        for (let x = 0; x <= w; x += 2) {
          const y1 = Math.sin(x * frequency + time * speed + layerOffset) * amplitude;
          const y2 = Math.sin(x * frequency * 1.5 + time * speed * 0.7 + layerOffset + 2) * (amplitude * 0.6);
          const y3 = Math.cos(x * frequency * 0.8 + time * speed * 1.2 + layerOffset + 4) * (amplitude * 0.4);
          const baseY = h * (0.2 + layer * 0.12);
          const y = baseY + y1 + y2 + y3;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        const highlightAlpha = 0.03 + layer * 0.01;
        ctx.strokeStyle = `rgba(220, 220, 230, ${highlightAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Add subtle radial glow in center
      const radialGrad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.6);
      radialGrad.addColorStop(0, "rgba(60, 60, 70, 0.15)");
      radialGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, w, h);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "#000" }}
    />
  );
};

export default SilkBackground;
