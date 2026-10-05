import { createContext, useState } from "react";
import { useEffect } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    setCartItems(storedCartItems ? JSON.parse(storedCartItems) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    );
  };

  const decreaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          if (cartItem.quantity > 1) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }

          return cartItem;
        }

        return cartItem;
      }),
    );
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => {
        return cartItem.id !== item.id;
      }),
    );
  };
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
