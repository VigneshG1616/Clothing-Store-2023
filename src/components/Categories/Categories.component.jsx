import DirectoryItem from "../DirectoryItem/DirectoryItem.component";
import {CategoriesContainer} from "./Categories.styles";

const Categories = ({ categories }) => {
  return (
    <CategoriesContainer>
      
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
