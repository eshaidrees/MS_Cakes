"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag } from "react-icons/fi";

import { useCart } from "@/context/CartContext";

export default function CartPageContent() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCart();

  const handleWhatsAppOrder = () => {
    const phoneNumber = "923198531082";

    let message = "🎂 *New Order from MS Cakes*\n\n";

    cart.forEach((item) => {
      message += `• ${item.name}`;

      if (item.variant) {
        message += ` (${item.variant})`;
      }

      message += ` x${item.quantity}`;

      message += ` - Rs. ${(
        item.price * item.quantity
      ).toLocaleString()}\n`;
    });

    message += `\n💰 *Total: Rs. ${getTotalPrice().toLocaleString()}*\n\n`;

    message += "Please confirm my order. Thank you!";

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  /* ================= EMPTY CART ================= */

  if (cart.length === 0) {
    return (
      <section className="min-h-[70vh] bg-[#fffaf7] px-5 py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center text-center">

          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#f8eee9] text-[#b45f43]">
            <FiShoppingBag size={40} />
          </div>

          <h1 className="font-heading text-4xl font-bold text-foreground">
            Your Cart is Empty
          </h1>

          <p className="mt-4 text-text-light">
            Looks like you haven't added any delicious cakes yet!
          </p>

          <Link
            href="/cakes"
            className="mt-8 rounded-full bg-pink-primary px-7 py-3 font-semibold text-foreground shadow-sm transition-all duration-200 hover:bg-accent-brown hover:text-white"
          >
            Browse Our Cakes
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#fffaf7] px-5 py-12 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b77b61]">
            Your Selection
          </p>

          <h1 className="mt-2 font-heading text-4xl font-bold text-foreground md:text-5xl">
            Your Cart
          </h1>

          <p className="mt-2 text-text-light">
            {cart.length} item{cart.length !== 1 ? "s" : ""} in your cart
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* ================= CART ITEMS ================= */}

          <div className="space-y-4 lg:col-span-2">

            {cart.map((item) => (
              <div
                key={`${item.cartId}-${item.variant ?? ""}`}
                className="rounded-2xl bg-cream p-5 shadow-sm md:p-6"
              >
                <div className="flex gap-4 md:gap-6">

                  {/* Product Image */}

                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#f8eee9] md:h-32 md:w-32">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>

                  {/* Product Content */}

                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-3">

                      <div>
                        <h3 className="font-heading text-lg font-bold text-foreground md:text-xl">
                          {item.name}
                        </h3>

                        {/* Variant */}

                        {item.variant && (
                          <p className="mt-1 text-sm text-text-light">
                            Option:{" "}
                            <span className="font-semibold text-foreground">
                              {item.variant}
                            </span>
                          </p>
                        )}
                      </div>

                      {/* Remove */}

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.cartId)}
                        aria-label={`Remove ${item.name}`}
                        className="rounded-full p-2 text-red-500 transition-colors hover:bg-red-50 hover:text-red-600"
                      >
                        <FiTrash2 size={19} />
                      </button>

                    </div>

                    {/* Price */}

                    <p className="mt-3 font-heading text-xl font-bold text-accent-brown">
                      Rs. {item.price.toLocaleString()}
                    </p>

                    {/* Quantity + Subtotal */}

                    <div className="mt-4 flex items-center gap-4">

                      {/* Quantity */}

                      <div className="flex items-center gap-2 rounded-full bg-white p-1 shadow-sm">

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.cartId,
                              item.quantity - 1
                            )
                          }
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-pink-primary text-foreground transition-colors hover:bg-soft-pink disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <FiMinus size={14} />
                        </button>

                        <span className="w-8 text-center font-semibold text-foreground">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.cartId,
                              item.quantity + 1
                            )
                          }
                          aria-label="Increase quantity"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-pink-primary text-foreground transition-colors hover:bg-soft-pink"
                        >
                          <FiPlus size={14} />
                        </button>

                      </div>

                      {/* Subtotal */}

                      <div className="ml-auto text-right">
                        <p className="text-xs text-text-light">
                          Subtotal
                        </p>

                        <p className="font-heading text-lg font-bold text-foreground">
                          Rs.{" "}
                          {(
                            item.price * item.quantity
                          ).toLocaleString()}
                        </p>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}

            <button
              type="button"
              onClick={clearCart}
              className="w-full rounded-xl bg-soft-pink py-3 font-medium text-foreground transition-all duration-200 hover:bg-pink-primary"
            >
              Clear Cart
            </button>

          </div>

          {/* ================= ORDER SUMMARY ================= */}

          <div className="lg:col-span-1">

            <div className="sticky top-24 rounded-2xl bg-cream p-6 shadow-sm">

              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
                Order Summary
              </h2>

              {/* Items */}

              <div className="mb-6 space-y-4 border-b border-pink-primary/30 pb-6">

                {cart.map((item) => (
                  <div
                    key={`${item.cartId}-${item.variant ?? ""}`}
                    className="flex items-start justify-between gap-4 text-sm"
                  >

                    <div className="text-text-light">
                      <p>
                        {item.name} x{item.quantity}
                      </p>

                      {item.variant && (
                        <p className="mt-1 text-xs">
                          {item.variant}
                        </p>
                      )}
                    </div>

                    <span className="shrink-0 font-semibold text-foreground">
                      Rs.{" "}
                      {(
                        item.price * item.quantity
                      ).toLocaleString()}
                    </span>

                  </div>
                ))}

              </div>

              {/* Total */}

              <div className="mb-6 flex items-center justify-between">

                <span className="font-semibold text-foreground">
                  Total
                </span>

                <span className="font-heading text-3xl font-bold text-accent-brown">
                  Rs. {getTotalPrice().toLocaleString()}
                </span>

              </div>

              {/* WhatsApp */}

              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>

                Order via WhatsApp
              </button>


              <Link
                href="/cakes"
                className="mt-3 block w-full rounded-xl border border-pink-primary/30 bg-white py-3 text-center font-medium text-foreground hover:bg-soft-pink"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}