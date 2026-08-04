export interface Cake {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const cakes: Cake[] = [
  // Birthday Cakes
  {
    id: 1,
    name: "Chocolate Dream Cake",
    price: 45,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop",
    category: "Birthday Cakes",
    description: "Rich chocolate layers with creamy chocolate ganache",
  },
  {
    id: 2,
    name: "Vanilla Rainbow Cake",
    price: 50,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&h=500&fit=crop",
    category: "Birthday Cakes",
    description: "Colorful vanilla sponge with buttercream frosting",
  },
  {
    id: 3,
    name: "Strawberry Bliss Cake",
    price: 48,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=500&fit=crop",
    category: "Birthday Cakes",
    description: "Fresh strawberries with light vanilla cream",
  },
  {
    id: 4,
    name: "Funfetti Party Cake",
    price: 42,
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=500&h=500&fit=crop",
    category: "Birthday Cakes",
    description: "Classic birthday cake with colorful sprinkles",
  },
  // Wedding Cakes
  {
    id: 5,
    name: "Elegant White Wedding Cake",
    price: 150,
    image: "https://images.unsplash.com/photo-1522767131822-6ac69f04f2e0?w=500&h=500&fit=crop",
    category: "Wedding Cakes",
    description: "Three-tier white cake with delicate sugar flowers",
  },
  {
    id: 6,
    name: "Rustic Naked Cake",
    price: 120,
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&h=500&fit=crop",
    category: "Wedding Cakes",
    description: "Beautiful semi-naked cake with fresh berries",
  },
  {
    id: 7,
    name: "Royal Gold Tier Cake",
    price: 180,
    image: "https://images.unsplash.com/photo-1562777718-114368da8782?w=500&h=500&fit=crop",
    category: "Wedding Cakes",
    description: "Luxurious four-tier cake with gold accents",
  },
  {
    id: 8,
    name: "Floral Garden Wedding Cake",
    price: 160,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&h=500&fit=crop",
    category: "Wedding Cakes",
    description: "Romantic cake adorned with handcrafted sugar flowers",
  },
  // Independence Day Cakes
  {
    id: 9,
    name: "Patriotic Flag Cake",
    price: 55,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&h=500&fit=crop",
    category: "Independence Day Cakes",
    description: "Red, white, and blue layered celebration cake",
  },
  {
    id: 10,
    name: "Freedom Star Cake",
    price: 52,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&h=500&fit=crop",
    category: "Independence Day Cakes",
    description: "Star-shaped cake with festive decorations",
  },
  {
    id: 11,
    name: "Liberty Bell Cake",
    price: 60,
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500&h=500&fit=crop",
    category: "Independence Day Cakes",
    description: "Bell-shaped cake with patriotic theme",
  },
  {
    id: 12,
    name: "Celebration Cupcake Set",
    price: 35,
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500&h=500&fit=crop",
    category: "Independence Day Cakes",
    description: "Set of 12 themed cupcakes",
  },
  // Custom Cakes
  {
    id: 13,
    name: "Photo Custom Cake",
    price: 65,
    image: "https://images.unsplash.com/photo-1557979619-445218f326b9?w=500&h=500&fit=crop",
    category: "Custom Cakes",
    description: "Personalized cake with your photo printed on top",
  },
  {
    id: 14,
    name: "3D Character Cake",
    price: 85,
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d686f?w=500&h=500&fit=crop",
    category: "Custom Cakes",
    description: "Custom sculpted character cake",
  },
  {
    id: 15,
    name: "Number Shape Cake",
    price: 70,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&h=500&fit=crop",
    category: "Custom Cakes",
    description: "Number-shaped cake perfect for milestones",
  },
  {
    id: 16,
    name: "Heart Shaped Love Cake",
    price: 58,
    image: "https://images.unsplash.com/photo-1591382696684-38c4273ae0c7?w=500&h=500&fit=crop",
    category: "Custom Cakes",
    description: "Romantic heart-shaped cake for special moments",
  },
];

export const categories = [
  "All",
  "Birthday Cakes",
  "Wedding Cakes",
  "Independence Day Cakes",
  "Custom Cakes",
];
