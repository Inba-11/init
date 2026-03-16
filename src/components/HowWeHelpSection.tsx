import {
  Lightbulb, Palette, Server, CreditCard,
  Shield, Settings, Bug, TrendingUp, Heart,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { icon: Lightbulb,  label: "Plan what to build" },
  { icon: Palette,    label: "Design the experience" },
  { icon: Server,     label: "Set up hosting & domains" },
  { icon: CreditCard, label: "Integrate payments" },
  { icon: Shield,     label: "Secure your APIs" },
  { icon: Settings,   label: "Maintain & optimize" },
  { icon: Bug,        label: "Resolve production issues" },
  { icon: TrendingUp, label: "Scale with confidence" },
  { icon: Heart,      label: "Own the outcome" },
];

const HowWeHelpSection = () => {
  const header = useScrollReveal({ threshold: 0.2 });
  const grid   = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="how-we-help" className="py-16 sm:py-24 bg-dark relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-60" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={header.ref}
          className={`max-w-2xl mb-10 sm:mb-14 transition-all duration-700 ${
            header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-label mb-4 inline-flex">How We Help</span>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-dark-bg-foreground mt-4 mb-3">
            Your full-cycle <span className="text-gradient-primary">tech partner</span>
          </h2>
          <p className="text-dark-bg-foreground/55 text-sm sm:text-base leading-relaxed">
            We don't just build — we plan, execute, maintain, and take full ownership of your digital journey.
          </p>
        </div>

        <div ref={grid.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-bg-foreground/10 max-w-4xl">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`group relative flex items-center gap-4 bg-dark px-4 sm:px-5 py-4 hover:bg-dark-bg-foreground/5 active:bg-dark-bg-foreground/5 transition-all duration-250 ${
                grid.isVisible
                  ? "opacity-100 translate-x-0"
                  : i % 2 === 0 ? "opacity-0 -translate-x-5" : "opacity-0 translate-x-5"
              }`}
              style={{ transitionDelay: `${i * 55}ms`, transitionDuration: "550ms" }}
            >
              {/* Left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <div className="flex-shrink-0 w-8 h-8 rounded border border-primary/25 bg-primary/8 flex items-center justify-center group-hover:bg-primary/18 group-hover:border-primary/55 transition-all duration-250">
                <step.icon size={14} className="text-primary" />
              </div>

              <span className="text-dark-bg-foreground/75 font-medium text-sm group-hover:text-dark-bg-foreground transition-colors">{step.label}</span>

              <span className="ml-auto font-mono text-[10px] text-dark-bg-foreground/22 tabular-nums group-hover:text-primary/50 transition-colors">
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
