"use client";

import { useState } from "react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop", title: "Chocolate Dream", category: "Birthday" },
  { src: "https://images.unsplash.com/photo-1522767131822-6ac69f04f2e0?w=600&h=600&fit=crop", title: "Elegant Wedding", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop", title: "Strawberry Bliss", category: "Birthday" },
  { src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=600&fit=crop", title: "Cupcake Collection", category: "Custom" },
  { src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=600&fit=crop", title: "Rustic Beauty", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1562777718-114368da8782?w=600&h=600&fit=crop", title: "Royal Gold", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&h=600&fit=crop", title: "Funfetti Party", category: "Birthday" },
  { src: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&h=600&fit=crop", title: "Cupcake Delight", category: "Custom" },
  { src: "https://images.unsplash.com/photo-1542826438-bd32f43d686f?w=600&h=600&fit=crop", title: "Character Cake", category: "Custom" },
  { src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=600&fit=crop", title: "Number Cake", category: "Custom" },
  { src: "https://images.unsplash.com/photo-1591382696684-38c4273ae0c7?w=600&h=600&fit=crop", title: "Heart Love Cake", category: "Custom" },
  { src: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=600&fit=crop", title: "Star Celebration", category: "Independence Day" },
];

const categories = ["All", "Birthday", "Wedding", "Custom", "Independence Day"];

export default function GalleryPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section className="py-12 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-pink-primary/30 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Gallery
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Our Cake Gallery
          </h1>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Browse through our collection of beautiful cake creations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-pink-primary text-white shadow-md"
                  : "bg-white text-foreground hover:bg-soft-pink border border-pink-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-base font-semibold">{image.title}</h3>
                <p className="text-sm text-white/80">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">📸</span>
            <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
              No images found
            </h3>
            <p className="text-text-light">
              Try selecting a different category
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-pink-primary transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Gallery Image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
