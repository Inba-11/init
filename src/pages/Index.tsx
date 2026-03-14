import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import StudentsSection from "@/components/StudentsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowWeHelpSection />
      <StudentsSection />
      <TeamSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
