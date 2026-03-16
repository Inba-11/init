import {
  Lightbulb,
  Palette,
  Server,
  CreditCard,
  Shield,
  Settings,
  Bug,
  TrendingUp,
  Heart,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { icon: Lightbulb, label: "Plan what to build" },
  { icon: Palette, label: "Design the experience" },
  { icon: Server, label: "Set up hosting & domains" },
  { icon: CreditCard, label: "Integrate payments" },
  { icon: Shield, label: "Secure your APIs" },
  { icon: Settings, label: "Maintain & optimize" },
  { icon: Bug, label: "Resolve production issues" },
  { icon: TrendingUp, label: "Scale with confidence" },
  { icon: Heart, label: "Own the outcome" },
];

const HowWeHelpSection = () => {
  const header = useScrollReveal({ threshold: 0.2 });
  const grid = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="how-we-help" className="py-24 bg-dark relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={header.ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">How We Help</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-bg-foreground mt-3 mb-4">
            Your full-cycle <span className="text-gradient-primary">tech partner</span>
          </h2>
          <p className="text-dark-bg-foreground/60 text-lg">
            We don't just build — we plan, execute, maintain, and take full ownership of your digital journey.
          </p>
        </div>

        <div ref={grid.ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`group flex items-center gap-4 bg-dark-bg-foreground/5 border border-dark-bg-foreground/10 rounded-xl px-5 py-4 hover:bg-primary/70 hover:backdrop-blur-lg hover:border-primary/40 hover:shadow-[0_12px_45px_-8px_hsl(219,61%,43%,0.4)] hover:-translate-y-1.5 transition-all duration-300 ${
                grid.isVisible
                  ? i % 2 === 0
                    ? "opacity-100 translate-x-0"
                    : "opacity-100 translate-x-0"
                  : i % 2 === 0
                  ? "opacity-0 -translate-x-6"
                  : "opacity-0 translate-x-6"
              }`}
              style={{ transitionDelay: `${i * 70}ms`, transitionDuration: "600ms" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-primary group-hover:bg-white/30 flex items-center justify-center transition-colors duration-300">
                <step.icon size={18} className="text-primary-foreground group-hover:text-white" />
              </div>
              <span className="text-dark-bg-foreground font-medium text-sm group-hover:text-white transition-colors">{step.label}</span>
              <span className="ml-auto text-xs text-dark-bg-foreground/30 font-heading font-bold group-hover:text-white/60 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
