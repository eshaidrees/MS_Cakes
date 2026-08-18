"use client";

import CakeCard from "@/components/ui/CakeCard";
import {
  cakes,
  cupcakes,
  dessertCup,
} from "@/data/cakes";


const birthdayCakes = cakes.filter(
  (cake) => cake.category === "birthday"
);

const weddingCakes = cakes.filter(
  (cake) => cake.category === "wedding"
);

const independenceCakes = cakes.filter(
  (cake) => cake.category === "independence"
);

const customCakes = cakes.filter(
  (cake) => cake.category === "custom"
);


export default function CakesPageContent() {
  return (
    <section className="min-h-screen bg-[#fffaf7] px-5 py-6 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
         <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#b77b61]">
            Freshly Made
          </p>

          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Our Delicious Collection
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            Explore our delicious cakes, cupcakes and
            dessert Cup, freshly prepared for every
            special occasion.
          </p>
        </div>

        {/* ================= CATEGORY NAVIGATION ================= */}
        <div className="sticky top-16 z-30 mb-10 w-full rounded-xl bg-white/95 p-2.5 shadow-md backdrop-blur-md sm:top-20 sm:mb-14 sm:rounded-2xl sm:p-4">

          {/* Mobile: horizontal scroll */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide sm:flex-wrap sm:justify-center sm:overflow-visible">

            <a
              href="#birthday"
              className="shrink-0 rounded-full bg-pink-100 px-3.5 py-2 text-xs font-medium text-gray-700 transition hover:bg-pink-500 hover:text-white sm:px-5 sm:py-3 sm:text-sm"
            >
              🎂 Birthday Cakes
            </a>

            <a
              href="#wedding"
              className="shrink-0 rounded-full bg-pink-100 px-3.5 py-2 text-xs font-medium text-gray-700 transition hover:bg-pink-500 hover:text-white sm:px-5 sm:py-3 sm:text-sm"
            >
              💍 Wedding Cakes
            </a>

            <a
              href="#custom"
              className="shrink-0 rounded-full bg-pink-100 px-3.5 py-2 text-xs font-medium text-gray-700 transition hover:bg-pink-500 hover:text-white sm:px-5 sm:py-3 sm:text-sm"
            >
              🎨 Custom Cakes
            </a>

            <a
              href="#independence"
              className="shrink-0 rounded-full bg-pink-100 px-3.5 py-2 text-xs font-medium text-gray-700 transition hover:bg-pink-500 hover:text-white sm:px-5 sm:py-3 sm:text-sm"
            >
              🇵🇰 Independence Cakes
            </a>

            <a
              href="#cupcakes"
              className="shrink-0 rounded-full bg-pink-100 px-3.5 py-2 text-xs font-medium text-gray-700 transition hover:bg-pink-500 hover:text-white sm:px-5 sm:py-3 sm:text-sm"
            >
              🧁 Cupcakes
            </a>

            <a
              href="#dessert"
              className="shrink-0 rounded-full bg-pink-100 px-3.5 py-2 text-xs font-medium text-gray-700 transition hover:bg-pink-500 hover:text-white sm:px-5 sm:py-3 sm:text-sm"
            >
              🍨 Dessert Cups
            </a>

          </div>
          </div>

        {/* ================= CAKES ================= */}

        <section id="birthday" className="scroll-mt-28 text-center">
          <ProductSection
            title="🎂 Birthday Cakes"
            description="Beautiful birthday cakes for every celebration."
            products={birthdayCakes}
          />
        </section>

        <section id="wedding" className="scroll-mt-28 text-center">
          <ProductSection
            title="💍 Wedding Cakes"
            description="Elegant wedding cakes crafted for your special day."
            products={weddingCakes}
          />
        </section>

        <section id="custom" className="scroll-mt-28 text-center">
          <ProductSection
            title="🎨 Custom Cakes"
            description="Personalized cakes made exactly the way you want."
            products={customCakes}
          />
        </section> 

        <section id="independence" className="scroll-mt-28 text-center">
          <ProductSection
            title="🇵🇰 Independence Day Cakes"
            description="Celebrate with patriotic themed cakes."
            products={independenceCakes}
          />
        </section>

        <section id="cupcakes" className="scroll-mt-28 text-center">
          <ProductSection
            title="🧁 Cupcakes"
            description="Perfect little treats for every occasion."
            products={cupcakes}
          />
        </section>

        <section id="dessert" className="scroll-mt-28 text-center">
          <ProductSection
            title="🍨 Dessert Cups"
            description="Creamy layered desserts served in elegant cups."
            products={dessertCup}
            last
          />
        </section>

      </div>
    </section>
  );
}

/* =========================================================
   PRODUCT SECTION
========================================================= */

function ProductSection({
  title,
  description,
  products,
  last = false,
}: {
  title: string;
  description: string;
  products: typeof cakes;
  last?: boolean;
}) {
  return (
    <div className={last ? "" : "mb-20"}>

      <div className="mb-8">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          {title}
        </h2>

        <p className="mt-2 text-text-light">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <CakeCard
            key={product.id}
            cake={product}
          />
        ))}
      </div>

    </div>
  );
}