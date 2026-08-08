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
    image: "/images/hero-cupcakes.png",
    href: "/cakes",
    alt: "Delicious handcrafted cupcakes",
  },
  {
    id: 2,
    image: "/images/hero-cake.png",
    href: "/cakes",
    alt: "Beautiful handcrafted cake",
  },
  {
    id: 3,
    image: "/images/hero-cups.png",
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
    <section className="relative w-full overflow-hidden">
      {/* Slider */}
      <div className="relative w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              relative w-full
              transition-opacity duration-700 ease-in-out
              ${index === current
                ? "block opacity-100"
                : "hidden opacity-0"}
            `}
          >
            {/* Clickable Hero */}
            <Link
              href={slide.href}
              className="block w-full cursor-pointer"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="
          absolute left-4 top-1/2 z-10
          flex h-12 w-12 -translate-y-1/2
          items-center justify-center
          rounded-full
          bg-white/80
          text-gray-800
          shadow-lg
          backdrop-blur-sm
          transition
          hover:bg-white
          hover:scale-105
          active:scale-95
        "
      >
        <FiChevronLeft size={28} />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="
          absolute right-4 top-1/2 z-10
          flex h-12 w-12 -translate-y-1/2
          items-center justify-center
          rounded-full
          bg-white/80
          text-gray-800
          shadow-lg
          backdrop-blur-sm
          transition
          hover:bg-white
          hover:scale-105
          active:scale-95
        "
      >
        <FiChevronRight size={28} />
      </button>

      {/* Dots */}
      <div
        className="
          absolute bottom-5 left-1/2
          z-10 flex -translate-x-1/2
          gap-2
        "
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-2.5 rounded-full transition-all duration-300
              ${
                current === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/60"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}













// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const slides = [
//   {
//     image: "/images/hero1.png",
//     smallText: "MADE WITH LOVE,",
//     title: "BAKED TO\nPERFECTION",
//     description:
//       "Delicious cakes for every celebration.\nMade with the finest ingredients and\na whole lot of love.",
//   },
//   {
//     image: "/images/hero2.png",
//     smallText: "FRESHLY BAKED,",
//     title: "SWEET\nMOMENTS",
//     description:
//       "Beautiful handcrafted desserts\ncreated specially for your\nmemorable occasions.",
//   },
//   {
//     image: "/images/hero3.png",
//     smallText: "PREMIUM DESSERTS,",
//     title: "A TASTE\nOF LUXURY",
//     description:
//       "Elegant cakes made with passion,\nquality ingredients and endless love.",
//   },
// ];

// export default function HeroSection() {

//   const [current, setCurrent] = useState(0);


 



//   const nextSlide = () =>{
//     setCurrent((prev)=> (prev + 1) % slides.length);
//   }


//   const prevSlide = () =>{
//     setCurrent((prev)=> 
//       (prev - 1 + slides.length) % slides.length
//     );
//   }



//   return (

// <section className="relative h-screen overflow-hidden">


// {/* BACKGROUND IMAGE */}

// <div className="absolute inset-0">

// <Image
// src={slides[current].image}
// alt="Luxury Cake"
// fill
// priority
// className="object-cover transition duration-1000"
// />


// {/* Soft Overlay */}

// <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2]/95 via-[#faf7f2]/60 to-transparent"></div>


// </div>




// {/* HERO CONTENT */}

// <div className="relative z-10 h-full flex items-center">


// <div className="container mx-auto px-10 lg:px-24">


// <div className="max-w-xl">


// <p className="tracking-[8px] text-[#5b3820] text-sm mb-8">
// {slides[current].smallText}
// </p>



// <h1 className="whitespace-pre-line text-6xl md:text-7xl lg:text-8xl font-serif text-[#3b2415] leading-[0.95] mb-8">
// {slides[current].title}
// </h1>



// <div className="flex items-center gap-5 mb-8">

// <div className="w-28 h-[1px] bg-[#c9963e]"></div>

// <span className="text-[#c9963e] text-2xl">
// ♥
// </span>

// <div className="w-28 h-[1px] bg-[#c9963e]"></div>


// </div>




// <p className="whitespace-pre-line text-lg leading-9 text-[#4b392d] mb-10">
// {slides[current].description}
// </p>



// <Link
// href="/cakes"
// className="
// inline-block
// bg-[#c9963e]
// text-white
// px-12
// py-4
// tracking-widest
// text-sm
// hover:bg-[#ad7d2b]
// transition
// "
// >
// ORDER NOW
// </Link>



// </div>


// </div>

// </div>





// {/* LEFT ARROW */}

// <button
// onClick={prevSlide}
// className="
// absolute
// left-8
// top-1/2
// z-20
// text-white
// text-5xl
// "
// >
// ‹
// </button>





// {/* RIGHT ARROW */}

// <button
// onClick={nextSlide}
// className="
// absolute
// right-8
// top-1/2
// z-20
// text-white
// text-5xl
// "
// >
// ›
// </button>






// {/* DOTS */}

// <div
// className="
// absolute
// bottom-10
// left-1/2
// -translate-x-1/2
// flex
// gap-3
// z-20
// "
// >

// {
// slides.map((_,index)=>(

// <button
// key={index}
// onClick={()=>setCurrent(index)}
// className={`
// rounded-full
// h-3
// transition-all
// ${
// current===index
// ?
// "w-10 bg-white"
// :
// "w-3 bg-white/60"
// }
// `}
// ></button>


// ))
// }


// </div>




// </section>

//   );
// }


// // "use client";

// // import Link from "next/link";

// // export default function HeroSection() {
// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
// //       {/* Background Decorations */}
// //       <div className="absolute top-20 left-10 w-64 h-64 bg-pink-primary/20 rounded-full blur-3xl" />
// //       <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-primary/10 rounded-full blur-3xl" />

// //       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //           {/* Text Content */}
// //           <div className="text-center lg:text-left">
// //             <span className="inline-block bg-pink-primary/30 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
// //               ✨ Handcrafted with Love
// //             </span>
// //             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 font-heading">
// //               Delicious Cakes for{" "}
// //               <span className="text-accent-brown">
// //                 Every Occasion
// //               </span>
// //             </h1>
// //             <p className="text-lg md:text-xl text-text-light mb-8 max-w-lg mx-auto lg:mx-0">
// //               From birthdays to weddings, we create beautiful and mouth-watering cakes that make your special moments even more memorable.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
// //               <Link
// //                 href="/cakes"
// //                 className="bg-pink-primary hover:bg-accent-brown text-foreground hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
// //               >
// //                 Explore Our Cakes
// //               </Link>
// //               <Link
// //                 href="/contact"
// //                 className="bg-white hover:bg-cream text-foreground font-semibold px-8 py-4 rounded-full border-2 border-pink-primary transition-all duration-300 shadow-sm hover:shadow-md"
// //               >
// //                 Order Custom Cake
// //               </Link>
// //             </div>

// //             {/* Stats */}
// //             <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-pink-primary/30">
// //               <div>
// //                 <p className="text-3xl font-bold text-accent-brown font-heading">500+</p>
// //                 <p className="text-sm text-text-light">Happy Customers</p>
// //               </div>
// //               <div>
// //                 <p className="text-3xl font-bold text-accent-brown font-heading">50+</p>
// //                 <p className="text-sm text-text-light">Cake Varieties</p>
// //               </div>
// //               <div>
// //                 <p className="text-3xl font-bold text-accent-brown font-heading">5⭐</p>
// //                 <p className="text-sm text-text-light">Average Rating</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Hero Image */}
// //           <div className="relative">
// //             <div className="relative">
// //               <img
// //                 src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop"
// //                 alt="Delicious Chocolate Cake"
// //                 className="relative rounded-3xl shadow-xl w-full aspect-square object-cover"
// //               />
// //             </div>

// //             {/* Floating Badge */}
// //             <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4">
// //               <div className="flex items-center gap-3">
// //                 <span className="text-3xl">🎂</span>
// //                 <div>
// //                   <p className="font-bold text-foreground">Fresh Daily</p>
// //                   <p className="text-sm text-text-light">Baked with love</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Scroll Indicator */}
// //       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// //         <svg className="w-6 h-6 text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
// //         </svg>
// //       </div>
// //     </section>
// //   );
// // }
