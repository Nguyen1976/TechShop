import React from "react";
import Slider from "react-slick";

function SliderComponent({ arrImages }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <Slider {...settings}>
                {arrImages.map(item => (
                    <div key={item}>
                        <img src={item} alt='img-slider' width="100%" height="274px" style={{objectFit: "cover"}}/>
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default SliderComponent;