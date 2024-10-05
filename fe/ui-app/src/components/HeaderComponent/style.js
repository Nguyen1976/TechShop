import { Col, Row } from 'antd';
import styled from "styled-components"


export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: rgb(26, 148, 255);
    flex-wrap: nowrap;
`

export const WrapperTextHeaderCenter = styled(Col)`
    display: flex;
    align-items: center;
`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-align: left;
`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: white;
    gap: 10px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: white;
    white-space: nowrap;
`
