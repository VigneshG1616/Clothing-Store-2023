import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";

import ProductCard from "../../components/ProductCard/ProductCard.component";
import "./Shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);


 
  return (
    <div className="products-container" >
      {products ? (
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
      ) : (
        <h1>Error</h1>
      )}
    </div>
  );
};

export default Shop;
