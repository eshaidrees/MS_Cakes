const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Happy Customer",
    text: "The birthday cake was absolutely stunning and tasted even better than it looked! Everyone at the party was asking where I got it from.",
    avatar: "👩",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Wedding Client",
    text: "Our wedding cake was a masterpiece! The team understood our vision perfectly and delivered beyond our expectations. Thank you!",
    avatar: "👨",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Regular Customer",
    text: "I've ordered multiple cakes from MS Cakes and they never disappoint. Consistent quality, beautiful designs, and amazing taste!",
    avatar: "👩‍🦰",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-pink-primary/30 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            What Our Customers Say
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-pink-primary/30">
                <span className="text-4xl">{testimonial.avatar}</span>
                <div>
                  <h4 className="font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-text-light">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
