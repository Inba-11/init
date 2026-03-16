import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How We Help", href: "#how-we-help" },
  { label: "For Students", href: "#students" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-14 px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 min-h-[44px]">
          <span className="text-[10px] font-mono font-bold text-primary tracking-widest opacity-60 mt-0.5">▶</span>
          <span className="font-heading text-base font-bold text-foreground tracking-tight">
            Init <span className="text-primary">Services</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded text-foreground border border-transparent active:border-border transition-colors duration-150"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center text-xs font-semibold uppercase tracking-widest text-muted-foreground active:text-primary py-3.5 border-b border-border/30 last:border-0 transition-colors duration-150"
              >
                <span className="text-primary/40 font-mono mr-3">—</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
