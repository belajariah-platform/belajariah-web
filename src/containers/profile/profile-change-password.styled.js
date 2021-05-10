import styled, { css } from 'styled-components'

export const ContainerChangePassword = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 1% 10% 5% 10%;
    background-color: #FEF9FF;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const TitleContainer = styled.p`
    color: #343434;
    font-size: 26px;
    font-weight: 700;`

export const ViewChangePassword = styled.div`
    display: flex;
    justify-content: space-between;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const ViewIllustration = styled.img`
    width: 600px;
    height: 400px;`

export const ViewFormChangePassword = styled.div`
    width: 100%;
    margin: 0px 50px 0px 50px;`

export const ViewButton = styled.div`
    padding: 0% 20% 0% 0%;
    margin: 80px 120px 0px 0px;`