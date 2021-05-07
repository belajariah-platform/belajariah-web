import styled, { css } from 'styled-components'

export const Container = styled.div`
 background-color: #fff;
 ${
 css`
 @media (max-width: 768px) {
  width: 100%;
  }
 `}`

export const Content = styled.div`
 width: 100%;
 height: auto;
 padding: 7% 10% 2%;
`

export const Heading = styled.div`
 display: flex;
 margin: 4px 0;
 flex-direction: row;
 align-items: flex-start;
 justify-content: space-between;
`

export const ContainerAuthor = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
`

export const Title = styled.p`
 font-size: 24px;
 font-weight: 700;
 margin: 24px 0px 8px;
 `

export const Author = styled.p`
 font-size: 14px;
 font-weight: 700;
 margin: 0px 4px 0px 0px;
 `

export const DateBlog = styled.p`
 color: #D4D4D4;
 font-size: 12px;
 margin: 2px 0px 24px;
 `

export const Icon = styled.img`
 width: 16px;
 height: 16px;
 `

export const Image = styled.img`
 width: 100%;
 height: 400px;
 border-radius: 20px;
`

export const Source = styled.p`
 margin: 0px;
 font-size: 14px;
 font-weight: 500;
 font-style: italic;
`

export const Divider = styled.hr`
margin: 48px 0px 28px;
`

export const ImgCard = styled.img`
 width: 100%;
 height: 120px;
 object-fit: cover;
`

export const TitleCard = styled.p`
 font-size: 16px;
 margin-left: 20px;
`

export const SubtitleCard = styled.p`
 font-size: 10px;
 margin-left: 20px;
`

export const ContainerArrow = styled.div`
 width: 100%;
 display: flex;
 position: absolute;
 flex-direction: row;
 justify-content: space-between;
`

export const ArrowLeft = styled.img`
 width: 16px;
 height: 32px;
 cursor: pointer;
`

export const ArrowRight = styled.img`
 width: 16px;
 height: 32px;
 cursor: pointer;
`

export const ContainerShare = styled.div`
 display: flex;
 align-items: center;
`

export const IconShare = styled.img`
 width: 24px;
 height: 24px;
 cursor: pointer;
 margin: 12px 8px;
`

export const Triangle = styled.div`
  top: -26px;
  right: 12px;
  width: 22px;
  height: 26px;
  overflow: hidden;
  position: absolute;
  &:after{
    right: 6px;
    width: 11px;
    content: "";
    bottom: -6px;
    height: 11px;
    background: #fff;
    position: absolute;
    transform: rotate(45deg);
    box-shadow: -1px -1px 8px -2px rgba(0, 0, 0, 0.5);
  }
`