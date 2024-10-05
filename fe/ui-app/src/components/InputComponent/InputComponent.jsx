import { Input } from "antd";

function InputComponent({ size, placeholder, bordered, style, ...props }) {
    return (  
        <Input 
            size={size} 
            placeholder={placeholder} 
            bordered={bordered}
            style={style}
            {...props}
        />
    );
}

export default InputComponent;