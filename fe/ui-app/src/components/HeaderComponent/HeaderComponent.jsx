import React from 'react';
import { Badge, Col } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderCenter, WrapperTextHeaderSmall } from './style';
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';



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
                    <ButtonInputSearch
                        size='large'
                        placeholder='Tìm kiếm sản phẩm'
                        textButton='Tìm kiếm'
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
                            <Badge count={4} size='small'>
                                <ShoppingCartOutlined style={{ fontSize: '30px', color: 'white' }} />
                            </Badge>
                            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                        </div>
                    </div>
                </WrapperTextHeaderCenter>
            </WrapperHeader>
      </>
    );
}

export default HeaderComponent;