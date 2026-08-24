export interface ProductVariant {
  label: string;
  price: number;
}

export type ProductType = "cake" | "cupcake" | "dessert-cup" | "pastries";

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  type: ProductType;
  variants: ProductVariant[];
}

/* =========================================================
   CAKES
========================================================= */

export const cakes: Product[] = [

  // birthday
  {
    id: "chocolate-cake",
    name: "Chocolate Bliss Cake",
    image: "/images/cake1.jpeg",
    description:
      "A rich chocolate sponge layered with smooth chocolate cream, finished with elegant frosting swirls, chocolate flakes, and golden sugar pearls. Perfect for birthdays and special celebrations.",
    type: "cake",
    category: "birthday",
    variants: [
      { label: "1 Pound", price: 1000 },
      { label: "2 Pounds", price: 2000 },
      { label: "3 Pounds", price: 3000 },
    ],
  },

  {
    id: "vanilla-ribbon-cake",
    name: "Vanilla Ribbon Cake",
    image: "/images/cake2.jpeg",
    description:
      "A soft vanilla sponge layered with creamy vanilla frosting and decorated with beautiful piping, pearl sprinkles, and elegant red ribbon bows for a timeless celebration cake.",
    type: "cake",   
    category: "birthday",
    variants: [
      { label: "1 Pound", price: 900 },
      { label: "2 Pounds", price: 1800 },
      { label: "3 Pounds", price: 2700 },
    ],
  },

  {
    id: "chocolate",
    name: "Chocolate Drip Cake",
    image: "/images/cake3.jpeg",
    description:
      "A moist chocolate sponge layered with silky chocolate cream, topped with a glossy chocolate ganache drip, chocolate swirls, and premium chocolate pieces for a luxurious finish.",
    type: "cake",
    category: "birthday",
    variants: [
      { label: "1 Pound", price: 1200 },
      { label: "2 Pounds", price: 2400 },
      { label: "3 Pounds", price: 3600 },
    ],
  },

  {
    id: "purple-forest",
    name: "Purple Blossom Vanilla Cake",
    image: "/images/cake4.jpeg",
    description:
      "A classic vanilla cake dressed in graceful lavender frosting, featuring handcrafted buttercream rosettes and charming purple sugar pearls. A timeless choice for birthdays, combining a delicious vanilla flavor with a beautiful floral-inspired design.",
    type: "cake",
    category: "birthday",
    variants: [
      { label: "1 Pound", price: 900 },
      { label: "2 Pounds", price: 1800 },
      { label: "3 Pounds", price: 2700 },
    ],
  },

  {
    id: "red-velvet",
    name: "Classic Red Velvet Cake",
    image: "/images/cake5.jpeg",
    description:
      "A delicious red velvet cake beautifully finished with creamy white frosting and delicate red heart accents, perfect for celebrating love and anniversaries.",
    type: "cake",
    category: "wedding",
    variants: [
      { label: "1 Pound", price: 1200 },
      { label: "2 Pounds", price: 2400 },
      { label: "3 Pounds", price: 3600 },
    ],
  },
  {
    id: "anniversary-cake",
    name: "Forever Love Red Velvet Cake",
    image: "/images/cake6.jpeg",
    description:
      "A decadent red velvet cake in a classic heart shape, finished with luxurious red frosting for a truly special celebration.",
    type: "cake",
    category: "wedding",
    variants: [
      { label: "1 Pound", price: 1200 },
      { label: "2 Pounds", price: 2400 },
      { label: "3 Pounds", price: 3600 },
    ],
  },
  {
    id: "pineapple-cake",
    name: "Classic Pineapple Cake",
    image: "/images/cake7.jpeg",
    description:
      "A light and fluffy vanilla sponge layered with smooth, creamy frosting and delicious pineapple pieces. A refreshing, fruity favorite with the perfect balance of sweetness and tanginess.",
    type: "cake",
    category: "birthday",
    variants: [
      { label: "1 Pound", price: 1200 },
      { label: "2 Pounds", price: 2400 },
      { label: "3 Pounds", price: 3600 },
    ],
  },
    {
    id: "mango-cake",
    name: "Fresh Mango Delight Cake",
    image: "/images/cake8.jpeg",
    description:
      "A soft, moist sponge layered with creamy frosting and luscious mango filling. Topped with a rich mango glaze for a deliciously tropical and refreshing taste.",
    type: "cake",
    category: "birthday",
    variants: [
      { label: "1 Pound", price: 1200 },
      { label: "2 Pounds", price: 2400 },
      { label: "3 Pounds", price: 3600 },
    ],
  },
  {
    id: "chocolate-deca-cake",
    name: "Decadent Chocolate Cake",
    image: "/images/cake9.jpeg",
    description:
      "Rich, soft chocolate sponge covered with smooth chocolate frosting and finished with a luxurious chocolate topping. A heavenly choice for every chocolate lover.",
    type: "cake",
    category: "birthday",
    variants: [
      { label: "1 Pound", price: 1000 },
      { label: "2 Pounds", price: 2000 },
      { label: "3 Pounds", price: 3000 },
    ],
  },
   {
    id: "full-chocolate-cake",
    name: "Full Chocolate Ganache Cake",
    image: "/images/cake10.jpeg",
    description:
      "A rich and indulgent chocolate cake made with soft, moist chocolate sponge, generously coated in silky-smooth chocolate ganache. Finished with elegant chocolate decorations for a luxurious, melt-in-your-mouth experience—perfect for birthdays and special celebrations.",
    type: "cake",
    category: "birthday",
    variants: [
      { label: "1 Pound", price: 1500 },
      { label: "2 Pounds", price: 3000 },
      { label: "3 Pounds", price: 4500 },
    ],
  },
  {
    id: "vanila",
    name: "Love Bow Vanilla Cake ",
    image: "/images/cake11.jpeg",
    description:
      "A light and tender vanilla sponge layered with creamy vanilla frosting, decorated with charming red bows and sweet heart details. Perfect for birthdays, anniversaries, and celebrations filled with love.",
    type: "cake",
    category: "birthday",
    variants: [
      { label: "1 Pound", price: 1000 },
      { label: "2 Pounds", price: 2000 },
      { label: "3 Pounds", price: 3000 },
    ],
  },
  {
    id: "vanila=anni",
    name: "Red Rose Vanilla Cake ",
    image: "/images/cake12.jpeg",
    description:
      "A soft and fluffy vanilla sponge covered with smooth vanilla frosting and beautifully decorated with delicate red buttercream roses. A romantic and elegant choice for anniversaries and special celebrations.",
    type: "cake",
    category: "wedding",
    variants: [
      { label: "1 Pound", price: 1000 },
      { label: "2 Pounds", price: 2000 },
      { label: "3 Pounds", price: 3000 },
    ],
  },
  {
    id: "pink-vanila",
    name: "Pink Butterfly Vanilla Cake ",
    image: "/images/cake13.jpeg",
    description:
      "A deliciously soft vanilla sponge finished with creamy vanilla frosting and decorated with delicate pink butterflies and golden accents. A graceful and dreamy cake for birthdays and memorable occasions.",
    type: "cake",
    category: "birthday",
    variants: [
      { label: "1 Pound", price: 1000 },
      { label: "2 Pounds", price: 2000 },
      { label: "3 Pounds", price: 3000 },
    ],
  },
  {
    id: "full-chocolate-ganache",
    name: "Premium Full Chocolate Ganache Cake",
    image: "/images/cake14.jpeg",
    description:
      "A rich and moist chocolate sponge generously coated with smooth, luxurious chocolate ganache. Beautifully finished with chocolate pieces, chocolate truffles, and creamy swirls for the ultimate indulgent chocolate experience. Perfect for birthdays and special celebrations.",
    type: "cake",
    category: "birthday",
    variants: [
      { label: "2 Pounds", price: 2900 },
      { label: "3 Pounds", price: 3900 },
    ],
  },

  // Wedding
  {
    id: "pink-vanila-heart",
    name: "Pink Rose Heart Vanilla Cake ",
    image: "/images/cake15.jpeg",
    description:
      "A soft and fluffy vanilla sponge covered with smooth, creamy vanilla frosting and decorated with beautiful pink roses and delicate heart details. A charming choice for birthdays, anniversaries, and special moments.",
    type: "cake",
    category: "wedding",
    variants: [
      { label: "1 Pound", price: 1000 },
      { label: "2 Pounds", price: 2000 },
      { label: "3 Pounds", price: 3000 },
    ],
  },
  {
    id: "pink-rose-vanila",
    name: "Elegant Pink Rose Vanilla Cake ",
    image: "/images/cake16.jpeg",
    description:
      "A delicious vanilla sponge finished with creamy vanilla frosting, soft pink buttercream roses, and delicate pearl accents. Its elegant design makes it perfect for birthdays, celebrations, and memorable occasions.",
    type: "cake",
    category: "wedding",
    variants: [
      { label: "2 Pounds", price: 1600 },
      { label: "3 Pounds", price: 3200 },
    ],
  },
  {
    id: "wedding-cake-one",
    name: "Royal Red Rose Two-Tier Cake",
    image: "/images/cake17.jpeg",
    description:
      "A luxurious two-tier cake finished with smooth white frosting, elegant red roses, delicate baby's breath flowers, and rich burgundy ribbon accents. Perfect for weddings, anniversaries, and grand celebrations.",
    type: "cake",
    category: "wedding",
    variants: [
      { label: "3.5 Pound", price: 3900 },     
    ],
  },
  {
    id: "wedding-cake-two",
    name: "Red Rose Butterfly Two-Tier Cake",
    image: "/images/cake18.jpeg",
    description:
      "An elegant two-tier cake decorated with smooth white frosting, deep red roses, delicate greenery, and beautiful silver butterflies. A romantic and graceful choice for weddings and special occasions.",
    type: "cake",
    category: "wedding",
    variants: [
      { label: "5 Pounds", price: 5900 },     
    ],
  },

  // Independence
  {
    id: "flag-cake",
    name: "Pakistan Flag Azadi Cake",
    image: "/images/cake19.jpeg",
    description:
      "A beautifully designed cake inspired by the Pakistani flag, featuring vibrant green and white frosting with the iconic crescent and star. A perfect choice for 14th August, Pakistan Day, Independence Day celebrations, school events, and patriotic occasions.",
    type: "cake",
    category: "independence",
    variants: [
      { label: "5 Pound", price: 4900 },     
    ],
  },
  {
    id: "independence-cake",
    name: "Independence Day Butterfly Cake",
    image: "/images/cake20.jpeg",
    description:
      "Soft, elegant green cake decorated with beautiful butterflies and white accents.",
    type: "cake",
    category: "independence",
    variants: [
      { label: "2 Pound", price: 2000 },     
      { label: "3 Pound", price: 3000 },     
    ],
  },
  {
    id: "azadi-cake",
    name: "Azadi Cake",
    image: "/images/cake21.jpeg",
    description:
      "Festive green and white cake featuring the iconic crescent and star, perfect for Independence Day celebrations.",
    type: "cake",
    category: "independence",
    variants: [
      { label: "1 Pound", price: 1000 },     
      { label: "2 Pound", price: 2000 },     
      { label: "3 Pound", price: 3000 },     
    ],
  },
  {
    id: "pak-flag-cake",
    name: "Pakistan Flag Cake",
    image: "/images/cake22.jpeg",
    description:
      "A stunning green and white cake decorated with the iconic crescent and star, perfect for celebrating Pakistan’s Independence Day.",
    type: "cake",
    category: "independence",
    variants: [
      { label: "1 Pound", price: 1000 },     
      { label: "2 Pound", price: 2000 },     
      { label: "3 Pound", price: 3000 },     
    ],
  },

   // Customise
{
  id: "jungle-safari-cake",
  name: "🦁 Jungle Safari Adventure Cake",
  image: "/images/custo1.jpeg",
  description:
    "A fun and colorful jungle-themed cake featuring adorable cartoon animals, lush greenery, and playful details. Perfect for little explorers and unforgettable birthday celebrations.",
  type: "cake",
  category: "customize",
  variants: [],
},

{
  id: "fairy-birthday-cake",
  name: "🧚‍♀️ Enchanted Fairy Garden Cake",
  image: "/images/custo2.jpeg",
  description:
    "A dreamy two-tier cake decorated with a sweet fairy, delicate butterflies, pink accents, and golden details. A magical choice for a beautiful little girl’s birthday.",
  type: "cake",
  category: "customize",
  variants: [],
},

{
  id: "romantic-memories-cake",
  name: "❤️ Romantic Memories Birthday Cake",
  image: "/images/custo3.jpeg",
  description:
    "A personalized celebration cake decorated with romantic cartoon memories, beautiful roses, and heartfelt messages. Perfect for celebrating someone special and creating a memorable birthday.",
  type: "cake",
  category: "customize",
  variants: [],
},
];


  // Cartoons Theme
export const cartoonThemeCake: Product[] = [
 {
    id: "barbie-cartoon-cake",
    name: "Barbie Dream Birthday Cake",
    image: "/images/cart1.png",
    description:
      "A gorgeous Barbie-themed celebration cake decorated in beautiful shades of pink with Barbie details, sparkling stars, butterflies, golden accents, and a glamorous Barbie topper. Perfect for a magical birthday celebration.",
    type: "cake",
    category: "cartoontheme",
    variants: [
      { label: "2 Pounds", price: 2500 },
      { label: "3 Pounds", price: 3500 },
      { label: "4 Pounds", price: 4500 },
    ],
  },

  {
    id: "tom-and-jerry-cake",
    name: "Tom & Jerry Cartoon Cake",
    image: "/images/cart2.png",
    description:
      "A fun Tom & Jerry themed birthday cake featuring playful cartoon character decorations, a smooth white cream finish, and charming black details. A perfect choice for fans of the classic cartoon duo.",
    type: "cake",
    category: "cartoontheme",
    variants: [
      { label: "2 Pounds", price: 2400 },
      { label: "3 Pounds", price: 3400 },
      { label: "4 Pounds", price: 4400 },
    ],
  },

  {
    id: "princess-cartoon-cake",
    name: "Princess Castle Birthday Cake",
    image: "/images/cart3.png",
    description:
      "A beautiful princess-themed birthday cake decorated with a magical castle, elegant red roses, butterflies, balloons, and a charming princess design. Perfect for a fairytale-inspired celebration.",
    type: "cake",
    category: "cartoontheme",
    variants: [
      { label: "2 Pounds", price: 2600 },
      { label: "3 Pounds", price: 3700 },
      { label: "4 Pounds", price: 4800 },
    ],
  },

  {
    id: "doraemon-cartoon-cake",
    name: "Doraemon Adventure Cake",
    image: "/images/cart4.png",
    description:
      "A bright and colorful Doraemon birthday cake featuring Doraemon and friends, playful cartoon toppers, and vibrant blue cream decoration. A fun and exciting choice for every Doraemon fan.",
    type: "cake",
    category: "cartoontheme",
    variants: [
      { label: "2 Pounds", price: 2400 },
      { label: "3 Pounds", price: 3400 },
      { label: "4 Pounds", price: 4400 },
    ],
  },

  {
    id: "fairy-butterfly-cartoon-cake",
    name: "Enchanted Fairy Butterfly Cake",
    image: "/images/cart5.png",
    description:
      "A dreamy fairy-themed birthday cake decorated with beautiful purple butterflies, magical mushrooms, a sweet fairy character, and elegant lavender details. A perfect choice for a magical celebration.",
    type: "cake",
    category: "cartoontheme",
    variants: [
      { label: "2 Pounds", price: 2700 },
      { label: "3 Pounds", price: 3800 },
      { label: "4 Pounds", price: 4900 },
    ],
  },

  {
    id: "masha-and-bear-cake",
    name: "Masha & Bear Birthday Cake",
    image: "/images/cart6.png",
    description:
      "A playful Masha & the Bear themed birthday cake featuring colorful character decorations, a large Masha design, butterflies, flowers, a cute number topper, and a cheerful pink finish.",
    type: "cake",
    category: "cartoontheme",
    variants: [
      { label: "2 Pounds", price: 2400 },
      { label: "3 Pounds", price: 3400 },
      { label: "4 Pounds", price: 4400 },
    ],
  },
]

/* =========================================================
   CUPCAKES
========================================================= */

export const cupcakes: Product[] = [
  {
    id: "chocolate-cupcake",
    name: "Chocolate Fudge Cupcake",
    image: "/images/cupcake2.jpeg",
    description:
      "A rich, moist chocolate cupcake crowned with smooth chocolate buttercream and chocolate chips. Every bite is packed with deep chocolate flavor for the ultimate indulgence.",
    type: "cupcake",
    category: "cupcake",
    variants: [
      { label: "6 Cupcakes", price: 800 },
      { label: "12 Cupcakes", price: 1600 },
    ],
  },

  {
    id: "vanilla-cupcake",
    name: "Classic Vanilla Cupcake",
    image: "/images/cupcake1.jpeg",
    description:
      "A soft and fluffy vanilla cupcake topped with silky vanilla buttercream and colorful sprinkles. A timeless favorite that's perfect for birthdays, parties, and everyday sweet cravings.",
    type: "cupcake",
    category: "cupcake",
    variants: [
      { label: "6 Cupcakes", price: 800 },
      { label: "12 Cupcakes", price: 1600 },
    ],
  },

  {
    id: "mix-cupcake",
    name: "Mixed Celebration Cupcakes",
    image: "/images/cupcake3.jpeg",
    description:
      "A delightful assortment of vanilla and chocolate cupcakes topped with creamy frosting and colorful sprinkles. Perfect for birthdays, celebrations, gifting, and sharing with family and friends.",
    type: "cupcake",
    category: "cupcake",
    variants: [
      { label: "6 Cupcakes", price: 800 },
      { label: "12 Cupcakes", price: 1600 },
    ],
  },

  {
    id: "azadi-cupcake",
    name: "August Celebration Cupcakes",
    image: "/images/cupcake5.jpeg",
    description:
      "Celebrate Pakistan's Independence Day with beautifully handcrafted vanilla and chocolate cupcakes, decorated in elegant green and white buttercream with crescent, star, and butterfly toppers. A festive treat perfect for family gatherings, offices, schools, and special celebrations.",
    type: "cupcake",
    category: "cupcake",
    variants: [
      { label: "6 Cupcakes", price: 800 },
      { label: "12 Cupcakes", price: 1600 },
    ],
  },
  {
    id: "choco-cupcake",
    name: "Premium Chocolate Berry Cupcake",
    image: "/images/cupcake4.jpeg",
    description:
      "A rich chocolate cupcake decorated with elegant vanilla and pink buttercream swirls, premium sprinkles, and golden pearls. A beautifully handcrafted treat for birthdays, weddings, and special occasions.",
    type: "cupcake",
    category: "cupcake",
    variants: [
      { label: "6 Cupcakes", price: 800 },
      { label: "12 Cupcakes", price: 1600 },
    ],
  },
  {
    id: "cake-slice",
    name: "Chocolate Cake Slice ",
    image: "/images/brownies1.jpeg",
    description:
      "A rich and moist chocolate cake slice layered with silky chocolate frosting and finished with a smooth chocolate ganache. Individually packed for freshness, making it the perfect dessert for chocolate lovers on the go.",
    type: "cupcake",
    category: "cupcake",
    variants: [
      { label: "6 Brownies", price: 900 },
      { label: "12 Brownies", price: 1800 },
    ],
  },
];

/* =========================================================
   Pastry
========================================================= */
export const pastries: Product[] = [
 {
    id: "red-velve-cream-pastry",
    name: "Red Velvet Cream Pastry",
    image: "/images/past1.png",
    description:
      "A soft and delicate pastry made with light vanilla sponge, creamy filling, and sweet strawberry. Beautifully finished with fluffy cream and a fresh cherry for an elegant and delicious treat.",
    type: "pastries",
    category: "pastries",
    variants: [
        { label: "6 Pastry", price: 900 },
        { label: "12 Pastry", price: 1800 },
    ],
  },

  {
    id: "red-velvet-pastry",
    name: "Red Velvet Pastry",
    image: "/images/past2.jpg",
    description:
      "A rich and moist red velvet pastry layered with smooth cream and finished with elegant white frosting. A classic favorite for birthdays, celebrations, and everyday sweet cravings.",
    type: "pastries",
    category: "pastries",
    variants: [
        { label: "6 Pastry", price: 900 },
        { label: "12 Pastry", price: 1800 },
    ],
  },

  {
    id: "vanilla-pineapple-pastry",
    name: "Vanilla Pineapple Pastry",
    image: "/images/past3.jpg",
    description:
      "A soft vanilla pastry layered with creamy frosting and sweet pineapple filling, topped with smooth cream and a bright cherry. Light, refreshing, and perfect for any occasion.",
    type: "pastries",
    category: "pastries",
    variants: [
        { label: "6 Pastry", price: 900 },
        { label: "12 Pastry", price: 1800 },
    ],
  },

  {
    id: "chocolate-pastry",
    name: "Chocolate Cream Pastry",
    image: "/images/past4.jpg",
    description:
      "A delicious chocolate pastry made with soft chocolate sponge, rich chocolate cream, and smooth chocolate layers. Finished with chocolate decoration for an indulgent and satisfying dessert.",
    type: "pastries",
    category: "pastries",
    variants: [
        { label: "6 Pastry", price: 900 },
        { label: "12 Pastry", price: 1800 },
    ],
  },

  {
    id: "premium-chocolate-pastry",
    name: "Premium Chocolate Pastry",
    image: "/images/past5.jpg",
    description:
      "A luxurious chocolate pastry featuring rich chocolate sponge, creamy chocolate filling, and a smooth chocolate finish. Perfect for chocolate lovers and special occasions.",
    type: "pastries",
    category: "pastries",
    variants: [
        { label: "6 Pastry", price: 900 },
        { label: "12 Pastry", price: 1800 },
    ],
  },
]

/* =========================================================
   Dessert Cup
========================================================= */

export const dessertCup: Product[] = [
  {
    id: "red-dessert-cup",
    name: "Red Velvet Dessert Cup",
    image: "/images/glass1.jpeg",
    description:
      "Layers of moist red velvet cake and smooth cream, topped with fluffy frosting and cute heart sprinkles. A deliciously creamy and indulgent treat for every occasion.",
    type: "dessert-cup",
    category: "dessert-cup",
    variants: [
      { label: "6 Glass Cakes", price: 1200 },
      { label: "12 Glass Cakes", price: 2400 },
    ],
  },

  {
    id: "strawberry-glass",
    name: "Chocolate Strawberry Dessert Cup",
    image: "/images/glass2.jpeg",
    description:
      "Rich chocolate layers paired with creamy filling and fruity strawberry goodness, topped with fresh strawberries. A delightful treat for chocolate and fruit lovers.",
    type: "dessert-cup",
    category: "dessert-cup",
    variants: [
      { label: "6 Glass Cakes", price: 1200 },
      { label: "12 Glass Cakes", price: 2400 },
    ],
  },

  {
    id: "choclate-desser-cup",
    name: "Chocolate Cream Dessert Cup",
    image: "/images/glass3.jpeg",
    description:
      "Rich chocolate cake layers with smooth, creamy filling and a luscious chocolate topping. A deliciously indulgent treat for every chocolate lover.",
    type: "dessert-cup",
    category: "dessert-cup",
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
  ...dessertCup,
  ...pastries,
  ...cartoonThemeCake,  
];