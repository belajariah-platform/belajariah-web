import styled, { css } from 'styled-components'

export const ContainerHeadingLog = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 1% 10% 0% 10%;
    background-color: #951CB3;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const ViewHeadingLog = styled.div`
    display: flex;
    padding: 12% 0% 0% 0%;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const ContainerProfileEdit = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 1% 10% 8% 10%;
    background-color: #FEF9FF;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const ViewContainerProfileEdit = styled.div`
    display: flex;
    margin: 40px 0px 0px 0px;
    justify-content: space-between;`

export const ViewInput = styled.div`
    width: 50%;
    margin: 0px 30px;`

export const TitleContainer = styled.p`
    color: #343434;
    font-size: 26px;
    font-weight: 700;
    margin: 20px 0px 5px 0px;`

export const TitleDescContainer = styled.p`
    margin: 0px;
    color: #343434;
    font-size: 18px;
    font-weight: 500;`

export const ViewButton = styled.div`
    padding: 0% 0% 0% 0%;
    margin: 50px 200px 0px 0px;`