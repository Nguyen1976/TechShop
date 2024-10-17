import React, { useState } from 'react';
import { Badge, Col, Popover } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderCenter, WrapperTextHeaderSmall } from './style';
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import * as UserService from '../../services/UserService';
import { resetUser } from '../../redux/slices/userSlice';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';




function HeaderComponent() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false);

    const handleNavigateLogin = () => {
        navigate('/sign-in');
    }

    const handleLogout = async () => {
        setLoading(true);
        await UserService.logoutUser;
        dispatch(resetUser());
        localStorage.removeItem('access_token');
        handleNavigateLogin();
        setLoading(false);
    }

    const content = (
        <>
            <div>
                <ButtonComponent textButton={'Đăng xuẩt'} size={15} onClick={handleLogout}>
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent textButton={'Thông tin người dùng'} onClick={() => navigate('/profile-user')}>
                </ButtonComponent>
            </div>
        </>
    )
    
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
                    <LoadingComponent isLoading={loading}>
                        <WrapperHeaderAccount>
                            <UserOutlined style={{ fontSize: '20px', marginLeft: '10px' }} />
                            {user?.access_token ? (
                                <Popover placement="bottom" content={content}>
                                    <div style={{cursor: 'pointer'}}>{user.name}</div>
                                </Popover>
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
                    </LoadingComponent>
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