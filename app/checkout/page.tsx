"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiCheck, FiShoppingBag } from "react-icons/fi";

import { useCart } from "@/context/CartContext";

interface Customer {
  name: string;
  phone: string;
  address: string;
  deliveryDate: string;
  notes: string;
}

export default function CheckoutPageContent() {
  const {
    cart,
    getTotalPrice,
    clearCart,
  } = useCart();

  const [customer, setCustomer] = useState<Customer>({
    name: "",
    phone: "",
    address: "",
    deliveryDate: "",
    notes: "",
  });

  const [isOrdering, setIsOrdering] = useState(false);

  const total = getTotalPrice();

  const updateCustomer = (
    field: keyof Customer,
    value: string
  ) => {
    setCustomer((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (
      !customer.name.trim() ||
      !customer.phone.trim() ||
      !customer.address.trim()
    ) {
      alert("Please fill in your name, phone number and address.");
      return;
    }

    setIsOrdering(true);

    const phoneNumber = "923198531082";

    /*
      IMPORTANT:
      Replace this with your actual Vercel website URL.
    */
    const WEBSITE_URL =
      "https://mscakesandbakes.vercel.app";

    /*
      Create order items
    */
    const orderItems = cart
      .map((item, index) => {
        const imageUrl = item.image.startsWith("http")
          ? item.image
          : `${WEBSITE_URL}${item.image}`;

        return `
${index + 1}. 🍰 ${item.name}
   Option: ${item.variant || "Standard"}
   Quantity: ${item.quantity}
   Price: Rs. ${item.price.toLocaleString()}
   Subtotal: Rs. ${(item.price * item.quantity).toLocaleString()}
   🖼️ Image: ${imageUrl}
`;
      })
      .join("\n━━━━━━━━━━━━━━━━━━━━━━\n");

    /*
      WhatsApp message
    */
    const message = `
🎂 *MS CAKES & BAKES*
━━━━━━━━━━━━━━━━━━━━━━

🛍️ *NEW CAKE ORDER*

👤 *CUSTOMER DETAILS*

Name: ${customer.name}
Phone: ${customer.phone}

📍 *DELIVERY ADDRESS*
${customer.address}

📅 *DELIVERY DATE*
${customer.deliveryDate || "Not selected"}

📝 *ADDITIONAL NOTES*
${customer.notes || "None"}

━━━━━━━━━━━━━━━━━━━━━━

🍰 *ORDER DETAILS*

${orderItems}

━━━━━━━━━━━━━━━━━━━━━━

💰 *TOTAL AMOUNT: Rs. ${total.toLocaleString()}*

━━━━━━━━━━━━━━━━━━━━━━

Please confirm my order.

Thank you! ❤️
`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    /*
      Open WhatsApp
    */
    window.open(whatsappUrl, "_blank");

    /*
      Clear cart after opening WhatsApp
    */
    setTimeout(() => {
      clearCart();
      setIsOrdering(false);
    }, 1000);
  };

  /*
    Empty cart
  */
  if (cart.length === 0) {
    return (
      <section className="min-h-screen bg-[#fffaf7] px-5 py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center text-center">

          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#f8eee9] text-[#b45f43]">
            <FiShoppingBag size={40} />
          </div>

          <h1 className="font-heading text-4xl font-bold text-foreground">
            Your Cart is Empty
          </h1>

          <p className="mt-4 text-text-light">
            Add some delicious cakes before checking out.
          </p>

          <Link
            href="/cakes"
            className="mt-8 rounded-full bg-pink-primary px-7 py-3 font-semibold text-foreground transition hover:bg-accent-brown hover:text-white"
          >
            Browse Our Cakes
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#fffaf7] px-5 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-text-light transition hover:text-accent-brown"
        >
          <FiArrowLeft />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b77b61]">
            Almost There
          </p>

          <h1 className="mt-2 font-heading text-4xl font-bold text-foreground md:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 max-w-2xl text-text-light">
            Enter your delivery details and send your order directly to us
            through WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* =========================================
              CUSTOMER INFORMATION
          ========================================= */}

          <div className="lg:col-span-2">

            <div className="rounded-2xl bg-cream p-6 shadow-sm md:p-8">

              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
                Customer Information
              </h2>

              <div className="space-y-5">

                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    value={customer.name}
                    onChange={(e) =>
                      updateCustomer("name", e.target.value)
                    }
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-pink-primary/30 bg-white px-4 py-3 outline-none transition focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    Phone / WhatsApp Number{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    value={customer.phone}
                    onChange={(e) =>
                      updateCustomer("phone", e.target.value)
                    }
                    placeholder="03XX XXXXXXX"
                    className="w-full rounded-xl border border-pink-primary/30 bg-white px-4 py-3 outline-none transition focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    Delivery Address{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    rows={4}
                    value={customer.address}
                    onChange={(e) =>
                      updateCustomer("address", e.target.value)
                    }
                    placeholder="Enter complete delivery address"
                    className="w-full resize-none rounded-xl border border-pink-primary/30 bg-white px-4 py-3 outline-none transition focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                  />
                </div>

                {/* Delivery Date */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    Preferred Delivery Date
                  </label>

                  <input
                    type="date"
                    value={customer.deliveryDate}
                    onChange={(e) =>
                      updateCustomer(
                        "deliveryDate",
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border border-pink-primary/30 bg-white px-4 py-3 outline-none transition focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    Additional Notes
                  </label>

                  <textarea
                    rows={4}
                    value={customer.notes}
                    onChange={(e) =>
                      updateCustomer("notes", e.target.value)
                    }
                    placeholder="Cake message, special instructions, etc."
                    className="w-full resize-none rounded-xl border border-pink-primary/30 bg-white px-4 py-3 outline-none transition focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                  />
                </div>

              </div>

              {/* WhatsApp info */}
              <div className="mt-6 rounded-xl bg-green-50 p-4">
                <p className="text-sm leading-6 text-green-800">
                  <strong>How ordering works:</strong> After clicking
                  "Place Order via WhatsApp", WhatsApp will open with
                  your customer details, order items, prices, total and
                  cake image links already filled in.
                </p>
              </div>

            </div>
          </div>

          {/* =========================================
              ORDER SUMMARY
          ========================================= */}

          <div className="lg:col-span-1">

            <div className="sticky top-24 rounded-2xl bg-cream p-6 shadow-sm">

              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
                Your Order
              </h2>

              {/* Products */}
              <div className="space-y-4">

                {cart.map((item) => (
                  <div
                    key={item.cartId}
                    className="flex gap-3"
                  >

                    {/* Image */}
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#f8eee9]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Details */}
                    <div className="min-w-0 flex-1">

                      <h3 className="font-semibold text-foreground">
                        {item.name}
                      </h3>

                      {item.variant && (
                        <p className="mt-1 text-xs text-text-light">
                          {item.variant}
                        </p>
                      )}

                      <p className="mt-1 text-sm text-text-light">
                        Qty: {item.quantity}
                      </p>

                      <p className="mt-1 font-semibold text-accent-brown">
                        Rs.{" "}
                        {(
                          item.price * item.quantity
                        ).toLocaleString()}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

              {/* Divider */}
              <div className="my-6 border-t border-pink-primary/30" />

              {/* Total */}
              <div className="mb-6 flex items-center justify-between">
                <span className="font-semibold text-foreground">
                  Total
                </span>

                <span className="font-heading text-2xl font-bold text-accent-brown">
                  Rs. {total.toLocaleString()}
                </span>
              </div>

              {/* Place Order */}
              <button
                type="button"
                onClick={placeOrder}
                disabled={isOrdering}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-4 font-semibold text-white shadow-md transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FiCheck size={20} />

                {isOrdering
                  ? "Opening WhatsApp..."
                  : "Place Order via WhatsApp"}
              </button>

              {/* Back to cart */}
              <Link
                href="/cart"
                className="mt-3 block w-full rounded-xl border border-pink-primary/30 bg-white py-3 text-center font-medium text-foreground transition hover:bg-soft-pink"
              >
                Back to Cart
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}