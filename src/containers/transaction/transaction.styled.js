import styled, { css } from 'styled-components'

export const Text = styled.p`
    color: ${props => props.color };
    margin: ${props => props.margin ? props.margin : '10px 0'};
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};`

export const Number = styled.p`
    width: 40px;
    color: white;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    padding-top: 8px;
    margin-right: 16px;
    text-align: center;
    align-items: center;
    border-radius: 20px;
    background-color: #D18DE3;`

export const BtnClaim = styled.div`
    margin-left: 24px;`

export const BtnCheckout = styled.div`
    width: 280px;`

export const ContainerDetails = styled.div`
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 1px solid silver;`

export const Container = styled.div`
    width: 100%;
    max-width: 100%;
    padding: 10% 10% 4% 10%;
    background-color: #FEF9FF;`

export const ViewContent = styled.div`
    display: flex;
    justify-content: space-between;`

export const ContainerFilter = styled.div`
    height: 100%;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;`

export const ContainerList = styled.div`
    width: 80%;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;`

export const TitleFilter = styled.p`
    margin: 0px;
    color: #343434;
    font-size: 20px;
    font-weight: 700;
    text-align: center;`

export const ViewInput = styled.div`
    margin: 10px 0px 20px 0px;`

export const IconImg = styled.img`
    width: 24px;
    height: 24px;
    margin: 0px 10px 0px 0px;`

export const PaymentView = styled.div`
    margin: 0px 0px 15px 0px;`

export const TitlePayment = styled.p`
    margin: 0px;
    color: #AFAFAF;
    font-size: 20px;
    font-weight: 500;`

export const LineVertical = styled.div`
    height: 70px;
    margin: 0px 10px;
    border-left: 1.5px solid #AFAFAF;`

export const TitleClassName = styled.p`
    color: #AFAFAF;
    font-size: 16px;
    margin: 0px 0px 0px 14px;`

export const NoInvoice = styled.p`
    color: #AFAFAF;
    font-size: 16px;
    margin: 20px 0px 20px 14px;`

export const DatePayment = styled.p`
    color: #343434;
    font-size: 16px;
    font-weight: 500;
    margin: 0px 0px 0px 0px;`

export const ContainerBtn = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    margin: 25px 0px 0px 0px;`

export const ViewDot = styled.div`
    height: 15px;
    border-radius: 20px;
    margin: 0px 6px 0px 0px;
    padding: 0px 5px 0px 5px;
    background: rgba(149,28,179,0.1);`

export const Dot = styled.p`
    color: #951CB3;
    font-size: 16px;
    font-weight: 900;
    margin: -8px 0px 0px 0px;
    padding: 0px 0px 0px 0px;`

export const TxtBtn = styled.p`
    color: #951CB3;
    font-size: 16px;
    font-weight: 500;
    margin: 0px 0px 0px 0px;`