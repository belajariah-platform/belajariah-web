import { Images } from '../../../assets'
import styled, { css } from 'styled-components'

export const SearchInput = styled.input`
    width: 100px;
    font-size: 16px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #ccc;
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
