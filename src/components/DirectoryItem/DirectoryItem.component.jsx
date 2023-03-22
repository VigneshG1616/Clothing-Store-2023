import {DirectoryContainer, BackgroundImage ,DirectoryBodyContainer} from "./DirectoryItem.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <DirectoryContainer>
      <BackgroundImage
        imageUrl={imageUrl} 
      />
      <DirectoryBodyContainer to={`/shop/${title}`}>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
