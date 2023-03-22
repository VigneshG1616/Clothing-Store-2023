import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartItems from "../CartItems/CartItems.component";
import Button from "../Button/Button.component";
import {
  CartDropdownContainer,
  CloseIcon,
  EmptyMessage,
  CartItemsContainer,
} from "./CartDropdown.styles";

const CartDropdown = () => {
  const { cartItems, setIsDropdownOn } = useContext(CartContext);
  const navigateToCheckout = useNavigate();
  const goToCheckOutPageHandler = () => {
    navigateToCheckout("/checkout");
    //setIsDropdownOn(false);
 }
  const closeCartDropdownHandler = () => setIsDropdownOn(false);
  return (
    <CartDropdownContainer>
      <CloseIcon onClick={closeCartDropdownHandler}>X</CloseIcon>
      {cartItems.length ? (
        <>
          <CartItemsContainer>
            {cartItems.map((cartItem) => (
              <CartItems key={cartItem.id} {...cartItem} />
            ))}
          </CartItemsContainer>
          <Button onClick={goToCheckOutPageHandler}>Checkout</Button>
        </>
      ) : (
        <EmptyMessage>Cart is Empty</EmptyMessage>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
