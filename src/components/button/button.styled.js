import styled, { css } from 'styled-components'

export const ButtonLogin = styled.button`
    width: 50px;
    height: 46px;
    border: none;
    line-height: 2;
    cursor: pointer;
    font-weight: 700;
    align-items: center;
    align-items: center;
    border-radius: 80px;
    justify-content: center;
    border: ${props => props.border};
    color: ${props => props.color ? props.color : '#fff'};
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '36px'};
    padding: ${props => props.padding ? props.padding : '0% 20%'};
    font-size: ${props => props.fontSize ? props.fontSize: '12px'};
    background-color: ${props => props.backgroundColor ? props.backgroundColor :  '#A734C3'};
    ${
    css`
    &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#FF8E26'};
    }
    &:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
        0px 3px 14px 2px rgba(0, 0, 0, 0.12);}
    `}
    `
