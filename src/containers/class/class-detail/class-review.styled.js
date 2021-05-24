import styled, { css } from 'styled-components'

export const ContainerReview = styled.div`
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

export const ViewRating = styled.div`
    width: 100%;
    display: flex;
    margin: 25px 0px 0px 0px;
    padding: 0px 0px 0px 0px;`

export const TitleRating = styled.p`
    color: #951CB3;
    font-size: 20px;
    font-weight: 800;
    margin: 0px 0px 0px 0px;`

export const TxtRating = styled.p`
    color: #951CB3;
    font-size: 52px;
    font-weight: 900;
    margin: 0px 0px 0px 0px;`

export const ViewReview = styled.div`
    width: 100%;
    margin: 60px 0px 0px 0px;
    padding: 0px 0px 0px 0px;`

export const Review = styled.div`
    display: flex;
    margin: 0px 0px 40px 0px;`

export const ReviewerImg = styled.img`
    width: 80px;
    height: 80px;
    margin: 0px 20px 0px 0px;`

export const TitleReviewer = styled.p`
    color: #343434;
    font-size: 20px;
    font-weight: 700;
    margin: 0px 0px 4px 0px;`

export const TxtReview = styled.p`
    color: #343434;
    font-size: 16px;
    font-weight: 500;
    text-align: justify;
    margin: 10px 0px 0px 0px;`

export const ViewTitleRating = styled.div`
    width: auto;
    text-align: center;`

export const ViewProgress = styled.div`
    width: 100%;
    line-height: 18px;
    margin: 4px 20px 0px 20px;`

export const ViewStar = styled.div`
    width: 14%;`

export const ButtonTxtMore = styled.a`
    color: #951CB3;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    text-align: center;`