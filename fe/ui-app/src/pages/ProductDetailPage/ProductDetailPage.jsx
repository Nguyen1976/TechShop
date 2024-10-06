import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";

function ProductDetailPage() {
    return (  
        <div style={{ padding: '0 120px', backgroundColor: "#efefef", minHeight: "1000px" }}>
            <div style={{ backgroundColor: "#fff" }}>
                <ProductDetailsComponent />
            </div>
        </div>
    );
}

export default ProductDetailPage;