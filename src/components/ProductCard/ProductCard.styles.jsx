import Styled from "styled-components";
import Button from "../Button/Button.component";

export const AddCartButton = Styled(Button)`
width: 80%;
opacity: 0.7;
position: absolute;
top: 255px;
display: none;
`;


export const ProductCardContainer = Styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;

img {
width: 100%;
height: 95%;
object-fit: cover;
margin-bottom: 5px;
}


&:hover {
  img {
    opacity: 0.8;
  }

  ${AddCartButton} {
    opacity: 0.85;
    display: flex;
  }
}

`;

export const Footer = Styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;
  
.name {
  width: 90%;
  margin-bottom: 15px;
}
  
.price {
  width: 10%;
}

`;
