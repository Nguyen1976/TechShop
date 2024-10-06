import { Row } from "antd";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import { WrapperNav, WrapperPagination, WrapperProducts } from "./style";

function TypeProductPage() {
    const onChange = (page, pageSize) => {
        console.log(page, pageSize);
    };
    return (  
        <div style={{ backgroundColor: "#efefef", minHeight: "1000px" }}>
            <Row style={{ padding: "0 120px" }}>
                <WrapperNav span={4} >
                    <NavbarComponent />
                </WrapperNav>
                <WrapperProducts span={20}>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </WrapperProducts>
            </Row>
           
            <WrapperPagination showQuickJumper defaultCurrent={2} total={100} onChange={onChange} />
           
        </div>
    );
}

export default TypeProductPage;