import React from 'react';
import { useState } from 'react';
import { WrapperInputStyle } from './style';


function InputFormComponent( props ) {
    const [ valueInput ] = useState('');
    const { placeholder = 'Nhập text', ...rest } = props
    // const [ placeholder = 'Nhập text' ] = props;

    return (  
        <div style={{ margin: '10px 0' }}>
            <WrapperInputStyle placeholder={placeholder} value={valueInput} {...rest}/>
        </div>
    );
}

export default InputFormComponent;