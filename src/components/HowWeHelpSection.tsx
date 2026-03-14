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
  return (
    <section id="how-we-help" className="py-24 bg-dark relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">How We Help</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-bg-foreground mt-3 mb-4">
            Your full-cycle <span className="text-gradient-primary">tech partner</span>
          </h2>
          <p className="text-dark-bg-foreground/60 text-lg">
            We don't just build — we plan, execute, maintain, and take full ownership of your digital journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className="group flex items-center gap-4 bg-dark-bg-foreground/5 border border-dark-bg-foreground/10 rounded-xl px-5 py-4 hover:bg-primary/70 hover:backdrop-blur-lg hover:border-primary/40 hover:shadow-[0_12px_45px_-8px_hsl(16,90%,58%,0.4)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-primary group-hover:bg-white/30 flex items-center justify-center transition-colors duration-300" style={{ background: undefined }} >
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
