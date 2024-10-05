import React from 'react';
import { Col, Input } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderCenter, WrapperTextHeaderSmall } from './style';
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';


const { Search } = Input;

function HeaderComponent() {
    return (  
        <>
            <WrapperHeader gutter={16}>
                <WrapperTextHeaderCenter span={4}>
                    <WrapperTextHeader>
                        Tech Shop
                    </WrapperTextHeader>
                </WrapperTextHeaderCenter>
                <Col span={12}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                    />
                </Col>
                <WrapperTextHeaderCenter span={8}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '20px', marginLeft: '10px' }} />
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div> 
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div style={{ marginLeft: '20px' }}>
                        <div>
                            <ShoppingCartOutlined style={{ fontSize: '30px', color: 'white' }} />
                            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                        </div>
                    </div>
                </WrapperTextHeaderCenter>
            </WrapperHeader>
      </>
    );
}

export default HeaderComponent;