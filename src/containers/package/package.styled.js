import styled, { css } from 'styled-components'

export const ContainerPackage = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 10% 10% 8% 10%;
    background-color: #FEF9FF;
    ${
    css`
    @media (max-width: 768px) {
        width: 100%;
        }
    `}`

export const ViewContainerPackage = styled.div`
    display: flex;
    padding: 0px 80px;
    margin: 40px 0px 0px 0px;
    justify-content: space-between;`

export const TitleContainer = styled.p`
    color: #343434;
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    margin: 20px 0px 5px 0px;`

export const TitleDescContainer = styled.p`
    margin: 0px;
    color: #343434;
    font-size: 18px;
    font-weight: 500;
    text-align: center;`

export const ClassPackage = styled.div`
    transition: 0.4s ease;
    margin: 0px 0px 0px 0px;
    -webkit-transition: 0.4s ease;
    box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
    &:hover {
        transform: scale(1.08);
        -webkit-transform: scale(1.08);
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
    }`

export const ViewTitleClassPackage = styled.div`
    width: 300px;
    padding: 15px 0px;
    text-align: center;
    background-color: #951CB3;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;`

export const TitleClassPackage = styled.p`
    margin: 0px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;`

export const ViewDescPackage = styled.div`
    width: 300px;
    padding: 30px;
    text-align: center;
    background-color: #fff;
    transition: 0.4s ease;
    margin: -24px 0px 0px 0px;
    -webkit-transition: 0.4s ease;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    &:hover {
        border: 2px solid #951CB3;
    }`

export const TriangleImg = styled.img`
    width: 24px;
    height: 10px;
    margin: 0px 0px 10px 0px;`

export const TxtOldPrice = styled.p`
    color: #D2D2D2;
    font-size: 16px;
    margin: 5px 0px 5px 0px;`

export const TxtNewPrice = styled.p`
    color: #951CB3;
    font-size: 28px;
    font-weight: 700;
    margin: 0px 0px 0px 0px;`

export const LineTxt = styled.hr`
    width: 100%;
    margin: 18px 0px;
    border-style: inset;
    border: 0.1px solid #D2D2D2;`

export const TxtDescTitle = styled.p`
    color: #343434;
    font-size: 16px;
    font-weight: 600;
    margin: 5px 0px 25px 0px;`

export const ViewDescBenefits = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    margin: 15px 0px 15px 0px;`

export const BenefitsIcon = styled.img`
    margin: 0px 20px 0px 0px;`

export const TxtBenefits = styled.p`
    color: #343434;
    font-size: 16px;
    font-weight: 600;
    margin: 0px 0px 0px 0px;`

export const ViewButtons = styled.div`
    margin: 50px 0px 0px 0px;`