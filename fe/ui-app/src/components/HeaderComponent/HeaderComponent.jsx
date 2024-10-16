import React from 'react';
import { Badge, Col } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderCenter, WrapperTextHeaderSmall } from './style';
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'



function HeaderComponent() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)
    console.log(user)

    const handleNavigateLogin = () => {
        navigate('/sign-in');
    }
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
                        {user?.name ? (
                            <div style={{cursor: 'pointer'}}>{user.name}</div>
                        ) : (
                            <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div> 
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                        )}
                        
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