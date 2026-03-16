import { Mail, Phone, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FooterSection = () => {
  const footer = useScrollReveal({ threshold: 0.15 });

  return (
    <footer id="contact" className="bg-dark border-t border-border">
      <div
        ref={footer.ref}
        className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${
          footer.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Top grid row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border mb-px">

          {/* Brand */}
          <div className="bg-dark px-0 py-10 sm:col-span-2 md:col-span-1 md:pr-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono font-bold text-primary tracking-widest opacity-60">▶</span>
              <span className="font-heading text-base font-bold text-dark-bg-foreground">
                Init <span className="text-primary">Services</span>
              </span>
            </div>
            <p className="text-dark-bg-foreground/50 text-xs leading-relaxed max-w-xs">
              Your digital transformation partner. We help businesses and students level up with technology.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-dark py-10 md:px-8">
            <h4 className="font-mono text-[10px] font-bold text-dark-bg-foreground/40 mb-4 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-xs">
                <Phone size={12} className="text-primary flex-shrink-0" />
                <a href="tel:+919042649307" className="text-dark-bg-foreground/55 hover:text-primary active:text-primary transition-colors">+91 90426 49307</a>
                <a href="https://wa.me/919042649307" target="_blank" rel="noopener noreferrer" className="ml-0.5 text-dark-bg-foreground/35 hover:text-green-400 active:text-green-400 transition-colors" title="WhatsApp">
                  <MessageCircle size={11} />
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs">
                <Phone size={12} className="text-primary flex-shrink-0" />
                <a href="tel:+916379656457" className="text-dark-bg-foreground/55 hover:text-primary active:text-primary transition-colors">+91 63796 56457</a>
                <a href="https://wa.me/916379656457" target="_blank" rel="noopener noreferrer" className="ml-0.5 text-dark-bg-foreground/35 hover:text-green-400 active:text-green-400 transition-colors" title="WhatsApp">
                  <MessageCircle size={11} />
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs">
                <Mail size={12} className="text-primary flex-shrink-0" />
                <a href="mailto:initservices02@gmail.com" className="text-dark-bg-foreground/55 hover:text-primary active:text-primary transition-colors break-all">initservices02@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-dark py-10 md:px-8">
            <h4 className="font-mono text-[10px] font-bold text-dark-bg-foreground/40 mb-4 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              {["Services", "How We Help", "For Students", "Team"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="flex items-center gap-2 text-dark-bg-foreground/55 hover:text-primary active:text-primary text-xs transition-colors py-0.5"
                  >
                    <span className="text-primary/30 font-mono">→</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border/50">
          <p className="font-mono text-dark-bg-foreground/30 text-[10px] tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} INIT SERVICES — ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-5 text-dark-bg-foreground/30 text-[10px] font-mono tracking-wider">
            <a href="#" className="hover:text-primary active:text-primary transition-colors">PRIVACY</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-primary active:text-primary transition-colors">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
