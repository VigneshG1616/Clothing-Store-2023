
import {Routes, Route} from "react-router-dom";
import CategoriesPreview from "../categoriesPreview/CategoriesPreview.component";
import Category from "../../routes/category/Category.component";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoryArray));
    };

    getCategoriesMap();
  }, []);

  return (
     <Routes>
      <Route index element={<CategoriesPreview/>}></Route>
      <Route path=":category" element={<Category/>}></Route>
     </Routes>  
  );
};

export default Shop;
