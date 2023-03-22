import Styled from "styled-components";

export const CategoryContainer = Styled.div`
.title{
    display:flex;
    justify-content: center;

 span{
    font-size: 28px;
    margin-bottom: 25px;
}
`;

export const CategoryProductContainer = Styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
column-gap: 20px;
row-gap: 50px;
`;

export const NavigateBackToShopBtn = Styled.div`
display: flex;
justify-content: flex-end;
padding: 30px 0;
`;
