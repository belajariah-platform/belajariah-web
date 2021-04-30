import { Images } from '../../assets'
import styled, { css } from 'styled-components'

export const Containerfooter = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 4% 0% 0% 0%;
    background-color: #A734C3;
    /* background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Images.BackgroundFooter}); */
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        padding: 6% 0% 0% 0%;
        /* padding: 6% 10% 6% 10%; */
        }
    `}`

export const ViewFooter = styled.div`
margin: 0px;
z-index: 1000;
padding: 0% 10%;`

export const TopFooter = styled.div`
display: flex;
margin: 0px 0px 0px 0px;
justify-content: space-between;
${
css`
@media (max-width: 768px) {
    display: contents;
    }
`}`

export const FooterPage = styled.div`
padding: 0px 0px 0px 0px;
${
css`
@media (max-width: 768px) {
    margin: 30px 0px 11px 0px;
    }
`}`

export const FooterInfo = styled.div`
padding: 0px 0px 0px 0px;`

export const FooterContact = styled.div`
padding: 0px 0px 0px 0px;
${
css`
@media (max-width: 768px) {
    margin: 35px 0px 0px 0px;
    }
`}`