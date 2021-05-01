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
 padding: 8% 10% 2%;
`

export const ContentBlog = styled.div`
 width: 100%;
 height: auto;
 display: flex;
 flex-wrap: wrap;
 flex-direction: row;
 justify-content: center;
`

export const CategoryButton = styled.a`
 height: 36px;
 color: #C4C4C4;
 font-size: 14px;
 font-weight: 500;
 margin-left: 3.5%;
 align-items: center;
 border-radius: 12px;
 display: inline-flex;
 border: 1px solid #C4C4C4;
 padding: 4px 18px 6px 20px;
 &:hover{
    cursor: pointer;
 }
`

export const Vector = styled.img`
 width: 5px;
 height: 10px;
 margin: 2px 0px 0px 12px;
`

export const Search = styled.img`
 width: 16px;
 height: 16px;
 opacity: 0.8;
&:hover{
 cursor: pointer;
}
`

export const Clear = styled.img`
 width: 12px;
 height: 12px;
 opacity: 0.7;
 &:hover{
   cursor: pointer;
 }
`

export const Triangle = styled.div`
  left: -22px;
  width: 22px;
  height: 26px;
  overflow: hidden;
  position: absolute;
  &:after{
   top: 10px;
   right: -6px;
   width: 11px;
   content: "";
   height: 11px;
   background: #fff;
   position: absolute;
   transform: rotate(45deg);
   box-shadow: -1px -1px 8px -2px rgba(0, 0, 0, 0.5);
  }
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