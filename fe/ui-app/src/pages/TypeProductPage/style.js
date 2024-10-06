import { Col, Pagination } from "antd";
import styled from "styled-components";

export const WrapperProducts = styled(Col)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: start;
    gap: 20px;
    margin-top: 30px;
`
export const WrapperNav = styled(Col)`
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: fit-content;
    margin-top: 35px;
`

export const WrapperPagination = styled(Pagination)`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`