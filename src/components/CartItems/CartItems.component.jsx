
import "./CartItems.styles.scss";

const CartItems = ({name,imageUrl,price,quantity}) => {
  

  return (
    <div className="cart-items-dropdown-container">
      <img src={imageUrl} alt={`cart ${name}`} />
      <div className="item-details">
     <span className="name">{name}</span>
     <span>{`${quantity} x ${price}$`}</span>
      </div>
    </div>
  );
};

export default CartItems;
