import Styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../Button/Button.styles";
export const CartDropdownContainer = Styled.div`

position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton},
    ${GoogleSignInButton},${InvertedButton} {
        margin-top: auto;
    }

   

`;

export const CloseIcon = Styled.div`

    margin-left: auto;
    font-weight: bold; 
    cursor: pointer;
    position: relative;


    &:hover:after{
        content: "close";
        font-size: 12px;
        color: white;
        background-color: black;
        border: 1px solid black;
        padding: 2px 4px;
        position: absolute;
        top:15px;

    }

`;

export const CartItemsContainer = Styled.div`

height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;
scrollbar-width: none;   /* Firefox */
-ms-overflow-style: none;   /* Internet Explorer 10+ */

&::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
}

`;

export const EmptyMessage = Styled.div`

font-size: 18px;
margin: 50px auto;

`;
