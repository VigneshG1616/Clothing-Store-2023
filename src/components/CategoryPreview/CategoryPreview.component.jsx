import {useNavigate} from "react-router-dom";
import Button, {BUTTON_TYPE_CLASSES} from "../Button/Button.component";
import ProductCard from "../ProductCard/ProductCard.component";
import {CategoryPreviewContainer, Preview, NavigateCategoryBtnContainer} from "./CategoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  const navigateCategory = useNavigate();
  const navigateCategoryHandler =()=>navigateCategory(title);
  return (
    <CategoryPreviewContainer>
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <Preview>
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
      <NavigateCategoryBtnContainer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={navigateCategoryHandler} >More</Button>
      </NavigateCategoryBtnContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
