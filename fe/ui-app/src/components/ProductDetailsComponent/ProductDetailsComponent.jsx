import { Col, Row, Image } from "antd";
import productsDetail from "../../assets/images/productsDetail.webp"
import prooductDertailSmall from "../../assets/images/prooductDertailSmall.webp"
import { WrapperStyleColImage, WrapperStyleImageSmall } from "./style";

function ProductDetailsComponent() {
    return (  
        <div>
            <Row style={{ padding: "16px" }}>
                <Col span={10}>
                    <Image src={productsDetail} alt="Image product details" preview={false}/>
                    <Row style={{ paddingTop: "10px" }}>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={prooductDertailSmall} alt="image small" preview={false}/>
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={prooductDertailSmall} alt="image small" preview={false}/>
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={prooductDertailSmall} alt="image small" preview={false}/>
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={prooductDertailSmall} alt="image small" preview={false}/>
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={prooductDertailSmall} alt="image small" preview={false}/>
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={prooductDertailSmall} alt="image small" preview={false}/>
                        </WrapperStyleColImage>
                    </Row>
                </Col>
                <Col span={14}>col</Col>
            </Row>
        </div>
    );
}

export default ProductDetailsComponent;