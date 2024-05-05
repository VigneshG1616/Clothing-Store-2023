import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_DROPDOWN_ON, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addSingleItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = clearCartItems(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

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
