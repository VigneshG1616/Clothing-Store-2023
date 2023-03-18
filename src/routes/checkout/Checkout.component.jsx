import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import { CartContext } from "../../contexts/cart.context";

import "./Checkout.styles.scss";

const Checkout = () => {
  const {cartItems,cartTotalPrice} = useContext(CartContext);
  const goToShop = useNavigate();
  const goToShopHandler = ()  =>  goToShop("/shop")
  return (
    <div className="checkout-container" >
     <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
     </div>
    {
      cartItems.length?cartItems.map((cartItem)=> <CheckoutItem key={cartItem.id} cartItem={cartItem} />):<div className="no-items"> <span>"No Items in the cart"</span> </ div>
    }
    <div className='total'>{cartTotalPrice?`TOTAL: $ ${cartTotalPrice}`:<div className="no-items"><span className="go-to-shop" onClick={goToShopHandler}>SHOP NOW</span></div>} </div>
    
    </div>
  );
};

export default Checkout;
