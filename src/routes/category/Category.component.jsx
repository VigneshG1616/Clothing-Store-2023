import { useContext,useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { CategoryContainer, CategoryProductContainer, NavigateBackToShopBtn } from "./Category.styles";
import ProductCard from "../../components/ProductCard/ProductCard.component";
import Button, {BUTTON_TYPE_CLASSES} from "../../components/Button/Button.component";


const Category = () =>{
 const {category} = useParams();
 const {categoriesMap} = useContext(CategoriesContext);
 const [products, setProducts] = useState(categoriesMap[category]);
const navigateToShop = useNavigate();
const navigateToShopHandler =()=>navigateToShop("../");

 useEffect(()=>{

    setProducts(categoriesMap[category]);
 },[category,categoriesMap]);
return(
    <CategoryContainer>
        <h1 className="title"><span >{category.toUpperCase()}</span></h1>
<CategoryProductContainer>
    {
        products&&products.map((product)=><ProductCard key={product.id} product={product} />)
    }
</CategoryProductContainer>
<NavigateBackToShopBtn>
    <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={navigateToShopHandler}> &#60;&#60; CATEGORIES</Button>
</NavigateBackToShopBtn>
    </CategoryContainer>

)

}

export default Category;