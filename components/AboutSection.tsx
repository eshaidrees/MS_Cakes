import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ================= IMAGE ================= */}

          <div className="relative">

            {/* Main Cake Image */}

            <div className="relative h-[420px] overflow-hidden rounded-3xl bg-[#f8eee9] shadow-lg md:h-[520px]">
              <Image
                src="/images/cake1.jpeg"
                alt="Freshly made MS Cakes in Karachi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>

            {/* Small Decorative Card */}

            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-5 shadow-xl md:-right-8">
              <div className="text-center">

                <span className="text-3xl">
                  🎂
                </span>

                <p className="mt-1 font-heading text-lg font-bold text-foreground">
                  Freshly Baked
                </p>

                <p className="text-sm text-text-light">
                  Made with love
                </p>

              </div>
            </div>

          </div>

          {/* ================= CONTENT ================= */}

          <div>

            {/* Badge */}

            <span className="mb-4 inline-block rounded-full bg-pink-primary/30 px-4 py-2 text-sm font-semibold text-foreground">
              About MS Cakes
            </span>

            {/* Heading */}

            <h2 className="mb-6 font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Sweet Moments,
              <br />
              Made Special
            </h2>

            {/* Description */}

            <p className="mb-6 text-lg leading-8 text-text-light">
              Welcome to MS Cakes! We are a new and passionate cake
              business dedicated to creating beautiful and delicious
              treats for your special moments.
            </p>

            <p className="mb-8 leading-7 text-text-light">
              From delicious birthday cakes to cupcakes and dessert
              cups, every treat is prepared with care using quality
              ingredients. We believe that every celebration deserves
              something sweet, beautiful, and memorable.
            </p>

            {/* ================= KARACHI DELIVERY ================= */}

            <div className="mb-8 flex items-start gap-4 rounded-2xl border border-pink-primary/20 bg-[#fff7f3] p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-primary/20 text-2xl">
                📍
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  Karachi Orders Only
                </h3>

                <p className="mt-1 leading-6 text-text-light">
                  We currently accept cake orders and deliveries
                  within Karachi.
                </p>
              </div>

            </div>

            {/* ================= FEATURES ================= */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* Feature 1 */}

              <div className="flex items-start gap-3 rounded-xl bg-cream p-4">

                <span className="text-2xl">
                  🎨
                </span>

                <div>
                  <h4 className="font-bold text-foreground">
                    Beautiful Designs
                  </h4>

                  <p className="text-sm text-text-light">
                    Cakes made for your special moments
                  </p>
                </div>

              </div>

              {/* Feature 2 */}

              <div className="flex items-start gap-3 rounded-xl bg-cream p-4">

                <span className="text-2xl">
                  🌿
                </span>

                <div>
                  <h4 className="font-bold text-foreground">
                    Quality Ingredients
                  </h4>

                  <p className="text-sm text-text-light">
                    Carefully selected ingredients
                  </p>
                </div>

              </div>

              {/* Feature 3 */}

              <div className="flex items-start gap-3 rounded-xl bg-cream p-4">

                <span className="text-2xl">
                  🍰
                </span>

                <div>
                  <h4 className="font-bold text-foreground">
                    Freshly Made
                  </h4>

                  <p className="text-sm text-text-light">
                    Fresh treats prepared with care
                  </p>
                </div>

              </div>

              {/* Feature 4 */}

              <div className="flex items-start gap-3 rounded-xl bg-cream p-4">

                <span className="text-2xl">
                  💝
                </span>

                <div>
                  <h4 className="font-bold text-foreground">
                    Made with Love
                  </h4>

                  <p className="text-sm text-text-light">
                    Every cake is made with care
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}