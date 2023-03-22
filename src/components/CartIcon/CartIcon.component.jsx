import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.styles";

const CartIcon = () => {
  const { isDropdownOn, setIsDropdownOn, cartCount } = useContext(CartContext);
  const handleDropdown = () =>  setIsDropdownOn(!isDropdownOn);
 

  return (
    <CartIconContainer onClick={handleDropdown}>
     <ShoppingIcon />
     <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
