import styled from 'styled-components'

export const ButtonLogin = styled.button`
    color: ${props => props.color ? props.color : '#fff'};
    width: 100%;
    height: 36px;
    border: none;
    line-height: 2;
    cursor: pointer;
    padding: 0% 20%;
    font-size: 12px;
    font-weight: 700;
    border-radius: 80px;
    align-items: center;
    background-color: ${props => props.backgroundColor ? props.backgroundColor :  '#A734C3'};`