import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-accent-brown py-20">
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-white/5" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12">
        <p className="mb-4 text-sm font-medium tracking-[0.25em] text-white/80">
          FRESHLY BAKED • MADE WITH LOVE
        </p>

        <h2 className="mb-5 font-heading text-4xl font-bold text-white md:text-5xl">
          Order Your Favorite Treats
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-white/90">
          Choose your favorite cake or dessert and enjoy it your way.
        </p>

        {/* Order Options */}
        <div className="mx-auto mb-10 grid max-w-3xl gap-5 sm:grid-cols-2">
          {/* Pickup */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
            <div className="mb-3 text-3xl">🎂</div>

            <h3 className="text-xl font-semibold text-white">
              Pick Up Your Order
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/75">
              Place your order and pick it up fresh from our location
              at your convenience.
            </p>
          </div>

          {/* Delivery */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
            <div className="mb-3 text-3xl">🛵</div>

            <h3 className="text-xl font-semibold text-white">
              Get It Delivered
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/75">
              Enjoy your favorite treats delivered fresh and safely
              right to your doorstep.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/cakes"
            className="rounded-full bg-white px-10 py-4 font-semibold text-accent-brown shadow-md transition-all duration-300 hover:bg-cream hover:shadow-lg"
          >
            Browse Our Cakes
          </Link>

          <Link
            href="/contact"
            className="rounded-full border-2 border-white px-10 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
}