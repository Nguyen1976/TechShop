import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";


export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    border-bottom: 1px solid #ccc;
    height: 44px;
    font-size: 16px;
`

export const WrapperProducts = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: start;
    gap: 20px;
`

export const WrapperBtnStyle = styled(ButtonComponent)`
    border: 1px solid rgb(11, 116, 229);
    color: rgb(11, 116, 229);
    background-color: #fff;
    margin-top: 10px;

    &:hover {
        background-color: rgb(11, 116, 229);
        color: white;
    }
`
