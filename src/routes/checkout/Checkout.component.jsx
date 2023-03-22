import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import { CartContext } from "../../contexts/cart.context";

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total, NoItems,NoItemsShopBtn} from "./Checkout.styles";

const Header_Block_Titles = ["Product", "Description", "Quantity", "Price", "Remove"  ]

const Checkout = () => {
  const { cartItems, cartTotalPrice, cartCount } =
    useContext(CartContext);
  const goToShop = useNavigate();
  const goToShopHandler = () => goToShop("/shop");
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {
          Header_Block_Titles.map((title,i)=><HeaderBlock key={i}>
          <span>{title}</span>
        </HeaderBlock>)
        }
        
      </CheckoutHeader>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <NoItems>
         
          <span>"No Items in the cart"</span>
        </NoItems>
      )}
      <Total>
        {cartTotalPrice ? (
          <>
          <span className="total-cart-count">{`Items: ${cartCount}`}</span>
          <span>{`TOTAL: $ ${cartTotalPrice}`}</span>
          </>
        ) : (
          <NoItemsShopBtn>
            <span className="go-to-shop" onClick={goToShopHandler}>
              SHOP NOW
            </span>
          </NoItemsShopBtn>
        )}
      </Total>
    </CheckoutContainer>
  );
};

export default Checkout;
