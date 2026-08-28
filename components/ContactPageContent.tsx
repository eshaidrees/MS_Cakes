"use client";

import { useState } from "react";

export default function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-pink-primary/30 px-4 py-2 text-sm font-semibold text-foreground">
            Get in Touch
          </span>

          <h1 className="mb-4 font-heading text-4xl font-bold text-foreground md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-text-light">
            Have a question or want to order a custom cake?
            We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Contact Form */}
          <div className="rounded-2xl bg-cream p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Send Us a Message
            </h2>

            {isSubmitted && (
              <div className="mb-6 rounded-lg border border-green-400 bg-green-100 px-4 py-3 text-green-700">
                ✓ Message sent successfully! We&apos;ll get back
                to you soon.
              </div>
            )}

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="7c9d0889-ffed-40dd-9931-34e8e24b68ed"
              />

              {/* Subject */}
              <input
                type="hidden"
                name="subject"
                value="New Cake Order - MS Cakes & Bakes"
              />

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Your Name *
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg border border-pink-primary/30 bg-white px-4 py-3 outline-none transition-all focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-pink-primary/30 bg-white px-4 py-3 outline-none transition-all focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full rounded-lg border border-pink-primary/30 bg-white px-4 py-3 outline-none transition-all focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                  placeholder="03XX XXXXXXX"
                />
              </div>

              {/* Cake Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Cake Type
                </label>

                <select
                  name="cakeType"
                  className="w-full rounded-lg border border-pink-primary/30 bg-white px-4 py-3 outline-none transition-all focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                >
                  <option value="">
                    Select a category
                  </option>

                  <option value="Birthday Cake">
                    Birthday Cake
                  </option>

                  <option value="Wedding Cake">
                    Wedding Cake
                  </option>

                  <option value="Independence Day Cake">
                    Independence Day Cake
                  </option>

                  <option value="Custom Cake">
                    Custom Cake
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Your Message
                </label>

                <textarea
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-pink-primary/30 bg-white px-4 py-3 outline-none transition-all focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                  placeholder="Tell us about your dream cake..."
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-pink-primary py-4 font-semibold text-foreground shadow-md transition-all duration-300 hover:bg-accent-brown hover:text-white hover:shadow-lg"
              >
                Send Message
              </button>
            </form>

            {/* WhatsApp */}
            <div className="mt-6">
              <a
                href="https://wa.me/923073588816"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-semibold text-white transition-all duration-200 hover:bg-green-700"
              >
                <span className="text-xl">💬</span>
                Or Order Directly via WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">

            <div className="rounded-2xl bg-cream p-8 shadow-sm">

              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
                Contact Information
              </h2>

              <div className="space-y-6">

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📞</span>

                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Phone Number
                    </h3>

                    <p className="text-text-light">
                      03073588816
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✉️</span>

                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Email
                    </h3>

                    <p className="text-text-light">
                      mscakesandbakes20@gmail.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Follow Us */}
            <div className="rounded-2xl bg-cream p-8 shadow-sm">

              <h3 className="mb-4 font-heading text-xl font-bold text-foreground">
                Follow Us
              </h3>

              <div className="flex gap-4">

                 {/* Social Media */}
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MS Cakes on Instagram"
                className="w-10 h-10 rounded-full bg-pink-primary/30 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MS Cakes on TikTok"
                className="w-10 h-10 rounded-full bg-pink-primary/30 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.5 8.2a5.3 5.3 0 0 1-3.2-1.1v7.2a5.7 5.7 0 1 1-4.9-5.6v2.9a2.8 2.8 0 1 0 2 2.7V2h2.9c.2 1.6 1.5 2.9 3.2 3.2v3z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MS Cakes on Facebook"
                className="w-10 h-10 rounded-full bg-pink-primary/30 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3.5l.5-4H13V9c0-.7.3-1 1-1z" />
                </svg>
              </a>
            </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}