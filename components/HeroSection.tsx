"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#faf7f2]">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Link
            key={slide.id}
            href={slide.href}
            className="relative min-w-full"
          >
            <div className="relative aspect-[3/5] w-full sm:aspect-[16/9]">
              {/* Mobile */}
              <Image
                src={slide.mobileImage}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover sm:hidden"
              />

              {/* Desktop */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="hidden object-cover sm:block"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Previous */}
      <button
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-white active:scale-95 sm:left-4 sm:h-12 sm:w-12"
      >
        <FiChevronLeft size={22} />
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-white active:scale-95 sm:right-4 sm:h-12 sm:w-12"
      >
        <FiChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-white"
                : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
    }
