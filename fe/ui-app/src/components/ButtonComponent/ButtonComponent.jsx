import { Button } from "antd";


function ButtonComponent({ size, icon, bordered, style, textButton, ...props }) {
    return (  
        <Button 
            size={size} 
            icon={icon}
            bordered={bordered}
            style={style}
            {...props}
        >{textButton}</Button>
    );
}

export default ButtonComponent;