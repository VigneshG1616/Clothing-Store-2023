import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview.component";
import "./Shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);


 
  return (
   
      <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
       return <CategoriesPreview key={title} title={title} products={products}/>
      })}
    </div>
      
  );
};

export default Shop;
