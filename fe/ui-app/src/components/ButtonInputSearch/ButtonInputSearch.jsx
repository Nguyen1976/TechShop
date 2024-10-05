import { SearchOutlined } from '@ant-design/icons';
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from '../ButtonComponent/ButtonComponent';

function ButtonInputSearch(props) {
    const {size, placeholder, textButton, bordered, backgroundColorButton = 'rgb(13, 92, 182)', colorButton = '#fff' } = props;
    return (  
        <div style={{ display: 'flex', backgroundColor: backgroundColorButton }}>
            <InputComponent 
                size={size} 
                placeholder={placeholder} 
                bordered={bordered}
                style={{ borderRadius: '0px' }}
            />
            <ButtonComponent 
                size={size} 
                icon={<SearchOutlined />}
                bordered={bordered}
                style={{ borderRadius: '0px', backgroundColor: backgroundColorButton, color: colorButton, border: 'none' }}
                textButton={textButton}
            />
        </div>
    );
}

export default ButtonInputSearch;