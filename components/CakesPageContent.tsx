"use client";

import CakeCard from "@/components/ui/CakeCard";
import {
  cakes,
  cupcakes,
  dessertCup,
  pastries,
  cartoonThemeCake,
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
  (cake) => cake.category === "customize"
);

export default function CakesPageContent() {
 return (
  <section className="min-h-screen bg-[#fffaf7] px-4 py-6 sm:px-6 sm:py-10 md:px-8 md:py-12">
    <div className="mx-auto max-w-7xl">

      {/* ================= PAGE HEADER ================= */}

      <div className="mb-8 text-center sm:mb-10 md:mb-12">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#b77b61] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">
          Freshly Made
        </p>

        <h1 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
          Our Delicious Collection
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-text-light sm:mt-4 sm:text-base sm:leading-7">
          Explore our delicious cakes, cupcakes and dessert cups,
          freshly prepared for every special occasion.
        </p>
      </div>


    {/* ================= CATEGORY NAVIGATION ================= */}

<div className="mb-10 sm:mb-12">

  {/* Small heading */}

  <div className="mb-4 flex items-center justify-between">
    <h2 className="font-heading text-lg font-bold text-[#65443a] sm:text-xl">
      Explore Categories
    </h2>

    <span className="text-xs text-[#9a8178] sm:text-sm">
      Choose a category
    </span>
  </div>


  {/* Category Pills */}

  <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide sm:flex-wrap sm:overflow-visible">

    {/* Birthday */}

    <a
      href="#birthday"
      className="shrink-0 rounded-full border border-[#efd0d5] bg-white px-4 py-2.5 text-sm font-medium text-[#65443a] shadow-sm transition-all hover:border-[#e9a6b0] hover:bg-[#fce5e8] hover:text-[#65443a] sm:px-5"
    >
      🎂 Birthday
    </a>

    <a
      href="#cartoon-theme-cakes"
      className="shrink-0 rounded-full border border-[#efd0d5] bg-white px-4 py-2.5 text-sm font-medium text-[#65443a] shadow-sm transition-all hover:border-[#e9a6b0] hover:bg-[#fce5e8] hover:text-[#65443a] sm:px-5"
    >
      🍰 Cartoon Theme Cake
    </a>

     
    {/* Wedding */}

    <a
      href="#wedding"
      className="shrink-0 rounded-full border border-[#efd0d5] bg-white px-4 py-2.5 text-sm font-medium text-[#65443a] shadow-sm transition-all hover:border-[#e9a6b0] hover:bg-[#fce5e8] hover:text-[#65443a] sm:px-5"
    >
      💍 Wedding
    </a>


    {/* Custom */}

    <a
      href="#customize"
      className="shrink-0 rounded-full border border-[#efd0d5] bg-white px-4 py-2.5 text-sm font-medium text-[#65443a] shadow-sm transition-all hover:border-[#e9a6b0] hover:bg-[#fce5e8] hover:text-[#65443a] sm:px-5"
    >
      🎨 Customize
    </a>


    {/* Independence */}

    <a
      href="#independence"
      className="shrink-0 rounded-full border border-[#efd0d5] bg-white px-4 py-2.5 text-sm font-medium text-[#65443a] shadow-sm transition-all hover:border-[#e9a6b0] hover:bg-[#fce5e8] hover:text-[#65443a] sm:px-5"
    >
      🇵🇰 Independence
    </a>


    {/* Cupcakes */}

    <a
      href="#cupcakes"
      className="shrink-0 rounded-full border border-[#efd0d5] bg-white px-4 py-2.5 text-sm font-medium text-[#65443a] shadow-sm transition-all hover:border-[#e9a6b0] hover:bg-[#fce5e8] hover:text-[#65443a] sm:px-5"
    >
      🧁 Cupcakes
    </a>

    {/* Pastry */}
   <a
      href="#pastries"
      className="shrink-0 rounded-full border border-[#efd0d5] bg-white px-4 py-2.5 text-sm font-medium text-[#65443a] shadow-sm transition-all hover:border-[#e9a6b0] hover:bg-[#fce5e8] hover:text-[#65443a] sm:px-5"
    >
       🍰Pastries
    </a>


    {/* Dessert */}

    <a
      href="#dessert"
      className="shrink-0 rounded-full border border-[#efd0d5] bg-white px-4 py-2.5 text-sm font-medium text-[#65443a] shadow-sm transition-all hover:border-[#e9a6b0] hover:bg-[#fce5e8] hover:text-[#65443a] sm:px-5"
    >
      🍨 Dessert Cups
    </a>


  </div>

</div>

        {/* ================= BIRTHDAY CAKES ================= */}

        <section
          id="birthday"
          className="scroll-mt-28 text-center"
        >
          <ProductSection
            title="🎂 Birthday Cakes"
            description="Beautiful birthday cakes for every celebration."
            products={birthdayCakes}
          />
        </section>

        {/* ================= CARTOONS THEME BIRTHDAY CAKES ================= */}

        <section
          id="cartoon-theme-cakes"
          className="scroll-mt-28 text-center"
        >
          <ProductSection
            title="🎂 Cartoons Theme Birthday Cakes"
            description="Beautiful cartoons theme birthday cakes for every celebration."
            products={cartoonThemeCake}
          />
        </section>

        {/* ================= WEDDING CAKES ================= */}

        <section
          id="wedding"
          className="scroll-mt-28 text-center"
        >
          <ProductSection
            title="💍 Wedding Cakes"
            description="Elegant wedding cakes crafted for your special day."
            products={weddingCakes}
          />
        </section>

        {/* ================= CUSTOM CAKES ================= */}

        <section
          id="customize"
          className="scroll-mt-28 text-center"
        >
          <ProductSection
            title="🎨 Customize Cakes"
            description="Personalized cakes made exactly the way you want."
            products={customCakes}
          />
        </section>

        {/* ================= INDEPENDENCE CAKES ================= */}

        <section
          id="independence"
          className="scroll-mt-28 text-center"
        >
          <ProductSection
            title="🇵🇰 Independence Day Cakes"
            description="Celebrate with patriotic themed cakes."
            products={independenceCakes}
          />
        </section>

        {/* ================= CUPCAKES ================= */}

        <section
          id="cupcakes"
          className="scroll-mt-28 text-center"
        >
          <ProductSection
            title="🧁 Cupcakes"
            description="Perfect little treats for every occasion."
            products={cupcakes}
          />
        </section>
        {/* ================= PASTRIES ================= */}

         <section
          id="pastries"
          className="scroll-mt-28 text-center"
        >
          <ProductSection
            title="🍰 Sweet Treats"
            description="Discover our delicious selection of freshly baked sweet treats, from creamy pastries and indulgent brownies to soft tea cakes and delightful cake slices."
            products={pastries}
          />
        </section>

        {/* ================= DESSERT CUPS ================= */}

        <section
          id="dessert"
          className="scroll-mt-28 text-center"
        >
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

      {/* Section Heading */}

      <div className="mb-8">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          {title}
        </h2>

        <p className="mt-2 text-text-light">
          {description}
        </p>
      </div>

      {/* Products */}

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