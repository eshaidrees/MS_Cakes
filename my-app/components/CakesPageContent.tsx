"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CakeCard from "@/components/ui/CakeCard";
import { cakes, categories } from "@/data/cakes";

export default function CakesPageContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get category from URL query parameter
  useEffect(() => {
    const category = searchParams.get("category");
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredCakes =
    selectedCategory === "All"
      ? cakes
      : cakes.filter((cake) => cake.category === selectedCategory);

  return (
    <section className="py-12 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-pink-primary/30 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Collection
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Our Delicious Cakes
          </h1>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Browse through our amazing selection of handcrafted cakes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-pink-primary text-white shadow-md"
                  : "bg-white text-foreground hover:bg-soft-pink border border-pink-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>

        {/* No Results */}
        {filteredCakes.length === 0 && (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">🍰</span>
            <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
              No cakes found
            </h3>
            <p className="text-text-light">
              Try selecting a different category
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
