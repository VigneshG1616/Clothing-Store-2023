import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import {CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.styles";
import { useDispatch, useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isDropdownOn  = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const handleDropdown = () =>  dispatch(setIsCartOpen(!isDropdownOn));
 

  return (
    <CartIconContainer onClick={handleDropdown}>
     <ShoppingIcon />
     <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
