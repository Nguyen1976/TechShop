import React from 'react';
import { Checkbox, Rate } from "antd";
import { WrapperContent, WrapperLabelText, WrapperPrice, WrapperTextValue } from "./style";

const onChange = () => {}

function NavbarComponent() {
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => (
                    <div>
                        <WrapperTextValue>{option}</WrapperTextValue>
                    </div>
                ))
            case 'checkbox': 
                return <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange}>
                            {options.map((option) => (
                                <div style={{ marginTop: '5px' }}>
                                     <Checkbox value={option.value}>{option.label}</Checkbox>
                                </div>
                            ))}
                                
                        </Checkbox.Group>
            case 'rate': 
                return options.map((option) => (
                            <div style={{ marginTop: '5px', display: 'flex', fontSize: '16px' }}>
                                <Rate disabled defaultValue={option} />
                                <span style={{ marginLeft: '5px' }}>tu {option} sao </span>
                            </div>
                        ))
            case 'price': 
                return options.map((option) => (
                            <WrapperPrice>{option}</WrapperPrice>
                        ))
            default:
                return {}
        }
    }

    return (  
        <div>
            <WrapperLabelText>Label</WrapperLabelText>
            <WrapperContent>
                {renderContent('text', ['Tu lanh', 'TV', 'May giat'])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('checkbox', [
                    {value: 'a', label: 'a'},
                    {value: 'b', label: 'B'},
                    {value: 'c', label: 'C'},
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('rate', [5, 4, 3])}
            </WrapperContent>
            <div style={{ marginTop: '20px' }}>
                {renderContent('price', ['Dưới 50k', 'Rẻ', 'Đắt'])}
            </div>
        </div>
    );
}

export default NavbarComponent;