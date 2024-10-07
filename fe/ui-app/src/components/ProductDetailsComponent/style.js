import { Col, Image } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
    height: 64px;
    width: 64px;
    
`

export const WrapperStyleColImage = styled(Col)`
    flex-basis: unset;
    
`

export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    word-wrap: break-word;
`

export const WrapperStyleTextSell = styled.span`
    color: rgb(120, 120, 120);
    font-size: 16px;
    font-weight: 500;
`

export const WrapperPriceProduct = styled.div`
    background-color: rgb(250, 250, 250);
    border-radius: 4px;
`

export const WrapperPriceTextProduct = styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-right: 8px;
    font-weight: 500;
    padding: 10px;
    margin-top: 20px;
`

export const WrapperAddressProduct = styled.div`
    margin-top: 20px;
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    };
    span.change-address {
        color: rgb(11, 116, 229);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }
`

export const WrappetQualityProduct = styled.div`
    align-items: center;
    border-radius: 2px;
    margin-top: 20px;
`

export const WrapperBtn = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 30px;
`