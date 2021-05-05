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

export const ContainerProfile = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 5% 10% 8% 10%;
    background-color: #FEF9FF;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const ViewProfile = styled.div`
    margin: 0px 0px 0px 0px;`

export const HeadingProfile = styled.div`
    display: flex;`

export const DescProfile = styled.div`
    padding: 0% 10%;
    margin: 20px 0px 10px 0px;`

export const ImgProfile = styled.img`
    width: 150px;`

export const DescHeadingProfile = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 0px 0px 20px;
    justify-content: space-between;`

export const ViewDescProfile = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 100px 0px 0px;`

export const TitleProfile = styled.p`
    color: #343434;
    font-size: 22px;
    margin: 5px 0px;
    font-weight: 700;`

export const ViewTxt = styled.div`
    display: flex;
    margin: 15px 0px 10px 0px;`

export const ImgIconProf = styled.img`
    width: 25px;
    height: 24px;
    margin: 0px 15px 0px 0px;`

export const IconViewTxt = styled.img`
    width: 20px;
    height: 21px;`

export const ViewTxtProfile = styled.div`
    margin: 0px 0px 0px 100px;`

export const TxtTitleProfile = styled.p`
    margin: 0px;
    color: #C4C4C4;
    font-size: 14px;
    font-weight: 400;`

export const TxtProfile = styled.p`
    margin: 0px;
    color: #343434;
    font-size: 20px;
    font-weight: 500;`

export const LineTxt = styled.hr`
    width: 100%;
    border-style: inset;
    margin: 8px 0px 0px 0px;
    border: 0.5px solid #34343429;`

export const ViewHeadingLog = styled.div`
    display: flex;
    padding: 12% 0% 0% 0%;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`