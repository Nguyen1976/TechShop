import { Col, Row, Image, InputNumber } from "antd";
import productsDetail from "../../assets/images/productsDetail.webp"
import prooductDertailSmall from "../../assets/images/prooductDertailSmall.webp"
import { MinusOutlined, PlusOutlined, StarFilled } from '@ant-design/icons'

import { WrapperAddressProduct, WrapperBtn, WrapperPriceProduct, WrapperPriceTextProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell, WrappetQualityProduct } from "./style";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function ProductDetailsComponent() {
    const onChange = () => {};
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
                <Col span={14}>
                    <WrapperStyleNameProduct>Sách tư duy nnanh và chấm nên hay không nên tin vào trực giác</WrapperStyleNameProduct>
                    <div>
                        <StarFilled style={{ fontSize: "16px", color: "yellow", marginRight: "8px" }} />   
                        <StarFilled style={{ fontSize: "16px", color: "yellow", marginRight: "8px" }} />   
                        <StarFilled style={{ fontSize: "16px", color: "yellow", marginRight: "8px" }} />   
                        <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
                    </div>
                    <WrapperPriceProduct>
                        <WrapperPriceTextProduct>
                            200 000đ
                        </WrapperPriceTextProduct>
                    </WrapperPriceProduct>
                    <WrapperAddressProduct>
                        <span>Giao đến  </span>
                        <span className="address">Đồng tiến, Ứng Hòa, Hà Nội</span>
                        <span className="change-address"> - Đổi địa chỉ</span>
                    </WrapperAddressProduct>
                    <WrappetQualityProduct>
                        <div>Số lượng</div>
                        <div>
                            <ButtonComponent icon={<PlusOutlined />} />
                            <InputNumber onChange={onChange} />
                            <ButtonComponent icon={<MinusOutlined />} />
                        </div>
                    </WrappetQualityProduct>
                    <WrapperBtn>
                        <ButtonComponent 
                            style={{ backgroundColor: 'rgb(255, 57, 69)', color: "#fff", width: '220px', padding: '25px 0', fontSize: '15px'}}
                            textButton="Chọn mua" 
                        />
                        <ButtonComponent 
                            style={{ backgroundColor: '#fff', color: "rgb(13, 92, 182)", width: '220px', padding: '25px 0', border: '1px solid rgb(13, 92, 182)' }}
                            textButton="Mua trả sau" 
                        />
                    </WrapperBtn>
                </Col>
            </Row>
        </div>
    );
}

export default ProductDetailsComponent;