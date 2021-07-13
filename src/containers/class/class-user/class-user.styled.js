import styled, { css } from 'styled-components'

export const ContainerListUser = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 8% 10% 2% 10%;
    background-color: #FEF9FF;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        padding: 18% 10% 10% 10%;
        }
    `}`

export const ViewListUser = styled.div`
    margin: 0% 0% 0% 0%;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const ViewCard = styled.div`
    width: 40%;
    padding: 16px;
    display: flex;
    margin: 30px 0px;
    align-items: center;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0px 0px 12px rgb(0 0 0 / 8%);
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const ImgClass = styled.img`
    width: 116px;
    height: 124px;`

export const ViewTxtCard = styled.div`
    margin: 0px 0px 0px 10px;`

export const TitleClass = styled.p`
    margin: 0px;
    color: #343434;
    font-size: 16px;
    font-weight: 500;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        font-size: 12px;
        }
    `}`

export const ViewExam = styled.div`
    display: flex;
    margin: 6px 0px 6px 0px;
    justify-content: space-between;`

export const Exam = styled.div`
    display: flex;
    align-items: center;`

export const ImgExam = styled.img`
    margin: 0px 0px 0px 0px;`

export const TitleExam = styled.p`
    color: #343434;
    font-size: 12px;
    font-weight: 500;
    margin: 0px 0px 0px 6px;`

export const ViewProgress = styled.div`
    padding: 6px;
    display: flex;
    align-items: center;
    border-radius: 12px;
    background-color: #fae5ff70;`

export const TitleProgress = styled.p`
    color: #343434;
    font-size: 12px;
    font-weight: 700;
    margin: 0px 0px 4px 0px;`

export const TxtProgress = styled.p`
    color: #343434;
    font-size: 12px;
    font-weight: 700;
    margin: 0px 0px 0px 6px;`

export const BtnStart = styled.button`
    width: 30%;
    height: 30px;
    color: #951CB3;
    cursor: pointer;
    font-weight: 500;
    border-radius: 6px;
    border-style: double;
    border-color: #951CB3;
    background-color: #fae5ff70;`

export const ContainerNoListUser = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 12% 10% 6% 10%;
    background-color: #FEF9FF;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        padding: 18% 10% 10% 10%;
        }
    `}`

export const ViewNoListUser = styled.div`
    width: 60%;
    padding: 4% 0%;
    text-align: center;
    background-color: #fff;
    margin: 0% auto 0% auto;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const ImgNoList = styled.img`
    width: 40px;
    height: 55px;`

export const TxtNoList = styled.p`
    color: #343434;
    font-size: 18px;
    font-weight: 500;
    margin: 20px 0px 0px 0px;`
