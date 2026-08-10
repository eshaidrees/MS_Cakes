import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ContactPageContent from "@/components/ContactPageContent";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <ContactPageContent />
      </main>
      <WhatsAppButton />
    </div>
  );
}
