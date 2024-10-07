import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import { WrapperContainerLeft, WrapperContainerRigth, WrapperTextLight } from "./style";
import { Image } from "antd";
import signIn from '../../assets/images/signIn.png';
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

function SignInPage() {
    return (  
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <div style={{ backgroundColor: '#fff', display: 'flex', height: '450px' }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập vào tạo tài khoản</p>
                    <InputFormComponent placeholder="abc@gmail.com" />
                    <InputFormComponent placeholder="password"/>
                    <ButtonComponent 
                        style={{ backgroundColor: 'rgb(255, 57, 69)', color: "#fff", width: '220px', padding: '25px 0', fontSize: '15px'}}
                        textButton="Đăng nhập" 
                    />
                    
                    <div>
                        <WrapperTextLight>Quên mật khẩu</WrapperTextLight>
                        <p style={{ fontSize: '14px' }}>
                            Chưa có tài khoản <WrapperTextLight>Tạo tài khoản</WrapperTextLight>
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