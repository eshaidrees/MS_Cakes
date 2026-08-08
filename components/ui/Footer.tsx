import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-cream border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="MS Cakes Logo"
                width={36}
                height={36}
                className="object-contain flex-shrink-0 w-7 h-7 md:w-9 md:h-9"
              />
              <h3 className="text-xl md:text-2xl font-bold text-foreground font-heading">
                MS Cakes
              </h3>
            </div>
            <p className="text-text-light mb-4 max-w-md">
              Handcrafted with love, baked to perfection. We create beautiful and delicious cakes for all your special moments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-pink-primary/30 flex items-center justify-center hover:bg-pink-primary/50 transition-colors">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-primary/30 flex items-center justify-center hover:bg-pink-primary/50 transition-colors">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-primary/30 flex items-center justify-center hover:bg-pink-primary/50 transition-colors">
                <span className="text-lg">🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-text-light hover:text-accent-brown transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cakes" className="text-text-light hover:text-accent-brown transition-colors">
                  Our Cakes
                </Link>
              </li>
             
              <li>
                <Link href="/contact" className="text-text-light hover:text-accent-brown transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-2 text-text-light">
              <li>📍 123 Bakery Street</li>
              <li>📞 +1 234 567 890</li>
              <li>✉️ hello@sweetdelight.com</li>
              <li>🕒 Mon-Sat: 9AM - 7PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-text-light">
          <p>&copy; {new Date().getFullYear()} MS Cakes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
