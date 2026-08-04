import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ContactPageContent from "@/components/ContactPageContent";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <ContactPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
