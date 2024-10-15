import React, {} from 'react';
import { WrapperInputStyle } from './style';

function InputFormComponent(props) {
    const { placeholder = 'Nhập text', onChange, value, ...rest } = props;

    return (  
        <div style={{ margin: '10px 0' }}>
            <WrapperInputStyle 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange}
                {...rest} 
            />
        </div>
    );
}

export default InputFormComponent;
