
import {Routes, Route} from "react-router-dom";
import CategoriesPreview from "../categoriesPreview/CategoriesPreview.component";
import Category from "../../routes/category/Category.component";

const Shop = () => {
 
  return (
   
     <Routes>
      <Route index element={<CategoriesPreview/>}></Route>
      <Route path=":category" element={<Category/>}></Route>
     </Routes>
      
  );
};

export default Shop;
