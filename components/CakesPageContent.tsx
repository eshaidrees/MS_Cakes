"use client";

import CakeCard from "@/components/ui/CakeCard";
import {
  cakes,
  cupcakes,
  glassCakes,
} from "@/data/cakes";

export default function CakesPageContent() {
  return (
    <section className="min-h-screen bg-[#fffaf7] px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#b77b61]">
            Freshly Made
          </p>

          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Our Delicious Collection
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            Explore our delicious cakes, cupcakes and
            glass cakes, freshly prepared for every
            special occasion.
          </p>
        </div>

        {/* ================= CAKES ================= */}

        <ProductSection
          title="Our Cakes"
          description="Beautiful and delicious cakes for every special occasion."
          products={cakes}
        />

        {/* ================= CUPCAKES ================= */}

        <ProductSection
          title="Our Cupcakes"
          description="Perfect little treats for birthdays, parties and celebrations."
          products={cupcakes}
        />

        {/* ================= GLASS CAKES ================= */}

        <ProductSection
          title="Our Glass Cakes"
          description="Creamy layered desserts beautifully served in a glass."
          products={glassCakes}
          last
        />

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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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