"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-pink-primary/30 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ Handcrafted with Love
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 font-heading">
              Delicious Cakes for{" "}
              <span className="text-accent-brown">
                Every Occasion
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-light mb-8 max-w-lg mx-auto lg:mx-0">
              From birthdays to weddings, we create beautiful and mouth-watering cakes that make your special moments even more memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/cakes"
                className="bg-pink-primary hover:bg-accent-brown text-foreground hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Explore Our Cakes
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-cream text-foreground font-semibold px-8 py-4 rounded-full border-2 border-pink-primary transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Order Custom Cake
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-pink-primary/30">
              <div>
                <p className="text-3xl font-bold text-accent-brown font-heading">500+</p>
                <p className="text-sm text-text-light">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-brown font-heading">50+</p>
                <p className="text-sm text-text-light">Cake Varieties</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-brown font-heading">5⭐</p>
                <p className="text-sm text-text-light">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop"
                alt="Delicious Chocolate Cake"
                className="relative rounded-3xl shadow-xl w-full aspect-square object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🎂</span>
                <div>
                  <p className="font-bold text-foreground">Fresh Daily</p>
                  <p className="text-sm text-text-light">Baked with love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
