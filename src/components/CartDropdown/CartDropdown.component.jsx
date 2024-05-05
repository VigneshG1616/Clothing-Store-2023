import { useLocation, useNavigate } from "react-router-dom";
import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector";
import CartItems from "../CartItems/CartItems.component";
import Button from "../Button/Button.component";
import {
  CartDropdownContainer,
  CloseIcon,
  EmptyMessage,
  CartItemsContainer,
} from "./CartDropdown.styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { useEffect } from "react";


const CartDropdown = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log("loc is ", location);
  const cartItems = useSelector(selectCartItems);
  const navigateToCheckout = useNavigate();
  const goToCheckOutPageHandler = () => {
    navigateToCheckout("/checkout");
 }
  const closeCartDropdownHandler = () => dispatch(setIsCartOpen(false));

  useEffect(()=>{
    if (location.pathname === "/checkout"){
      closeCartDropdownHandler();
    }
  },[location]);
  
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
