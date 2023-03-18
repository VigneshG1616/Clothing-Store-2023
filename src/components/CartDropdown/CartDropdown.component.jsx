import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartItems from "../CartItems/CartItems.component";
import Button from "../Button/Button.component";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const {cartItems, setIsDropdownOn} = useContext(CartContext);
  const navigateToCheckout = useNavigate();
  const goToCheckOutPageHandler = () => navigateToCheckout("/checkout");
  const closeCartDropdownHandler = () => setIsDropdownOn(false);
  return ( 
    <div className="cart-dropdown-container">
      <div className="close-icon" onClick={closeCartDropdownHandler}>X</div>
      {cartItems.length?(<><div className="cart-items">
        {cartItems.map((cartItem)=> <CartItems key={cartItem.id} {...cartItem} />)}
      </div>
    <Button onClick={goToCheckOutPageHandler} >Checkout</Button></>):(<div className="empty-message">Cart is Empty</div>)


      }
      
   
      
      
    </div>
  );
};

export default CartDropdown;
