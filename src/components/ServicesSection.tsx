import {
  Globe, Bot, LayoutDashboard, MessageSquare,
  Wrench, Image, Megaphone, Database,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Globe,         title: "Website + CRM Setup",          desc: "Professional websites with integrated CRM to manage leads and customers effortlessly." },
  { icon: Bot,           title: "AI Integration",               desc: "Embed AI into your workflows — chatbots, smart analytics, and intelligent automation." },
  { icon: LayoutDashboard, title: "Admin Dashboards",           desc: "Custom dashboards and internal tools to monitor, manage, and scale your operations." },
  { icon: MessageSquare, title: "WhatsApp Bots",                desc: "Automate customer communication with intelligent bots for support and sales." },
  { icon: Wrench,        title: "Business Automation",          desc: "Digitize and automate daily operations to save time, reduce costs, and boost efficiency." },
  { icon: Image,         title: "Poster & Creative Design",     desc: "Professional designs for branding, marketing campaigns, events, and social media." },
  { icon: Megaphone,     title: "Landing Pages & Lead Systems", desc: "High-converting landing pages with integrated lead capture and nurturing systems." },
  { icon: Database,      title: "Custom Internal Tools",        desc: "Purpose-built tools tailored to your team's unique workflow and operational needs." },
];

const ServicesSection = () => {
  const header = useScrollReveal({ threshold: 0.2 });
  const grid   = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div
          ref={header.ref}
          className={`max-w-2xl mb-10 sm:mb-14 transition-all duration-700 ${
            header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-label mb-4 inline-flex">Our Services</span>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-3">
            Everything your business needs<br className="hidden sm:block" /> to <span className="text-gradient-primary">go digital</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            End-to-end digital solutions for businesses ready to grow, automate, and stand out.
          </p>
        </div>

        {/* Grid */}
        <div ref={grid.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`group relative bg-background p-5 sm:p-6 hover:bg-card active:bg-card transition-all duration-300 ${
                grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 55}ms`, transitionDuration: "550ms" }}
            >
              {/* Blue accent line — top, appears on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 active:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-9 h-9 rounded border border-primary/25 bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:border-primary/50 transition-all duration-300">
                <svc.icon size={16} className="text-primary" />
              </div>

              {/* Item number */}
              <div className="text-[10px] font-mono text-muted-foreground/40 mb-2 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 className="font-heading font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors duration-250">{svc.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
