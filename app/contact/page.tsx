import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ContactPageContent from "@/components/ContactPageContent";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <main>
        <ContactPageContent />
      </main>
      <WhatsAppButton />
    </div>
  );
}
