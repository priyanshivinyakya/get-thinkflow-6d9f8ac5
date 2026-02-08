import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

const AnimatedCounter = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const growthData = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 19 },
  { month: "Mar", value: 28 },
  { month: "Apr", value: 35 },
  { month: "May", value: 48 },
  { month: "Jun", value: 56 },
  { month: "Jul", value: 72 },
  { month: "Aug", value: 85 },
  { month: "Sep", value: 94 },
  { month: "Oct", value: 110 },
  { month: "Nov", value: 128 },
  { month: "Dec", value: 150 },
];

const performanceData = [
  { name: "Accuracy", value: 98, fill: "hsl(0 0% 100% / 0.9)" },
  { name: "Speed", value: 85, fill: "hsl(0 0% 100% / 0.5)" },
  { name: "Efficiency", value: 92, fill: "hsl(0 0% 100% / 0.3)" },
];

const projectsData = [
  { quarter: "Q1", delivered: 8, active: 3 },
  { quarter: "Q2", delivered: 12, active: 5 },
  { quarter: "Q3", delivered: 18, active: 7 },
  { quarter: "Q4", delivered: 24, active: 9 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border px-3 py-2 rounded-md">
        <p className="text-xs text-muted-foreground">{label}</p>
        {payload.map((entry: any, i: number) => (
          <p key={i} className="text-sm font-medium text-foreground">
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Stats = () => {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-minimal text-muted-foreground mb-4">BY THE NUMBERS</h2>
          <p className="font-display text-3xl md:text-5xl font-light tracking-wide">
            IMPACT & PERFORMANCE
          </p>
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { value: 150, suffix: "+", label: "AI Models Deployed" },
            { value: 98, suffix: "%", label: "Client Retention" },
            { value: 40, suffix: "M+", label: "Data Points Processed" },
            { value: 24, suffix: "/7", label: "Autonomous Operations" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-minimal text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="border border-border rounded-lg p-6 bg-background/50 backdrop-blur-sm"
          >
            <h3 className="text-minimal text-muted-foreground mb-1">GROWTH TRAJECTORY</h3>
            <p className="text-2xl font-display font-bold mb-6">Client Engagements</p>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(0 0% 100%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(0 0% 100%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fill: 'hsl(0 0% 60%)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'hsl(0 0% 60%)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(0 0% 100%)"
                  strokeWidth={2}
                  fill="url(#growthGradient)"
                  name="Engagements"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Projects Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-border rounded-lg p-6 bg-background/50 backdrop-blur-sm"
          >
            <h3 className="text-minimal text-muted-foreground mb-1">PROJECT DELIVERY</h3>
            <p className="text-2xl font-display font-bold mb-6">Quarterly Output</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={projectsData} barGap={4}>
                <XAxis dataKey="quarter" tick={{ fill: 'hsl(0 0% 60%)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'hsl(0 0% 60%)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="delivered" fill="hsl(0 0% 100% / 0.8)" radius={[4, 4, 0, 0]} name="Delivered" />
                <Bar dataKey="active" fill="hsl(0 0% 100% / 0.3)" radius={[4, 4, 0, 0]} name="Active" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Radial Performance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border border-border rounded-lg p-6 bg-background/50 backdrop-blur-sm"
          >
            <h3 className="text-minimal text-muted-foreground mb-1">AI PERFORMANCE</h3>
            <p className="text-2xl font-display font-bold mb-4">System Metrics</p>
            <div className="flex items-center justify-between">
              <ResponsiveContainer width="50%" height={180}>
                <RadialBarChart
                  cx="50%" cy="50%" innerRadius="30%" outerRadius="90%"
                  barSize={10} data={performanceData}
                  startAngle={90} endAngle={-270}
                >
                  <RadialBar background={{ fill: 'hsl(0 0% 15%)' }} dataKey="value" cornerRadius={5} />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="space-y-3 flex-1 pl-4">
                {performanceData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                    <span className="font-display font-bold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border border-border rounded-lg p-6 bg-background/50 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-minimal text-muted-foreground mb-1">TECHNOLOGY</h3>
              <p className="text-2xl font-display font-bold mb-6">Stack & Expertise</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["GPT-4 / Claude", "LangChain", "RAG Systems", "Vector DBs", "Fine-Tuning", "Edge AI", "MLOps", "AutoGen"].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="border border-border rounded-md px-3 py-2 text-center text-sm text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
