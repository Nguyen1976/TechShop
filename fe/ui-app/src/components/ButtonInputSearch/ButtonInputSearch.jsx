import { Button, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

function ButtonInputSearch(props) {
    const {size, placeholder, textButton, bordered, backgroundColorButton = 'rgb(13, 92, 182)', colorButton = '#fff' } = props;
    return (  
        <div style={{ display: 'flex', backgroundColor: backgroundColorButton }}>
            <Input 
                size={size} 
                placeholder={placeholder} 
                bordered={bordered}
                style={{ borderRadius: '0px' }}
            />
            <Button 
                size={size} 
                icon={<SearchOutlined />}
                bordered={bordered}
                style={{ borderRadius: '0px', backgroundColor: backgroundColorButton, color: colorButton, border: 'none' }}
            >{textButton}</Button>
        </div>
    );
}

export default ButtonInputSearch;