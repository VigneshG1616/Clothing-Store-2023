import Styled from "styled-components";
import { ReactComponent as ShoppingIconSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = Styled(ShoppingIconSvg)`
    width: 24px;
    height: 24px;
`;

export const CartIconContainer = Styled.div`

    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

`;

export const ItemCount = Styled.span`

    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;
