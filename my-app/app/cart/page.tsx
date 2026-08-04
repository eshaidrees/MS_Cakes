import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CartPageContent from "@/components/CartPageContent";

export default function CartPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <CartPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
