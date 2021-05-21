import { Images } from '../../../assets'
import styled, { css } from 'styled-components'

export const ContainerAbout = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    background-color: #FEF9FF;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        padding: 55% 10% 25% 10%;
        }
    `}`

export const ViewAbout = styled.div`
    display: flex;
    padding: 2% 10%;
    background-size: cover;
    margin: 0px 0px 0px 0px;
    background-repeat: no-repeat;
    background-image: url(${Images.BackgroundClassAbout});`

export const ViewDescAbout = styled.div`
    padding: 2% 10%;
    margin: 0px 0px 0px 0px;`

export const TitleAbout = styled.p`
    margin: 0px;
    color: #fff;
    font-size: 30px;
    font-weight: 700;`

export const TitleDescAbout = styled.p`
    margin: 0px;
    color: #343434;
    font-size: 20px;
    font-weight: 700;`

export const ImgUstadz = styled.img`
    width: 80px;
    height: 80px;
    margin: 0px 20px 0px 0px;`

export const TitleUstadz = styled.p`
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin: 0px 0px 0px 0px;`

export const TxtRating = styled.p`
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin: 20px 0px 0px 0px;`

export const DescHeading = styled.div`
    margin: 0px 0px 0px 0px;
    padding: 0px 220px 0px 0px;`

export const VideoHeading = styled.div`
    height: auto;
    width: 622px;
    margin: 0px 0px 0px 0px;
    background-color: #951CB3;`

export const DescClass = styled.p`
    color: #343434;
    font-size: 16px;
    margin: 10px 0px;
    text-align: justify;`

export const ContainerCard = styled.div`
    padding: 1% 10%;
    margin: 0px 0px 0px 0px;
    background-color: #9926B5;`

export const TitleCard = styled.p`
    color: #fff;
    font-size: 22px;
    margin: 0px 0px;
    font-weight: 700;
    text-align: left;`

export const TxtCard = styled.p`
    color: #fff;
    font-size: 16px;
    margin: 2px 0px;
    font-weight: 500;
    text-align: left;`

export const ContainerDesc = styled.div`
    padding: 2% 10%;`

export const ContainerBenefits = styled.div`
    padding: 1% 10% 8% 10%;`

export const ViewDescBenefits = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    margin: 20px 0px 20px 0px;`

export const BenefitsIcon = styled.img`
    width: 38px;
    height: 35px;
    margin: 0px 30px 0px 0px;`

export const TxtBenefits = styled.p`
    color: #343434;
    font-size: 24px;
    font-weight: 600;
    margin: 0px 0px 0px 0px;`

export const ContainerPrice = styled.div`
    bottom: 0;
    width: 100%;
    position: fixed;
    padding: 1% 10%;
    background-color: #F9F9F9;
    border-radius: 40px 40px 0px 0px;`

export const ViewPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;`

export const TxtOldPrice = styled.p`
    color: #D2D2D2;
    font-size: 16px;
    margin: 5px 0px 5px 0px;`

export const TxtNewPrice = styled.p`
    color: #FF8E26;
    font-size: 28px;
    font-weight: 800;
    margin: 0px 0px 0px 0px;`

export const ChildBenefits = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);`

export const ViewInstructor = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px 0px 0px;`

export const HeadingVideo = styled.video`
    height: 350px;
    margin: 0px 0px 0px 0px;
    box-shadow: 5px 5px 20px rgba(52, 52, 52, 0.15);`

export const ViewCard = styled.div`
    display: flex;
    justify-content: space-between;`

export const ImgCard = styled.img`
    width: 125px;
    height: 90px;
    position: absolute;
    margin: -15px 0px 0px 0px;`

export const LineTxt = styled.hr`
    margin: 0px;
    border-width: 0.5px;
    border-style: inset;`

export const ThumbnailVideo = styled.img`
    width: 500px;
    height: 300px;
    cursor: pointer;
    margin: 0px 0px 0px 0px;`

export const ViewDescVideo = styled.div`
    display: flex;
    padding: 2% 3%;
    align-items: center;
    justify-content: space-between;`

export const TxtDescVideo = styled.p`
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    max-width: 360px;
    margin: 0px 0px 0px 0px;
    padding: 0px 9px 0px 0px;`

export const ImgCloseDialog = styled.img`
    left: 75%;
    width: 40px;
    z-index: 1500;
    cursor: pointer;
    position: fixed;
    margin: 0px 0px 0px 0px;
    ${
    css`
    &:hover {
        opacity: 0.5 ;
        }`
    }`
