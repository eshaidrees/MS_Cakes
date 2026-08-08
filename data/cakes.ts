export interface ProductVariant {
  label: string;
  price: number;
}

export type ProductType = "cake" | "cupcake" | "glass-cake";

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  type: ProductType;
  variants: ProductVariant[];
}

/* =========================================================
   CAKES
========================================================= */

export const cakes: Product[] = [
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    image: "/images/cake1.jpeg",
    description:
      "Rich and moist chocolate cake made with premium chocolate and a smooth creamy frosting.",
    type: "cake",
    variants: [
      { label: "1 Pound", price: 1000 },
      { label: "2 Pounds", price: 1900 },
      { label: "3 Pounds", price: 2800 },
      { label: "4 Pounds", price: 3700 },
    ],
  },

  {
    id: "vanilla-cake",
    name: "Vanilla Cake",
    image: "/images/cake2.jpeg",
    description:
      "Soft vanilla sponge layered with delicious cream for a perfect sweet celebration.",
    type: "cake",
    variants: [
      { label: "1 Pound", price: 900 },
      { label: "2 Pounds", price: 1700 },
      { label: "3 Pounds", price: 2500 },
      { label: "4 Pounds", price: 3300 },
    ],
  },

  {
    id: "red-velvet",
    name: "Red Velvet Cake",
    image: "/images/cake3.jpeg",
    description:
      "Classic red velvet cake with soft layers and creamy cheese frosting.",
    type: "cake",
    variants: [
      { label: "1 Pound", price: 1200 },
      { label: "2 Pounds", price: 2300 },
      { label: "3 Pounds", price: 3400 },
      { label: "4 Pounds", price: 4500 },
    ],
  },

  {
    id: "black-forest",
    name: "Black Forest Cake",
    image: "/images/cake4.jpeg",
    description:
      "A delicious combination of chocolate sponge, cream and cherries.",
    type: "cake",
    variants: [
      { label: "1 Pound", price: 1100 },
      { label: "2 Pounds", price: 2100 },
      { label: "3 Pounds", price: 3100 },
      { label: "4 Pounds", price: 4100 },
    ],
  },

  {
    id: "purple-forest",
    name: "Purple Forest Cake",
    image: "/images/cake5.jpeg",
    description:
      "A delicious combination of chocolate sponge, cream and cherries.",
    type: "cake",
    variants: [
      { label: "1 Pound", price: 1100 },
      { label: "2 Pounds", price: 2100 },
      { label: "3 Pounds", price: 3100 },
      { label: "4 Pounds", price: 4100 },
    ],
  },
];

/* =========================================================
   CUPCAKES
========================================================= */

export const cupcakes: Product[] = [
  {
    id: "chocolate-cupcake",
    name: "Chocolate Cupcake",
    image: "/images/cupcake1.jpeg",
    description:
      "Delicious chocolate cupcakes topped with smooth and creamy frosting.",
    type: "cupcake",
    variants: [
      { label: "6 Cupcakes", price: 800 },
      { label: "12 Cupcakes", price: 1600 },
    ],
  },

  {
    id: "vanilla-cupcake",
    name: "Vanilla Cupcake",
    image: "/images/cupcake2.jpeg",
    description:
      "Soft and fluffy vanilla cupcakes with delicious creamy topping.",
    type: "cupcake",
    variants: [
      { label: "6 Cupcakes", price: 800 },
      { label: "12 Cupcakes", price: 1600 },
    ],
  },

  {
    id: "red-velvet-cupcake",
    name: "Red Velvet Cupcake",
    image: "/images/cupcake3.jpeg",
    description:
      "Soft red velvet cupcakes finished with rich creamy frosting.",
    type: "cupcake",
    variants: [
      { label: "6 Cupcakes", price: 800 },
      { label: "12 Cupcakes", price: 1600 },
    ],
  },

  {
    id: "lotus-cupcake",
    name: "Lotus Cupcake",
    image: "/images/cupcake4.jpeg",
    description:
      "Creamy Lotus cupcakes made with delicious Lotus spread.",
    type: "cupcake",
    variants: [
      { label: "6 Cupcakes", price: 800 },
      { label: "12 Cupcakes", price: 1600 },
    ],
  },
];

/* =========================================================
   GLASS CAKES
========================================================= */

export const glassCakes: Product[] = [
  {
    id: "chocolate-glass",
    name: "Chocolate Glass Cake",
    image: "/images/glass1.jpeg",
    description:
      "Rich chocolate dessert beautifully layered and served in a glass.",
    type: "glass-cake",
    variants: [
      { label: "6 Glass Cakes", price: 1200 },
      { label: "12 Glass Cakes", price: 2400 },
    ],
  },

  {
    id: "lotus-glass",
    name: "Lotus Glass Cake",
    image: "/images/glass2.jpeg",
    description:
      "Creamy Lotus dessert beautifully layered and served in a glass.",
    type: "glass-cake",
    variants: [
      { label: "6 Glass Cakes", price: 1200 },
      { label: "12 Glass Cakes", price: 2400 },
    ],
  },

  {
    id: "red-velvet-glass",
    name: "Red Velvet Glass Cake",
    image: "/images/glass3.jpeg",
    description:
      "Delicious red velvet dessert with creamy layers served in a glass.",
    type: "glass-cake",
    variants: [
      { label: "6 Glass Cakes", price: 1200 },
      { label: "12 Glass Cakes", price: 2400 },
    ],
  },

  {
    id: "oreo-glass",
    name: "Oreo Glass Cake",
    image: "/images/brownies1.jpeg",
    description:
      "Creamy Oreo dessert layered with chocolate and crushed Oreo cookies.",
    type: "glass-cake",
    variants: [
      { label: "6 Glass Cakes", price: 1200 },
      { label: "12 Glass Cakes", price: 2400 },
    ],
  },
];

/* =========================================================
   ALL PRODUCTS
========================================================= */

export const allProducts: Product[] = [
  ...cakes,
  ...cupcakes,
  ...glassCakes,
];