import WhatsAppButton from "@/components/ui/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import CakesPageContent from "@/components/CakesPageContent";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <CakesPageContent />
        <AboutSection />
        <CTASection />
      </main>
      <WhatsAppButton />
    </div>
  ); 
}
