import styled, { css } from 'styled-components'

export const ContainerInstructor = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 2% 10% 4% 10%;
    background-color: #FEF9FF;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        padding: 55% 10% 25% 10%;
        }
    `}`

export const ViewContainer = styled.div`
    margin: 0px 0px 0px 0px;`

export const TitleContainer = styled.p`
    color: #343434;
    font-size: 24px;
    font-weight: 700;
    margin: 0px 0px 0px 0px;`

export const ViewHeading = styled.div`
    margin: 50px 0px 0px 0px;`

export const ImgUstadz = styled.img`
    width: 200px;
    margin: 0px 20px 0px 0px;`

export const ViewDescHeading = styled.div`
    margin: 0px 0px 0px 20px;`

export const TitleInstructor = styled.p`
    color: #343434;
    font-size: 22px;
    font-weight: 700;
    margin: 0px 0px 0px 0px;`

export const DescInstructor = styled.p`
    color: #343434;
    font-size: 18px;
    font-weight: 400;
    margin: 0px 0px 0px 0px;
    padding: 0px 240px 0px 0px;`

export const ViewDesc = styled.div`
    margin: 50px 0px 0px 0px;`

export const DescBiografi= styled.p`
    color: #343434;
    font-size: 16px;
    font-weight: 400;
    text-indent: 50px;
    text-align: justify;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;`

export const DescClass= styled.p`
    color: #343434;
    font-size: 16px;
    font-weight: 400;
    text-indent: 50px;
    text-align: justify;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;`