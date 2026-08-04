export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=500&fit=crop"
                alt="Strawberry Cake"
                className="rounded-2xl shadow-md w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop"
                alt="Cupcakes"
                className="rounded-2xl shadow-md w-full h-40 object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1522767131822-6ac69f04f2e0?w=400&h=300&fit=crop"
                alt="Wedding Cake"
                className="rounded-2xl shadow-md w-full h-40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=500&fit=crop"
                alt="Birthday Cake"
                className="rounded-2xl shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-pink-primary/30 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Baking Happiness Since 2010
            </h2>
            <p className="text-lg text-text-light mb-6">
              At MS Cakes, we believe every celebration deserves a perfect cake. Our passionate team of bakers combines traditional techniques with modern designs to create cakes that taste as amazing as they look.
            </p>
            <p className="text-text-light mb-8">
              Using only the finest ingredients, we craft each cake with care, attention, and a whole lot of love. From classic flavors to custom creations, we're here to make your special moments unforgettable.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-cream rounded-xl">
                <span className="text-2xl">🎨</span>
                <div>
                  <h4 className="font-bold text-foreground">Custom Designs</h4>
                  <p className="text-sm text-text-light">Your imagination, our expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-xl">
                <span className="text-2xl">🌿</span>
                <div>
                  <h4 className="font-bold text-foreground">Fresh Ingredients</h4>
                  <p className="text-sm text-text-light">Quality you can taste</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-xl">
                <span className="text-2xl">🚚</span>
                <div>
                  <h4 className="font-bold text-foreground">Safe Delivery</h4>
                  <p className="text-sm text-text-light">Right to your doorstep</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-xl">
                <span className="text-2xl">💝</span>
                <div>
                  <h4 className="font-bold text-foreground">Made with Love</h4>
                  <p className="text-sm text-text-light">Every single cake</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
