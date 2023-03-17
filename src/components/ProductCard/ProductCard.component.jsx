import { useContext } from "react";
import { CartContext } from "../../contexts/cartDropdown.context";
import Button from "../Button/Button.component";
import "./ProductCard.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const {addItemToCart} = useContext(CartContext);

  const handleAddToCart = () => addItemToCart(product);
 
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleAddToCart} >Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
