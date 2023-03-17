import { useState, createContext } from "react";

const addSingleItem = (cartItems, productToAdd) => {
  const checkExistingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (checkExistingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [ ...cartItems , { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isDropdownOn: null,
  setIsDropdownOn: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isDropdownOn, setIsDropdownOn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addSingleItem(cartItems, productToAdd));
  };
  const value = { isDropdownOn, setIsDropdownOn, cartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
