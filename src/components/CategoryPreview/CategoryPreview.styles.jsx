import Styled from "styled-components";

export const CategoryPreviewContainer = Styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;

.title {
    font-size: 28px;
    margin-bottom: 25px;
    user-select: none;
}
`;

export const Preview = Styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
row-gap: 50px;

`;

export const NavigateCategoryBtnContainer = Styled.div`
padding: 30px 0;
display: flex;
justify-content: flex-end;

`;
