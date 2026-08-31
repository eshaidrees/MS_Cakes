"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { getTotalItems, isCartOpen, setIsCartOpen } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/cakes", label: "Our Cakes" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white"
          }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-18 items-center justify-between md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.jpeg"
                alt="MS Cakes Logo"
                width={100}
                height={100}
                className="h-16 w-16 shrink-0 object-cover rounded-full md:h-20 md:w-20"
              />

              <span className="-mt-1 font-italic font-heading text-[19px] text-[#6B4035] sm:text-[23px] md:text-[27px]">
                MS Cakes{" "}
                <span className="font-serif text-[0.9em] not-italic">&amp;</span>{" "}
                Bakes
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-foreground transition-colors duration-200 hover:text-yellow-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">

              {/* Cart Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(!isCartOpen)}
                aria-label="Open cart"
                className="relative rounded-full p-2 transition-colors duration-200 hover:bg-soft-pink"
              >
                <svg
                  className="h-6 w-6 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                {getTotalItems() > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-primary text-xs font-bold text-white">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() =>
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }
                aria-label="Toggle menu"
                className="rounded-full p-2 transition-colors duration-200 hover:bg-soft-pink md:hidden"
              >
                <svg
                  className="h-6 w-6 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="animate-fade-in border-t bg-white md:hidden">
            <div className="space-y-3 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 font-medium text-foreground transition-colors duration-200 hover:text-accent-brown"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      {isCartOpen && <CartDrawer />}
    </>
  );
}


/* =========================================================
   CART DRAWER
========================================================= */

function CartDrawer() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
    clearCart,
  } = useCart();

  /* ================= WHATSAPP ORDER ================= */

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) {
      return;
    }

    const phoneNumber = "923073588816";

    let message = "🎂 *New Order from MS Cakes & Bakes*\n\n";

    message += "🛒 *ORDER DETAILS*\n";

    cart.forEach((item) => {
      message += `🍰 *${item.name}*\n`;

      if (item.variant) {
        message += `📏 Option: ${item.variant}\n`;
      }

      message += `📦 Quantity: ${item.quantity}\n`;
      message += `💰 Price: Rs. ${item.price.toLocaleString()}\n`;
      message += `💵 Subtotal: Rs. ${(
        item.price * item.quantity
      ).toLocaleString()}\n`;

      message += `🖼️ Image: https://mscakesandbakes.vercel.app${item.image}\n`;

      message += "\n";
    });

    message += "━━━━━━━━━━━━━━━━━━━━\n";
    message += `💰 *TOTAL: Rs. ${getTotalPrice().toLocaleString()}*\n`;
    message += "━━━━━━━━━━━━━━━━━━━━\n\n";

    message += "Please confirm my order. Thank you! ❤️";

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <>
      {/* ================= OVERLAY ================= */}

      <div
        className="fixed inset-0 z-50 bg-black/50 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* ================= DRAWER ================= */}

      <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-slide-in-right">

        {/* ================= HEADER ================= */}

        <div className="flex shrink-0 items-center justify-between border-b p-6">

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">
              Your Cart
            </h2>

            {cart.length > 0 && (
              <p className="mt-1 text-sm text-text-light">
                {cart.length}{" "}
                {cart.length === 1 ? "item" : "items"}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
            className="rounded-full p-2 transition-colors hover:bg-soft-pink"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

        </div>

        {/* ================= CART ITEMS ================= */}

        <div className="flex-1 overflow-y-auto p-6">

          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">

              <span className="mb-4 text-6xl">
                🛒
              </span>

              <h3 className="font-heading text-xl font-bold text-foreground">
                Your cart is empty
              </h3>

              <p className="mt-2 text-sm text-text-light">
                Add some delicious cakes!
              </p>

              <Link
                href="/cakes"
                onClick={() => setIsCartOpen(false)}
                className="mt-6 rounded-xl bg-pink-primary px-6 py-3 font-semibold text-foreground transition hover:bg-accent-brown hover:text-white"
              >
                Browse Cakes
              </Link>

            </div>
          ) : (
            <div className="space-y-4">

              {cart.map((item) => (
                <div
                  key={item.cartId}
                  className="flex gap-4 rounded-xl bg-cream p-4"
                >

                  {/* Image */}
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-[#f8eee9]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-2">

                      <div>
                        <h3 className="text-sm font-semibold text-foreground">
                          {item.name}
                        </h3>

                        {item.variant && (
                          <p className="mt-1 text-xs text-text-light">
                            {item.variant}
                          </p>
                        )}
                      </div>

                      {/* Delete */}
                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.cartId)
                        }
                        aria-label={`Remove ${item.name}`}
                        className="text-red-500 transition hover:text-red-600"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>

                    </div>

                    {/* Price */}
                    <p className="mt-1 font-bold text-accent-brown">
                      Rs. {item.price.toLocaleString()}
                    </p>

                    {/* Quantity */}
                    <div className="mt-2 flex items-center gap-2">

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.cartId,
                            item.quantity - 1
                          )
                        }
                        disabled={item.quantity <= 1}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-pink-primary bg-white font-bold text-foreground transition hover:bg-soft-pink disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        −
                      </button>

                      <span className="w-8 text-center font-semibold">
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
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-pink-primary bg-white font-bold text-foreground transition hover:bg-soft-pink"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

        {/* ================= FOOTER ================= */}

        {cart.length > 0 && (
          <div className="shrink-0 space-y-3 border-t bg-white p-6">

            {/* Total */}
            <div className="mb-2 flex items-center justify-between">

              <span className="font-semibold text-foreground">
                Total
              </span>

              <span className="font-heading text-2xl font-bold text-accent-brown">
                Rs. {getTotalPrice().toLocaleString()}
              </span>

            </div>

            {/* WhatsApp */}
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-green-600"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>

              Order via WhatsApp
            </button>


            {/* Continue Shopping */}
            <Link
              href="/cakes"
              onClick={() => setIsCartOpen(false)}
              className="block w-full rounded-xl border border-pink-primary/30 bg-white py-3 text-center font-medium text-foreground transition-all duration-200 hover:bg-soft-pink"
            >
              Continue Shopping
            </Link>

            {/* Clear Cart */}
            <button
              type="button"
              onClick={clearCart}
              className="w-full py-1 text-sm font-medium text-red-500 transition hover:text-red-600"
            >
              Clear Cart
            </button>

          </div>
        )}

      </div>
    </>
  );
}