import Styled from "styled-components";

export const CheckoutContainer = Styled.div`
width: 55%;
min-height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 50px auto 0;
`;

export const CheckoutHeader = Styled.div`
width: 100%;
padding: 10px 0;
display: flex;
justify-content: space-between;
border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = Styled.div`
text-transform: capitalize;
width: 23%;

&:last-child {
    width: 8%;
}
`;


export const Total = Styled.div`
width: 100%;
margin-top: 30px;
font-size: 36px;
display: flex;
justify-content: space-between;
align-items: center;
.total-cart-count{
    font-size: 24px;
}
`;

export const NoItems = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100px;
font-size:20px ;
`;


export const NoItemsShopBtn = Styled.div`
display: flex;
width: 100%;
justify-content: flex-end;
height: 100px;
font-size:20px ;
.go-to-shop{
    font-size: 16px;
    font-weight: bold;
    align-self: flex-end;
    cursor: pointer;
    padding: 10px 35px;
    background-color: black;
    color: white;


&:hover{
    background-color: white;
    color: black;
    border: 1px solid black; 
}
}
`;






