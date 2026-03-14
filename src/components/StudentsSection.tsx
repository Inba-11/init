import { Button } from "@/components/ui/button";
import { Code2, GitBranch, Image, ArrowRight } from "lucide-react";

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
  return (
    <section id="students" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
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
          <div className="space-y-5">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:bg-accent/80 hover:backdrop-blur-lg hover:border-accent/60 hover:shadow-card-hover hover:-translate-y-2 hover:-rotate-[0.35deg] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-white/30 group-hover:shadow-[0_4px_12px_rgba(255,255,255,0.2)] transition-all duration-300">
                    <item.icon size={20} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/90 transition-colors">{item.desc}</p>
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
