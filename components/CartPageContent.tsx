"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

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
      message += `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n💰 *Total: $${getTotalPrice().toFixed(2)}*\n\n`;
    message += "Please confirm my order. Thank you!";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  if (cart.length === 0) {
    return (
      <section className="py-20 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center py-20">
            <span className="text-8xl mb-6 block">🛒</span>
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">
              Your Cart is Empty
            </h2>
            <p className="text-lg text-text-light mb-8">
              Looks like you haven't added any delicious cakes yet!
            </p>
            <Link
              href="/cakes"
              className="inline-block bg-pink-primary hover:bg-accent-brown text-foreground hover:text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Browse Our Cakes
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 font-heading">
            Your Cart
          </h1>
          <p className="text-text-light">
            {cart.length} item{cart.length !== 1 ? "s" : ""} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-cream rounded-2xl p-6 shadow-sm"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="inline-block bg-pink-primary/30 text-foreground px-3 py-1 rounded-full text-xs font-semibold mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-bold text-foreground font-heading">
                          {item.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600 transition-colors p-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                    <p className="text-xl font-bold text-accent-brown mb-4 font-heading">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-white rounded-full p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-pink-primary flex items-center justify-center hover:bg-soft-pink transition-colors font-bold text-foreground"
                        >
                          −
                        </button>
                        <span className="w-10 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-pink-primary flex items-center justify-center hover:bg-soft-pink transition-colors font-bold text-foreground"
                        >
                          +
                        </button>
                      </div>
                      <div className="ml-auto text-right">
                        <p className="text-sm text-text-light">Subtotal</p>
                        <p className="text-lg font-bold text-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="w-full bg-soft-pink hover:bg-pink-primary text-foreground font-medium py-3 rounded-xl transition-all duration-200"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-cream rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold text-foreground mb-6 font-heading">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-pink-primary/30">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-text-light">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-semibold text-foreground">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold text-foreground">Total</span>
                <span className="text-3xl font-bold text-accent-brown font-heading">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 mb-3 shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Order via WhatsApp
              </button>

              <Link
                href="/cakes"
                className="block w-full text-center bg-white hover:bg-soft-pink text-foreground font-medium py-3 rounded-xl transition-all duration-200 border border-pink-primary/30"
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
