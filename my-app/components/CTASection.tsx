import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-accent-brown relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
          Ready to Order Your Dream Cake?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Whether it's a birthday, wedding, or any special occasion, we're here to make it sweeter!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white hover:bg-cream text-accent-brown font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Us Now
          </Link>
          <Link
            href="/cakes"
            className="bg-transparent hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-full border-2 border-white transition-all duration-300"
          >
            Browse All Cakes
          </Link>
        </div>
      </div>
    </section>
  );
}
