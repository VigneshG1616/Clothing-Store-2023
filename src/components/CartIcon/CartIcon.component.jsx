import { useContext } from "react";
import { CartContext } from "../../contexts/cartDropdown.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.styles.scss";

const CartIcon = () => {
  const { isDropdownOn, setIsDropdownOn, cartItems } = useContext(CartContext);
  const handleDropdown = () =>  setIsDropdownOn(!isDropdownOn);
  let itemsCount = 0;
  // if(cartItems.length){
  //   const itemsCount = cartItems.map(({quantity})=>quantity);
  //    itemsCount1 = itemsCount.reduce((a,b)=>a+b);
  //   console.log("itemsCOunt ",itemsCount);
  //   console.log("itemsCOunt1 ",itemsCount1);
  // }
  if(cartItems.length){
     itemsCount = cartItems.map(({quantity})=>quantity).reduce((a,b)=>a+b);
    console.log("itemsCOunt ",itemsCount);
    
  }

  return (
    <div className="cart-icon-container" onClick={handleDropdown}>
     <ShoppingIcon className="shopping-icon" />
     <span className="item-count">{itemsCount}</span>
    </div>
  );
};

export default CartIcon;
