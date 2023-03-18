import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.styles.scss";

const CartIcon = () => {
  const { isDropdownOn, setIsDropdownOn, cartCount } = useContext(CartContext);
  const handleDropdown = () =>  setIsDropdownOn(!isDropdownOn);
 

  return (
    <div className="cart-icon-container" onClick={handleDropdown}>
     <ShoppingIcon className="shopping-icon" />
     <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
