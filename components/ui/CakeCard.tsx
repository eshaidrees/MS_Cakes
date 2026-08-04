"use client";

import { useCart } from "@/context/CartContext";
import { Cake } from "@/data/cakes";

interface CakeCardProps {
  cake: Cake;
}

export default function CakeCard({ cake }: CakeCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-foreground shadow-sm">
          {cake.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2 font-heading line-clamp-1">
          {cake.name}
        </h3>
        <p className="text-sm text-text-light mb-4 line-clamp-2">
          {cake.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-accent-brown font-heading">
            ${cake.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(cake)}
            className="bg-pink-primary hover:bg-accent-brown text-foreground hover:text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
