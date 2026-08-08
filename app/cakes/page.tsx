import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CakesPageContent from "@/components/CakesPageContent";

export default function CakesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        <CakesPageContent />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}