import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {ImageContainer, Quantity, Arrow, RemoveButton, CheckoutItemContainer} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span className='name'> {name} </span>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
        <strong>&#8722;</strong> 
        </Arrow>
        <span className='value'>{quantity}</span>
        <Arrow onClick={addItemHandler}>
        <strong>&#43;</strong>  
        </Arrow>
      </Quantity>
      <span className='price'> {price}</span>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;