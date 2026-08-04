import { Suspense } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CakesPageContent from "@/components/CakesPageContent";

export default function CakesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <CakesPageContent />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
