import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};



export const CartProvider = ({ children }) => {

  const incrementQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };
  
  const decrementQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };
  const [cart, setCart] = useState([]);

  const addToCart = (product, size, quantity) => {
    const existingCartItem = cart.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existingCartItem) {
      const updatedCart = cart.map((item) =>
        item === existingCartItem
          ? { ...existingCartItem, quantity: existingCartItem.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, size, quantity }]);
    }

    // Notify the Navbar that an item was added
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("itemAddedToCart"));
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};