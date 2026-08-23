"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const slides = [
  {
    id: 1,
    image: "/images/hero2.png",
    mobileImage: "/images/hero2-mobile.jpeg",
    href: "/cakes",
    alt: "Beautiful handcrafted cake",
  },
  {
    id: 2,
    image: "/images/hero1.png",
    mobileImage: "/images/hero1-mobile.jpeg",
    href: "/cakes",
    alt: "Delicious handcrafted cupcakes",
  },
  {
    id: 3,
    image: "/images/hero3.png",
    mobileImage: "/images/hero3-mobile.jpeg",
    href: "/cakes",
    alt: "Delicious dessert cups",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#faf7f2]">
      {/* ================= SLIDER ================= */}

      <div className="relative w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              relative w-full
              ${index === current ? "block" : "hidden"}
            `}
          >
            {/* ================= CLICKABLE HERO ================= */}

            <Link
              href={slide.href}
              className="block w-full cursor-pointer"
            >
              <div
                className="
                  relative
                  w-full
                  aspect-[3/5]
                  sm:aspect-[16/9]
                "
              >
                {/* ================= MOBILE IMAGE ================= */}

                <Image
                  src={slide.mobileImage}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 639px) 100vw, 0px"
                  className="
                    object-cover
                    sm:hidden
                  "
                />

                {/* ================= DESKTOP IMAGE ================= */}

                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 640px) 100vw, 0px"
                  className="
                    hidden
                    object-cover
                    sm:block
                  "
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* ================= PREVIOUS BUTTON ================= */}

      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="
          absolute
          left-3
          top-1/2
          z-10
          flex
          h-9
          w-9
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/80
          text-gray-800
          shadow-lg
          backdrop-blur-sm
          transition
          hover:bg-white
          hover:scale-105
          active:scale-95
          sm:left-4
          sm:h-12
          sm:w-12
        "
      >
        <FiChevronLeft
          size={22}
          className="sm:h-7 sm:w-7"
        />
      </button>

      {/* ================= NEXT BUTTON ================= */}

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="
          absolute
          right-3
          top-1/2
          z-10
          flex
          h-9
          w-9
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/80
          text-gray-800
          shadow-lg
          backdrop-blur-sm
          transition
          hover:bg-white
          hover:scale-105
          active:scale-95
          sm:right-4
          sm:h-12
          sm:w-12
        "
      >
        <FiChevronRight
          size={22}
          className="sm:h-7 sm:w-7"
        />
      </button>

      {/* ================= DOTS ================= */}

      <div
        className="
          absolute
          bottom-4
          left-1/2
          z-10
          flex
          -translate-x-1/2
          items-center
          gap-2
          sm:bottom-5
        "
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="
              flex
              h-5
              items-center
            "
          >
            <span
              className={`
                block
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  current === index
                    ? "w-8 bg-white"
                    : "w-2 bg-white/60 hover:bg-white/80"
                }
              `}
            />
          </button>
        ))}
      </div>
    </section>
  );
}