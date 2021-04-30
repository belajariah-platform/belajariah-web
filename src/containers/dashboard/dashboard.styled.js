import { Images } from '../../assets'
import styled, { css } from 'styled-components'

export const Container = styled.div`
    background-color: #FAFAFA;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const ContainerHeading = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 18% 10%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Images.BackgroundHeading});
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        padding: 55% 10% 25% 10%;
        }
    `}`

export const ContainerClass = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 1% 10% 5% 10%;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const ContainerBenefit = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 5% 10%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Images.BackgroundBenefit});
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        padding: 10% 10% 10% 10%;
        }
    `}`

export const ContainerProof = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 3% 10%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Images.BackgroundProof});
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        padding: 10% 10%;
        }
    `}`

export const ContainerReview = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 3% 10% 5% 10%;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        padding: 10% 10% 3% 10%;
        }
    `}`

export const ContainerInspiratifStory = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 1% 10% 5% 10%;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

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
    padding: 12% 0% 0% 0%;
    display: flex;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const ViewClass = styled.div`
    margin: 0px 0px 0px 0px;`

export const ViewCategoryClass = styled.div`
    display: flex;
    margin: 0px 0px 35px 0px;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        }
    `}`

export const Class = styled.div`
    margin: 0px 0px 0px 0px;`

export const ViewCardClass = styled.div`
    padding: 0px 0px;
    margin: 0px 0px 0px 0px;
    `

export const CardClass = styled.div`
    display: flex;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    justify-content: space-between;`

export const TxtCardClass = styled.div`
    width: 330px;
    padding: 10px 15px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 5px 20px #34343412;`

export const ViewPrice = styled.div`
    margin: 0px 0px 0px 0px;`

export const Promo = styled.div`
    margin: 0px 0px 0px 0px;`

export const ViewBenefit = styled.div`
    display: flex;
    justify-content: space-between;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        display: contents;
        }
    `}`

export const ViewReview = styled.div`
    display: flex;
    margin: 40px 0px 0px 0px;
    justify-content: space-between;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        display: contents;
        }
    `}`

export const Reviews = styled.div`
    padding: 0px 80px 0px 10px;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        padding: 35px 0px;
        }
    `}`

export const ViewInputSearch = styled.div`
    flex: 1;
    margin: 0% 0% 0% 40%;`

export const InputSearch = styled.input`
    width: 120px;
    border: none;
    color: #FAFAFA;
    font-size: 15px;
    border-radius: 10px;
    background-size: 22px;
    box-sizing: border-box;
    background-color: #b32cd4;
    background-repeat: no-repeat;
    padding: 10px 20px 10px 45px;
    background-position: 10px 10px; 
    transition: width 0.4s ease-in-out;
    -webkit-transition: width 0.4s ease-in-out;
    background-image: url(${Images.IconSearchWhite});
    ${
    css`
    &:focus {
        width: 80%;
        outline: none;
        }
    &:-ms-input-placeholder{
	    color: #FAFAFA;
        }
    &:-moz-input-placeholder{
	    color: #FAFAFA;
        }
    &::-webkit-input-placeholder{
	    color: #FAFAFA;
        }
    `}`

export const IconReviews = styled.div`
    display: flex;`

export const Reviewer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px 0px 30px;`

export const ViewInspiratifStory = styled.div`
    display: flex;
    margin: 0px 0px 40px 0px;
    justify-content: space-between;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        display: contents;
        }
    `}`

export const Story = styled.div`
    background-color: #fff;
    padding: 0px 0px 0px 0px;
    border-radius: 35px 35px 0px 0px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    ${
    css`
    @media (max-width: 768px) {
        margin: 0% 0% 10% 0%;
        }
    `}`

export const ViewStory = styled.div`
    width: 320px;
    padding: 10px 10px;`

export const ViewWritingBelajariah = styled.div`
    display: flex;`

export const ViewTitle = styled.p`
    color: #fff;
    font-size: 38px;
    font-weight: 400;
    text-align: center;
    margin: 0px 0px 0px 0px;
    ${
    css`
    @media (max-width: 768px) {
        font-size: 24px;
        }
    `}`

export const ViewButton = styled.div`
    text-align: center;
    margin: 30px 0px 0px 0px;`

export const ButtonHeading = styled.button`
    width: auto;
    color: #fff;
    height: 46px;
    border: none;
    line-height: 2;
    padding: 0% 5%;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    border-radius: 80px;
    align-items: center;
    background-color: #A734C3;
    box-shadow: 0px 5px 40px #621775;`

export const ButtonInspiratif = styled.button`
    width: auto;
    color: #fff;
    height: 46px;
    border: none;
    line-height: 2;
    padding: 0% 5%;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    border-radius: 80px;
    align-items: center;
    background-color: #A734C3;
    box-shadow: 0px 10px 20px rgba(2, 2, 2, 0.15);`

export const TitleClass = styled.div`
    margin: 30px 0px;`

export const ClassTitle = styled.div`
    margin: 0px;
    color: #343434;
    font-size: 28px;
    font-weight: 700;
    ${
    css`
    @media (max-width: 768px) {
        text-align: center;
        }
    `}`

export const TitleBenefit = styled.p`
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    margin: 0px 0px 25px 0px;`

export const TitleProof = styled.div`
    text-align: center;
    margin: 0px 0px 0px 0px;`

export const ProofTitle = styled.p`
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    margin: 0px 0px 0px 0px;
    ${
    css`
    @media (max-width: 768px) {
        font-size: 20px;
        }
    `}`

export const ButtonProof = styled.div`
    text-align: center;
    margin: 40px 0px 0px 0px;`

export const ProofButton = styled.button`
    color: #fff;
    border: none;
    font-size: 16px;
    font-weight: 700;
    padding: 12px 38px;
    text-align: center;
    border-radius: 40px;
    margin: 0px 0px 0px 0px;
    background-color: #FF8E26;
    box-shadow: 0px 10px 20px #7F1998;`

export const TitleInspiratifStory = styled.div`
    text-align: center;
    margin: 30px 0px 50px 0px;`

export const InspiratifStoryTitle = styled.p`
    margin: 0px;
    color: #343434;
    font-size: 32px;
    font-weight: 700;`