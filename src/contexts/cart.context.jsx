import { useState, createContext, useEffect } from "react";

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

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const checkExistingItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (checkExistingItem.quantity === 1) {
    return cartItems;
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItems = (cartItems, productToRemove) => {
  const checkExistingItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (checkExistingItem) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
};

export const CartContext = createContext({
  isDropdownOn: null,
  setIsDropdownOn: () => {},
  cartItems: [],
  cartCount: null,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isDropdownOn, setIsDropdownOn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    const itemsCount = cartItems.reduce(
      (prevCount, cartItem) => prevCount + cartItem.quantity,
      0
    );
    setCartCount(itemsCount);
  }, [cartItems]);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (prevPrice, cartItem) => prevPrice + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotalPrice(totalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addSingleItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToRemove) => {
    setCartItems(clearCartItems(cartItems, productToRemove));
  };

  const value = {
    isDropdownOn,
    setIsDropdownOn,
    cartItems,
    cartCount,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartTotalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
