import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isDropdownOn
);

export const selectCartCount = createSelector([selectCartReducer], (cart) =>
  cart.cartItems.reduce(
    (prevCount, cartItem) => prevCount + cartItem.quantity,
    0
  )
);

export const selectCartTotal = createSelector([selectCartReducer], (cart) =>
  cart.cartItems.reduce(
    (prevPrice, cartItem) => prevPrice + cartItem.quantity * cartItem.price,
    0
  )
);
