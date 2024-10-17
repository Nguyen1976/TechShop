import { useEffect, useState } from 'react';
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';
import { WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel, WrapperUploadFile } from './style'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent'
import { Button } from 'antd';
import { UploadOutlined} from '@ant-design/icons';
import * as UserService from '../../services/UserService';
import { useMutationHooks } from "../../hooks/userMutationHook";
import * as message from '../../components/Message/Message'







function ProfilePage() {
    const user = useSelector((state) => state.user);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState('');

    const dispatch = useDispatch();

    const mutation = useMutationHooks(
        (id, data) => UserService.updateUser(user.id, data)
    )
    const { data, isSuccess, isError } = mutation;

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setAddress(user.address);
        setAvatar(user.avatar);
    }, [user])

    useEffect(() => {
        if(isSuccess) {
            message.success('Cập nhật thông tin thành công');
            handleGetDetailUser(user.id, user.access_token);
        }
        if(isError) {
            message.error('Cập nhật thông tin thất bại');
        }
    }, [isSuccess, isError])

    const handleGetDetailUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(UserService.updateUser({...res.data, access_token: token}));  
      }

    const handleOnchangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleOnchangeName = (e) => {
        setName(e.target.value);
    }

    const handleOnchangePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleOnchangeUpdate = (e) => {
        setAddress(e.target.value);
    }

    const handleUpdate = () => {
        mutation.mutate(
            user.id,
            { name, email, phone, address }
        );
    }

    return (  
        <>
            <div style={{ width: '1270px', margin: '0 auto', height: '500px' }}>
            <WrapperHeader>Thông tin người dùng</WrapperHeader>
            <LoadingComponent isLoading={false}>
                <WrapperContentProfile>
                    <WrapperInput>
                        <WrapperLabel htmlFor="name">Name</WrapperLabel>
                        <InputFormComponent style={{ width: '300px' }} id="name" value={name} onChange={handleOnchangeName} />
                        <ButtonComponent
                            onClick={handleUpdate}
                            size={40}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor="email">Email</WrapperLabel>
                        <InputFormComponent style={{ width: '300px' }} id="email" value={email} onChange={handleOnchangeEmail} />
                        <ButtonComponent
                            onClick={handleUpdate}
                            size={40}
                            styleButton={{
                                height: '30px',
                                width: 'fit-content',
                                borderRadius: '4px',
                                padding: '2px 6px 6px'
                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor="phone">Phone</WrapperLabel>
                        <InputFormComponent style={{ width: '300px' }} id="email" value={phone} onChange={handleOnchangePhone}/>
                        <ButtonComponent
                            onClick={handleUpdate}
                            size={40}
                            styleButton={{
                                height: '30px',
                                width: 'fit-content',
                                borderRadius: '4px',
                                padding: '2px 6px 6px'
                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor="avatar">Avatar</WrapperLabel>
                        <WrapperUploadFile maxCount={1}>
                            <Button icon={<UploadOutlined />}>Select File</Button>
                        </WrapperUploadFile>
                        {avatar && (
                            <img src={avatar} style={{
                                height: '60px',
                                width: '60px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }} alt="avatar"/>
                        )}
                        {/* <InputFormComponent style={{ width: '300px' }} id="avatar" value={avatar} onChange={handleOnchangeAvatar} /> */}
                        <ButtonComponent
                            size={40}
                            styleButton={{
                                height: '30px',
                                width: 'fit-content',
                                borderRadius: '4px',
                                padding: '2px 6px 6px'
                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor="address">Address</WrapperLabel>
                        <InputFormComponent style={{ width: '300px' }} id="address" value={address} onChange={handleOnchangeUpdate}/>
                        <ButtonComponent
                            onClick={handleUpdate}
                            size={40}
                            styleButton={{
                                height: '30px',
                                width: 'fit-content',
                                borderRadius: '4px',
                                padding: '2px 6px 6px'
                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </WrapperInput>
                </WrapperContentProfile>
            </LoadingComponent>
        </div>
        </>
    );
}

export default ProfilePage;