import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import GalleryPageContent from "@/components/GalleryPageContent";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <GalleryPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
