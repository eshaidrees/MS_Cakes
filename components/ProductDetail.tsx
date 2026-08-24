"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ShoppingCart,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";

import { Product } from "@/data/cakes";
import { useCart } from "@/context/CartContext";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({
  product,
}: ProductDetailProps) {
  const { addToCart } = useCart();

  const isCustomCake =
    product.category === "customize";

  const firstVariant = product.variants?.[0];

  const [selectedVariant, setSelectedVariant] =
    useState(firstVariant);

  const [added, setAdded] = useState(false);

  /* =========================================================
     NORMAL PRODUCT → ADD TO CART
  ========================================================= */

  const handleAddToCart = () => {
    if (isCustomCake) {
      return;
    }

    if (!selectedVariant) {
      return;
    }

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

  /* =========================================================
     CUSTOM CAKE → WHATSAPP
  ========================================================= */

  const handleWhatsAppOrder = () => {

   const phoneNumber = "923198531082";

    const message = `Hi! I would like to order a custom cake.

Cake Name: ${product.name}

I would like to discuss:
• Cake size
• Flavor
• Design / Theme
• Colors
• Custom message
• Price

Please share the details with me. Thank you!`;

    const whatsappUrl =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

    window.location.href = whatsappUrl;
  };

  return (
    <main className="min-h-screen bg-[#fffaf7] px-5 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">

        {/* =================================================
            BACK BUTTON
        ================================================= */}

        <Link
          href="/cakes"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-yellow-700 transition-colors hover:text-foreground"
        >
          <ArrowLeft size={18} />
          Back to Collection
        </Link>

        {/* =================================================
            PRODUCT
        ================================================= */}

        <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-2">

          {/* =================================================
              IMAGE
          ================================================= */}

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

          {/* =================================================
              DETAILS
          ================================================= */}

          <div className="flex flex-col justify-center p-7 md:p-12">

            {/* PRODUCT TYPE */}

            <span className="mb-4 w-fit rounded-full bg-pink-primary/20 px-4 py-2 text-sm font-semibold capitalize text-yellow-700">
              {isCustomCake
                ? "Custom Cake"
                : product.type === "dessert-cup"
                  ? "Dessert Cup"
                  : product.type}
            </span>

            {/* PRODUCT NAME */}

            <h1 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
              {product.name}
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-5 leading-7 text-text-light">
              {product.description}
            </p>

            {/* =================================================
                CUSTOM CAKE
            ================================================= */}

            {isCustomCake ? (
              <div className="mt-8 rounded-2xl bg-[#fff7f3] p-6">

                <h2 className="text-lg font-bold text-foreground">
                  Create Your Dream Cake 🎂
                </h2>

                <p className="mt-2 leading-6 text-text-light">
                  Tell us your preferred cake size, flavor,
                  design, colors, theme and message. We'll
                  create a cake especially for your celebration.
                </p>

                <p className="mt-4 text-sm font-medium text-accent-brown">
                  Price depends on your customization
                  requirements.
                </p>

              </div>
            ) : (
              /* =================================================
                 NORMAL PRODUCT VARIANTS
              ================================================= */

              <div className="mt-8">

                <h2 className="mb-4 text-lg font-bold text-foreground">
                  Select Option
                </h2>

                <div className="grid grid-cols-2 gap-3">
                  {product.variants?.map((variant) => {
                    const isSelected =
                      selectedVariant?.label ===
                      variant.label;

                    return (
                      <button
                        key={variant.label}
                        type="button"
                        onClick={() =>
                          setSelectedVariant(variant)
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

                        <p className="mt-1 font-heading text-lg font-bold text-yellow-700">
                          Rs.{" "}
                          {variant.price.toLocaleString()}
                        </p>
                      </button>
                    );
                  })}
                </div>

              </div>
            )}

            {/* =================================================
                BOTTOM SECTION
            ================================================= */}

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-gray-100 pt-6">

              {/* PRICE */}

              {isCustomCake ? (
                <div>
                  <p className="text-sm text-text-light">
                    Price
                  </p>

                  <p className="font-heading text-2xl font-bold text-accent-brown">
                    Custom Pricing
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-text-light">
                    {selectedVariant?.label}
                  </p>

                  <p className="font-heading text-3xl font-bold text-yellow-700">
                    Rs.{" "}
                    {selectedVariant?.price.toLocaleString()}
                  </p>
                </div>
              )}

              {/* =================================================
                  CUSTOM → WHATSAPP
              ================================================= */}

              {isCustomCake ? (
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white shadow-sm transition-all hover:bg-[#1ebe5d] hover:shadow-md"
                >
                  <MessageCircle size={19} />
                  Order on WhatsApp
                </button>
              ) : (
                /* =================================================
                   NORMAL → CART
                ================================================= */

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex items-center gap-2 rounded-full bg-yellow-800 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-pink-600 hover:bg-pink-600"
                >
                  <ShoppingCart size={19} />

                  {added ? "Added!" : "Add to Cart"}
                </button>
              )}

            </div> 
          </div>
        </div>
      </div>
    </main>
  );
}