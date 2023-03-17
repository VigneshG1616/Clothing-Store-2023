import { useContext } from "react";
import { CartContext } from "../../contexts/cartDropdown.context";
import CartItems from "../CartItems/CartItems.component";
import Button from "../Button/Button.component";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      
      <div className="cart-items">
        {cartItems.map((cartItem)=> <CartItems key={cartItem.id} {...cartItem} />)}
        
      </div>
    <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
