
import {CartItemsDropdownContainer,ItemDetails,ItemName} from "./CartItems.styles";

const CartItems = ({name,imageUrl,price,quantity}) => {
  

  return (
    <CartItemsDropdownContainer>
      <img src={imageUrl} alt={`cart ${name}`} />
      <ItemDetails>
     <ItemName>{name}</ItemName>
     <span>{`${quantity} x ${price}$`}</span>
      </ItemDetails>
    </CartItemsDropdownContainer>
  );
};

export default CartItems;
