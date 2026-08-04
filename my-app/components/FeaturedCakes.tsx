import CakeCard from "./ui/CakeCard";
import { cakes } from "@/data/cakes";
import Link from "next/link";

export default function FeaturedCakes() {
  const featuredCakes = cakes.slice(0, 8);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-pink-primary/30 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Featured Cakes
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Discover our most popular and beloved cake creations
          </p>
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/cakes"
            className="inline-block bg-pink-primary hover:bg-accent-brown text-foreground hover:text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Cakes
          </Link>
        </div>
      </div>
    </section>
  );
}
