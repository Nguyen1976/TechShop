import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperBtnStyle, WrapperProducts, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import CardComponent from "../../components/CardComponent/CardComponent";


function HomePage() {
    const arr = ['TV', 'Tu lanh', 'Laptop'];

    return ( 
        <>
            <div style={{ padding: '0 120px' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => (
                        <TypeProduct name={item} key={item}/>
                    ))}
                </WrapperTypeProduct>
            </div>
            <div id="container" style={{ backgroundColor: "#efefef", padding: "0 120px", height: "2000px" }}>
                <SliderComponent arrImages={[slider1, slider2, slider1]} />
                <WrapperProducts>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </WrapperProducts>
                <div style={{ textAlign: 'center' }}>
                    <WrapperBtnStyle textButton="Xem thêm" type='outline'></WrapperBtnStyle>
                </div>
            </div>
        </>
    );
}

export default HomePage;