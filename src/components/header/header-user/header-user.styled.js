import { Images } from '../../../assets'
import styled, { css } from 'styled-components'

export const ViewInfo = styled.div`
    display: flex;
    align-items: center;`

export const ViewNotif = styled.div`
    margin: 0px 10px 0px 0px;`

export const SearchInput = styled.input`
    width: 100px;
    font-size: 16px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    padding: 10px 20px 10px 40px;
    background-color: transparent;
    background-position: 10px 10px; 
    transition: width 0.4s ease-in-out;
    -webkit-transition: width 0.4s ease-in-out;
    background-image: url(${Images.IconSearch});
    ${
    css`
    &:active {
        width: 100%;
        }
    &:focus {
        width: 100%;
        outline: none;
        }
    `}`

export const IconImg = styled.img`
    width: 20px;
    height: 20px;
    margin: 0px 10px 0px 0px;`

export const NoInvoice = styled.p`
    color: #AFAFAF;
    font-size: 12px;
    margin: 0px 0px 10px 10px;`

export const PaymentView = styled.div`
    margin: 0px 0px 0px 0px;`

export const DatePayment = styled.p`
    color: #343434;
    font-size: 12px;
    font-weight: 500;
    margin: 0px 0px 0px 0px;`

export const LineVertical = styled.div`
    height: 50px;
    margin: 0px 10px;
    border-left: 1.5px solid #AFAFAF;`

export const TitlePayment = styled.p`
    margin: 0px;
    color: #AFAFAF;
    font-size: 14px;
    font-weight: 500;`

export const TitleClassName = styled.p`
    color: #AFAFAF;
    font-size: 12px;
    margin: 0px 0px 0px 10px;`

export const containerNoTransact = styled.div`
    padding: -15px;
    margin: 0px 0px 0px 0px;`

export const TxtNoTransact = styled.p`
    color: #AFAFAF;
    margin: 5px 0px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;`

export const IconStyleNo = styled.img`
    top: 20px;
    width: 300px;
    height: auto;
    position: relative;`
