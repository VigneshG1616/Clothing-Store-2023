import { selectCartItems } from "../../store/cart/cart.selector";
import {ImageContainer, Quantity, Arrow, RemoveButton, CheckoutItemContainer} from './CheckoutItem.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const selectedCartItems = useSelector(selectCartItems);
  const clearItemHandler = () => dispatch(clearItemFromCart(selectedCartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(selectedCartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(selectedCartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span className='name'> {name} </span>
      <Quantity>
        <Arrow onClick={removeItemHandler} quantity={quantity} decrement="true">
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