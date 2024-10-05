import React from 'react';
import CardProduct from '../../assets/images/cardProduct.webp';
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperImageStyle } from './style';
import { StarFilled } from '@ant-design/icons'
import wrapperImgCard from '../../assets/images/wrapperImgCard.png'

function CardComponent() {
    return (  
        <>
            <WrapperCardStyle
                hoverable
                headStyle={{ width: "200px" }}
                style={{ width: 240 }}
                bodyStyle={{ padding: "10px" }}
                cover={<img alt="example" src={CardProduct} />}
            >
                <WrapperImageStyle src={wrapperImgCard} alt='img'/>
                <StyleNameProduct>IPhone</StyleNameProduct>
                <WrapperReportText>
                    <span>
                        4.96
                        <StarFilled style={{ fontSize: "10px", color: "yellow", marginRight: "5px" }} />   
                    </span>
                    <span>| Đã bán 1000</span>
                </WrapperReportText>
                <WrapperPriceText>
                    Giá: 1.200.000đ
                    <WrapperDiscountText>-6%</WrapperDiscountText>
                </WrapperPriceText>
            </WrapperCardStyle>
        </>
    );
}

export default CardComponent;