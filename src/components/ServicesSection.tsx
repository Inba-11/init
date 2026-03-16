import {
  Globe,
  Bot,
  LayoutDashboard,
  MessageSquare,
  Wrench,
  Image,
  Megaphone,
  Database,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Website + CRM Setup",
    desc: "Professional websites with integrated CRM to manage leads and customers effortlessly.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    desc: "Embed AI into your workflows — chatbots, smart analytics, and intelligent automation.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    desc: "Custom dashboards and internal tools to monitor, manage, and scale your operations.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Bots",
    desc: "Automate customer communication with intelligent bots for support and sales.",
  },
  {
    icon: Wrench,
    title: "Business Automation",
    desc: "Digitize and automate daily operations to save time, reduce costs, and boost efficiency.",
  },
  {
    icon: Image,
    title: "Poster & Creative Design",
    desc: "Professional designs for branding, marketing campaigns, events, and social media.",
  },
  {
    icon: Megaphone,
    title: "Landing Pages & Lead Systems",
    desc: "High-converting landing pages with integrated lead capture and nurturing systems.",
  },
  {
    icon: Database,
    title: "Custom Internal Tools",
    desc: "Purpose-built tools tailored to your team's unique workflow and operational needs.",
  },
];

const ServicesSection = () => {
  const header = useScrollReveal({ threshold: 0.2 });
  const grid = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div
          ref={header.ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Everything your business needs to <span className="text-gradient-primary">go digital</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end digital solutions for businesses ready to grow, automate, and stand out.
          </p>
        </div>

        {/* Grid */}
        <div ref={grid.ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`group bg-card border border-border rounded-xl p-6 shadow-card hover:bg-primary/75 hover:backdrop-blur-lg hover:border-primary/50 hover:shadow-card-hover hover:-translate-y-2 hover:-rotate-[0.35deg] transition-all duration-300 ${
                grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 75}ms`, transitionDuration: "600ms" }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-white/30 group-hover:shadow-[0_4px_12px_rgba(255,255,255,0.2)] transition-all duration-300">
                <svc.icon size={22} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2 group-hover:text-white transition-colors">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/90 transition-colors">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
