import { Button } from "@/components/ui/button";
import { Code2, GitBranch, Image, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const offerings = [
  {
    icon: Code2,
    title: "Building Scalable Websites",
    desc: "Learn to build production-ready, scalable web applications with modern tech stacks.",
  },
  {
    icon: GitBranch,
    title: "Projects & GitHub Help",
    desc: "Guidance on real-world projects, version control, and building an impressive portfolio.",
  },
  {
    icon: Image,
    title: "Poster Making for College",
    desc: "Professional poster and design support for college events, fests, and presentations.",
  },
];

const StudentsSection = () => {
  const left = useScrollReveal({ threshold: 0.2 });
  const right = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="students" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div
            ref={left.ref}
            className={`transition-all duration-700 ${
              left.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">For Students</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Level up your <span className="text-gradient-primary">tech skills</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Init Services helps students build real-world skills, contribute to open source, and create standout projects for their careers.
            </p>
            <Button variant="default" className="rounded-full px-6">
              Get Started <ArrowRight size={16} />
            </Button>
          </div>

          {/* Right */}
          <div ref={right.ref} className="space-y-4">
            {offerings.map((item, i) => (
              <div
                key={item.title}
                className={`group relative bg-card border border-border border-l-2 border-l-transparent rounded-xl p-5 shadow-card hover:border-l-primary hover:-translate-y-1 hover:shadow-[0_10px_28px_-8px_hsl(219_61%_43%_/_0.2)] transition-all duration-300 ${
                  right.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${i * 120}ms`, transitionDuration: "650ms" }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-primary/25 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
