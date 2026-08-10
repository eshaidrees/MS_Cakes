import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CakesPageContent from "@/components/CakesPageContent";

export default function CakesPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <CakesPageContent />
      </main>

      <WhatsAppButton />
    </div>
  );
}