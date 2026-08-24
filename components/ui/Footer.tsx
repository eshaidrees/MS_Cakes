import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-pink-primary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpeg"
                alt="MS Cakes Logo"
                width={50}
                height={50}
                className="h-16 w-16 shrink-0 object-cover rounded-full md:h-20 md:w-20"              />
              <span className="-mt-1 font-italic font-heading text-[19px] text-[#6B4035] sm:text-[23px] md:text-[27px]">
                MS Cakes{" "}
                <span className="font-serif text-[0.9em] not-italic">&amp;</span>{" "}
                Bakes
              </span>
            </div>

            <p className="text-text-light mb-5 max-w-md leading-relaxed">
              Freshly baked with love in Karachi. From beautiful birthday cakes
              to delicious cupcakes and desserts, we make every celebration
              extra special.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MS Cakes on Instagram"
                className="w-10 h-10 rounded-full bg-pink-primary/30 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MS Cakes on TikTok"
                className="w-10 h-10 rounded-full bg-pink-primary/30 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.5 8.2a5.3 5.3 0 0 1-3.2-1.1v7.2a5.7 5.7 0 1 1-4.9-5.6v2.9a2.8 2.8 0 1 0 2 2.7V2h2.9c.2 1.6 1.5 2.9 3.2 3.2v3z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MS Cakes on Facebook"
                className="w-10 h-10 rounded-full bg-pink-primary/30 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3.5l.5-4H13V9c0-.7.3-1 1-1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-text-light hover:text-accent-brown transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/cakes"
                  className="text-text-light hover:text-accent-brown transition-colors"
                >
                  Our Cakes
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-text-light hover:text-accent-brown transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-text-light hover:text-accent-brown transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Visit & Contact
            </h4>

            <ul className="space-y-3 text-text-light">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Karachi, Pakistan</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a
                  href="tel:+923001234567"
                  className="hover:text-accent-brown transition-colors"
                >
                  +92 300 1234567
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:hello@mscakesandbakes.com"
                  className="hover:text-accent-brown transition-colors"
                >
                  hello@mscakesandbakes.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-pink-primary/20 mt-10 pt-6 text-center text-text-light">
          <p className="text-sm">
            © {new Date().getFullYear()} MS Cakes & Bakes. All rights reserved.
          </p>

          <p className="text-xs mt-2">
            Freshly baked in Karachi with love ♡
          </p>
        </div>
      </div>
    </footer>
  );
}