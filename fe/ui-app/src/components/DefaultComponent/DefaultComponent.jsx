import HeaderComponent from "../HeaderComponent/HeaderComponent";

function DefaultComponent({ children }) {
    return (  
        <div>
            <HeaderComponent />
            {children}
        </div>
    );
}

export default DefaultComponent;