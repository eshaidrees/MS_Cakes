"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export interface CartItem {
  cartId: string;
  productId: string;
  name: string;
  image: string;
  description: string;
  type: "cake" | "cupcake" | "dessert-cup";
  variant: string;
  price: number;
  quantity: number;
}

interface AddToCartItem {
  productId: string;
  name: string;
  image: string;
  description: string;
  type: "cake" | "cupcake" | "dessert-cup";
  variant: string;
  price: number;
}

interface CartContextType {
  cart: CartItem[];

  addToCart: (item: AddToCartItem) => void;

  removeFromCart: (cartId: string) => void;

  updateQuantity: (
    cartId: string,
    quantity: number
  ) => void;

  clearCart: () => void;

  getTotalItems: () => number;

  getTotalPrice: () => number;

  isCartOpen: boolean;

  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<
  CartContextType | undefined
>(undefined);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  /* ================= LOAD CART ================= */

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (!savedCart) return;

    try {
      const parsedCart = JSON.parse(savedCart);

      if (Array.isArray(parsedCart)) {
        setCart(parsedCart);
      }
    } catch (error) {
      console.error(
        "Failed to load cart:",
        error
      );

      localStorage.removeItem("cart");
    }
  }, []);

  /* ================= SAVE CART ================= */

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  /* ================= ADD TO CART ================= */

  const addToCart = (item: AddToCartItem) => {
    setCart((prev) => {
      /*
        Same product + same variant
        = same cart item

        Example:

        Chocolate Cake + 1 Pound
        Chocolate Cake + 2 Pounds

        These remain separate.
      */

      const existingItem = prev.find(
        (cartItem) =>
          cartItem.productId === item.productId &&
          cartItem.variant === item.variant
      );

      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.cartId === existingItem.cartId
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      const newItem: CartItem = {
        ...item,

        cartId: `${item.productId}-${item.variant
          .toLowerCase()
          .replace(/\s+/g, "-")}`,

        quantity: 1,
      };

      return [...prev, newItem];
    });

    setIsCartOpen(true);
  };

  /* ================= REMOVE ================= */

  const removeFromCart = (cartId: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => item.cartId !== cartId
      )
    );
  };

  /* ================= UPDATE QUANTITY ================= */

  const updateQuantity = (
    cartId: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  /* ================= CLEAR ================= */

  const clearCart = () => {
    setCart([]);
  };

  /* ================= TOTAL ITEMS ================= */

  const getTotalItems = () => {
    return cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  };

  /* ================= TOTAL PRICE ================= */

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) =>
        total +
        item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* ================= USE CART ================= */

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within a CartProvider"
    );
  }

  return context;
}