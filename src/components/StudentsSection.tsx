import { Button } from "@/components/ui/button";
import { Code2, GitBranch, Image, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const offerings = [
  { icon: Code2,     title: "Building Scalable Websites", desc: "Learn to build production-ready, scalable web applications with modern tech stacks." },
  { icon: GitBranch, title: "Projects & GitHub Help",     desc: "Guidance on real-world projects, version control, and building an impressive portfolio." },
  { icon: Image,     title: "Poster Making for College",  desc: "Professional poster and design support for college events, fests, and presentations." },
];

const StudentsSection = () => {
  const left  = useScrollReveal({ threshold: 0.2 });
  const right = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="students" className="py-16 sm:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left */}
          <div
            ref={left.ref}
            className={`lg:sticky lg:top-24 transition-all duration-700 ${
              left.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="section-label mb-5 inline-flex">For Students</span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
              Level up your <span className="text-gradient-primary">tech skills</span>
            </h2>
            <div className="w-10 h-[2px] bg-primary mb-5" />
            <p className="text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed">
              Init Services helps students build real-world skills, contribute to open source, and create standout projects for their careers.
            </p>
            <Button variant="default" className="rounded w-full sm:w-auto px-6">
              Get Started <ArrowRight size={14} />
            </Button>
          </div>

          {/* Right */}
          <div ref={right.ref} className="space-y-px bg-border">
            {offerings.map((item, i) => (
              <div
                key={item.title}
                className={`group relative bg-background p-5 hover:bg-card active:bg-card transition-all duration-250 ${
                  right.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms`, transitionDuration: "600ms" }}
              >
                <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded border border-primary/25 bg-primary/8 flex items-center justify-center group-hover:bg-primary/18 group-hover:border-primary/55 transition-all duration-250">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors duration-250">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
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
