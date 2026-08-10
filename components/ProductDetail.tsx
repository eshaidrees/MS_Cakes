"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, ArrowLeft } from "lucide-react";

import { Product } from "@/data/cakes";
import { useCart } from "@/context/CartContext";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({
  product,
}: ProductDetailProps) {
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] =
    useState(product.variants[0]);

  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      image: product.image,
      description: product.description,
      type: product.type,
      variant: selectedVariant.label,
      price: selectedVariant.price,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#fffaf7] px-5 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Back */}

        <Link
          href="/cakes"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-accent-brown hover:text-foreground"
        >
          <ArrowLeft size={18} />
          Back to Collection
        </Link>

        {/* Product */}

        <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-2">

          {/* Image */}

          <div className="relative min-h-[400px] bg-[#f8eee9] md:min-h-[550px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Details */}

          <div className="flex flex-col justify-center p-7 md:p-12">

            <span className="mb-4 w-fit rounded-full bg-pink-primary/20 px-4 py-2 text-sm font-semibold capitalize text-accent-brown">
              {product.type === "dessert-cup"
                ? "Glass Cake"
                : product.type}
            </span>

            <h1 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 leading-7 text-text-light">
              {product.description}
            </p>

            {/* Variant */}

            <div className="mt-8">

              <h2 className="mb-4 text-lg font-bold text-foreground">
                Select Option
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {product.variants.map(
                  (variant) => {
                    const isSelected =
                      selectedVariant.label ===
                      variant.label;

                    return (
                      <button
                        key={variant.label}
                        type="button"
                        onClick={() =>
                          setSelectedVariant(
                            variant
                          )
                        }
                        className={`rounded-xl border-2 p-4 text-left transition-all ${
                          isSelected
                            ? "border-pink-primary bg-pink-primary/10"
                            : "border-gray-200 bg-white hover:border-pink-primary/50"
                        }`}
                      >
                        <p className="font-semibold text-foreground">
                          {variant.label}
                        </p>

                        <p className="mt-1 font-heading text-lg font-bold text-accent-brown">
                          Rs.{" "}
                          {variant.price.toLocaleString()}
                        </p>
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {/* Selected Price */}

            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">

              <div>
                <p className="text-sm text-text-light">
                  {selectedVariant.label}
                </p>

                <p className="font-heading text-3xl font-bold text-accent-brown">
                  Rs.{" "}
                  {selectedVariant.price.toLocaleString()}
                </p>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex items-center gap-2 rounded-full bg-pink-primary px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-accent-brown hover:shadow-md"
              >
                <ShoppingCart size={19} />

                {added
                  ? "Added!"
                  : "Add to Cart"}
              </button>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}