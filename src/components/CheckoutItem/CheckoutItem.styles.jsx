import Styled from "styled-components";

export const ImageContainer = Styled.div`
width: 23%;
padding-right: 15px;

img {
    width: 100%;
    height: 100%;
}
`;

export const Arrow = Styled.div`
cursor: pointer;
font-size: 25px;
-webkit-user-select: none; /* Safari */
-ms-user-select: none; /* IE 10 and IE 11 */
user-select: none; /* Standard syntax */
`;

export const Quantity = Styled.span`
display: flex;
align-items: center;



.value {
    margin: 0 10px;
}
`;

export const RemoveButton = Styled.div`
padding-left: 12px;
cursor: pointer;
`;

export const CheckoutItemContainer = Styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;

.name,
    ${Quantity},
    .price {
        width: 23%;
    }
`;
