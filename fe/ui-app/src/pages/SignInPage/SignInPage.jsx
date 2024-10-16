import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import { WrapperContainerLeft, WrapperContainerRigth, WrapperTextLight } from "./style";
import { Image } from "antd";
import signIn from '../../assets/images/signIn.png';
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as UserService from '../../services/UserService';
import { useMutationHooks } from "../../hooks/userMutationHook";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux'
import { updateUser } from "../../redux/slices/userSlice";

function SignInPage() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const mutation = useMutationHooks(
        data => UserService.loginUser(data)
    )

    const { data, isSuccess, isError } = mutation;

    useEffect(() => {
        if (isSuccess) {
            navigate('/');
            localStorage.setItem('access_token', data?.access_token);
            if(data?.access_token) {
                const decoded = jwtDecode(data?.access_token);//Thông tin người dùng được dịch từ access token nó trả về id và quyền hạn
                if(decoded?.id) {
                    handleGetDetailUser(decoded?.id, data?.access_token);
                }
            }
        }
        if (isError) {
            console.error(data);
        }
    }, [isError, isSuccess]);

    const handleGetDetailUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({...res.data, access_token: token}));
        
    }
    
    const handleNavigateSignUp = () => {
        navigate('/sign-up');
    }

    const handleOnchangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleOnchangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSignIn = () => {
        mutation.mutate({ 
            email, 
            password 
        });
    }

    return (  
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <div style={{ backgroundColor: '#fff', display: 'flex', height: '450px' }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập vào tạo tài khoản</p>
                    <InputFormComponent placeholder="abc@gmail.com" onChange={handleOnchangeEmail}/>
                    <InputFormComponent placeholder="password" onChange={handleOnchangePassword}/>
                    {data?.status === 'ERR' && <div style={{color: 'red'}}>{data?.message}</div>}
                    <LoadingComponent isLoading={false}>
                        <ButtonComponent 
                            style={{ backgroundColor: 'rgb(255, 57, 69)', color: "#fff", width: '220px', padding: '25px 0', fontSize: '15px'}}
                            textButton="Đăng nhập" 
                            onClick={handleSignIn}
                        />
                    </LoadingComponent>
                    
                    <div>
                        <WrapperTextLight>Quên mật khẩu</WrapperTextLight>
                        <p style={{ fontSize: '14px' }}>
                            Chưa có tài khoản <WrapperTextLight onClick={handleNavigateSignUp}>Tạo tài khoản</WrapperTextLight>
                        </p>
                    </div>
                </WrapperContainerLeft>
                <WrapperContainerRigth>
                    <Image src={signIn} preview={false} alt='signin' height="203px" width='203px' />
                    <h4>Mua sắm tại</h4>
                </WrapperContainerRigth>
            </div>
        </div>
    );
}

export default SignInPage;