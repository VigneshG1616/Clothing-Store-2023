import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import {ProductCardContainer, Footer, AddCartButton } from "./ProductCard.styles.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const {addItemToCart} = useContext(CartContext);

  const handleAddToCart = () => addItemToCart(product);
 
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
