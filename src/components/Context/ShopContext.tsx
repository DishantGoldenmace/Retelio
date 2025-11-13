import { createContext, useState } from "react";
import allProducts from "../../data/allProducts";

type Product = {
  id: string | number;
  [key: string]: any;
};

interface ShopContextType {
  allProducts: typeof allProducts;
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string | number) => void;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string | number) => void;
  updateQuantity: (productId: string | number, quantity: number) => void;
}

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

type CartItem = Product & { quantity: number };

const ShopContextProvider = (props: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      // Check if product already exists in wishlist
      const exists = prev.some((item) => item.id === product.id);
      if (!exists) {
        return [...prev, product];
      }
      return prev;
    });
  };
  const removeFromWishlist = (productId: string | number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  // Cart functions
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string | number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string | number, quantity: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const contextValue = {
    allProducts,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
    updateQuantity,
    cart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
