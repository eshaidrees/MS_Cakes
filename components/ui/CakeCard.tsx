"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/cakes";

interface CakeCardProps {
  cake: Product;
}

export default function CakeCard({
  cake,
}: CakeCardProps) {
  const startingPrice = cake.variants[0]?.price ?? 0;

  return (
    <Link
      href={`/cakes/${cake.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden bg-[#f8eee9] sm:h-56 lg:h-64">
        <Image
          src={cake.image}
          alt={cake.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Type Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold capitalize text-[#6b4636] shadow-sm">
          {cake.type === "dessert-cup"
            ? "Dessert Cup"
            : cake.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5">
        <h3 className="mb-2 line-clamp-1 font-heading text-lg font-bold text-foreground">
          {cake.name}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm leading-6 text-text-light">
          {cake.description}
        </p>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-text-light">
              Starting from
            </p>

            <p className="font-heading text-base font-bold text-accent-brown sm:text-xl">
              Rs. {startingPrice.toLocaleString()}
            </p>
          </div>

          <span className="rounded-full bg-pink-primary px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-accent-brown">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}