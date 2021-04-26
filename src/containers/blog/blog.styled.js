import styled, { css } from 'styled-components'

export const Container = styled.div`
    background-color: #FAFAFA;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const Content = styled.div`
 width: 100%;
 height: 750px;
 padding-top: 5%;
 border: 1px solid black;
`