import CakeCard from "./ui/CakeCard";
import {
  cakes,
  cupcakes,
  glassCakes,
} from "@/data/cakes";
import Link from "next/link";

export default function FeaturedCakes() {
  // Cakes + Cupcakes + Glass Cakes
  const featuredProducts = [
    ...cakes,
    ...cupcakes,
    ...glassCakes,
  ];

  return (
    <section className="bg-[#fffaf7] px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#b77b61]">
            Our Collection
          </p>

          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Featured Treats
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            Discover our delicious cakes, cupcakes and
            glass cakes, freshly made for every special
            occasion.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
           {featuredProducts.map((product) => (
          <CakeCard
          key={product.id}
          cake={product}
          />
         ))}
     </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/cakes"
            className="inline-block rounded-full bg-pink-primary px-10 py-4 font-semibold text-foreground shadow-md transition-all duration-300 hover:bg-accent-brown hover:text-white hover:shadow-lg"
          >
            View All Collection
          </Link>
        </div>

      </div>
    </section>
  );
}