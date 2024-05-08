
import {Routes, Route} from "react-router-dom";
import CategoriesPreview from "../categoriesPreview/CategoriesPreview.component";
import Category from "../../routes/category/Category.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCategoriesAsync());
  }, []);

  return (
     <Routes>
      <Route index element={<CategoriesPreview/>}></Route>
      <Route path=":category" element={<Category/>}></Route>
     </Routes>  
  );
};

export default Shop;
