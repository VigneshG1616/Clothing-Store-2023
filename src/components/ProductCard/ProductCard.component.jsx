import { useDispatch, useSelector } from "react-redux";
import { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import {ProductCardContainer, Footer, AddCartButton } from "./ProductCard.styles.jsx";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { addItemToCart } from "../../store/cart/cart.action.js";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const selectedCartItems = useSelector(selectCartItems);
  const handleAddToCart = () => dispatch(addItemToCart(selectedCartItems, product));
 
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />

      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <AddCartButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddToCart} >Add to Cart</AddCartButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
