import Link from "next/link";

const categories = [
  {
    name: "Birthday Cakes",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=500&h=500&fit=crop",
    description: "Make birthdays special",
    emoji: "🎂",
  },
  {
    name: "Wedding Cakes",
    image: "https://images.unsplash.com/photo-1522767131822-6ac69f04f2e0?w=500&h=500&fit=crop",
    description: "Elegant wedding creations",
    emoji: "💒",
  },
  {
    name: "Independence Day Cakes",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&h=500&fit=crop",
    description: "Patriotic celebrations",
    emoji: "🎆",
  },
  {
    name: "Custom Cakes",
    image: "https://images.unsplash.com/photo-1557979619-445218f326b9?w=500&h=500&fit=crop",
    description: "Your dream, our creation",
    emoji: "✨",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-pink-primary/30 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Specialties
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Cake Categories
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Explore our wide range of delicious cakes for every occasion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={`/cakes?category=${encodeURIComponent(category.name)}`}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-4xl mb-2 block">{category.emoji}</span>
                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-sm text-white/80">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
