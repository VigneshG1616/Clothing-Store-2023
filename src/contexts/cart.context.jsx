import { useState, createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

export const SET_CART = {
  SET_IS_DROPDOWN_ON :"SET_IS_DROPDOWN_ON",
  SET_CART_ITEMS :"SET_CART_ITEMS",
}

export const cartReducer = (state, action)  => {
 const  { type, payload } = action;
 switch (type) {
 case SET_CART.SET_CART_ITEMS:
    return {...state, ...payload };
 case SET_CART.SET_IS_DROPDOWN_ON:
    return {...state, isDropdownOn: payload };
   default:
    throw new Error(`Unhandled action type: ${type} at cartReducer`);
 }
}

const INITIAL_STATE = {
  isDropdownOn: false,
  cartItems: [],
  cartCount: 0,
  cartTotalPrice: 0,
}

export const CartProvider = ({ children }) => {
  const [{ isDropdownOn, cartItems, cartCount, cartTotalPrice}, dispatch] = useReducer(cartReducer,INITIAL_STATE)

  const updateCartItemsReducer = (newCartItems) => {
    const itemsCount = newCartItems.reduce(
      (prevCount, cartItem) => prevCount + cartItem.quantity,
      0
    );

    const totalPrice = newCartItems.reduce(
      (prevPrice, cartItem) => prevPrice + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(createAction(SET_CART.SET_CART_ITEMS,{cartItems: newCartItems, cartCount: itemsCount, cartTotalPrice: totalPrice }));

  }

  const setIsDropdownOn = (value) => {
    dispatch(createAction(SET_CART.SET_IS_DROPDOWN_ON, value));
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addSingleItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (productToRemove) => {
    const newCartItems =clearCartItems(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
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
