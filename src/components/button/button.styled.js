import styled, { css } from 'styled-components'

export const ButtonLogin = styled.button`
    width: 50px;
    height: 46px;
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '36px'};
    border: none;
    line-height: 2;
    cursor: pointer;
    padding: ${props => props.padding ? props.padding : '0% 20%'};
    font-size: 12px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    border-radius: 80px;
    align-items: center;
    color: ${props => props.color ? props.color : '#fff'};
    background-color: ${props => props.backgroundColor ? props.backgroundColor :  '#A734C3'};
    /* ${
    css`
    &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color:grey;
    }
    &:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
        0px 3px 14px 2px rgba(0, 0, 0, 0.12);}
    `} */
    `
