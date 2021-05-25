import styled, { css } from 'styled-components'

export const Text = styled.p`
 color: ${props => props.color };
 margin: ${props => props.margin ? props.margin : '10px 0'};
 font-size: ${props => props.fontSize ? props.fontSize : '16px'};
`

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
 background-color: #D18DE3;
`

export const BtnClaim = styled.div`
 margin-left: 24px;
`

export const BtnCheckout = styled.div`
 width: 280px;
`

export const ContainerDetails = styled.div`
 margin: 0;
 display: flex;
 flex-direction: row;
 align-items: flex-end;
 justify-content: space-between;
 border-bottom: 1px solid silver;
`