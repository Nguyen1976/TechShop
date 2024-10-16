import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import { WrapperContainerLeft, WrapperContainerRigth, WrapperTextLight } from "./style";
import { Image } from "antd";
import signIn from '../../assets/images/signIn.png';
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMutationHooks } from "../../hooks/userMutationHook";
import * as UserService from '../../services/UserService';
import * as message from '../../components/Message/Message'


function SignUpPage() {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');

    const mutation = useMutationHooks(
        data => UserService.signUpUser(data)
    )

    const { data, isSuccess, isError } = mutation;

    useEffect(() => {
        if(isSuccess) {
            message.success('Đăng ký thành công');
            navigate('/sign-in');
        }
        if(isError) {
            message.error(isError);
        }
    }, [isSuccess, isError]);

    const handleNavigateSignIn = () => {
        navigate('/sign-in');
    }

    const handleOnchangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleOnchangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleOnchangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleOnchangeName = (e) => {
        setName(e.target.value);
    }
    const handleOnchangePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleSignUp = () => {
        mutation.mutate({ 
            name,
            email, 
            password,
            confirmPassword,
            phone
        });
    }

    console.log(email, password, confirmPassword)

    return (  
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <div style={{ backgroundColor: '#fff', display: 'flex', height: '450px' }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập vào tạo tài khoản</p>
                    <InputFormComponent placeholder="tên" onChange={handleOnchangeName}/>
                    <InputFormComponent placeholder="abc@gmail.com" onChange={handleOnchangeEmail}/>
                    <InputFormComponent placeholder="password" onChange={handleOnchangePassword}/>
                    <InputFormComponent placeholder="confirm password" onChange={handleOnchangeConfirmPassword}/>
                    <InputFormComponent placeholder="phone" onChange={handleOnchangePhone}/>
                    {data?.status === 'ERR' && <div style={{color: 'red'}}>{data?.message}</div>}
                    <ButtonComponent 
                        style={{ backgroundColor: 'rgb(255, 57, 69)', color: "#fff", width: '220px', padding: '25px 0', fontSize: '15px'}}
                        textButton="Đăng ký" 
                        onClick={handleSignUp}
                    />
                    <div>
                        <p style={{ fontSize: '14px' }}>
                            Bạn đã có tài khoản <WrapperTextLight onClick={handleNavigateSignIn}>Đăng nhập</WrapperTextLight>
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

export default SignUpPage;