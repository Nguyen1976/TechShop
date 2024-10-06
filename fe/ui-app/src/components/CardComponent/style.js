import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    &img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
    position: relative;
    margin: 5px;
`

export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 16px;
    color: rgb(56, 56, 61);
`

export const WrapperReportText = styled.div`
    font-size: 16px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin-top: 8px;
`

export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 16px;
    font-weight: 500;
    margin-top: 8px;
`

export const WrapperDiscountText = styled.span`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weight: 500;
    margin-left: 5px;
`

export const WrapperImageStyle = styled.img`
    width: 100%;
    height: 70%;
    position: absolute;
    top: 0;
    left: 0;
`