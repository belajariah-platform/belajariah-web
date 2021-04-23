import styled from 'styled-components'

const Gap = styled.div`
  width: 100%;
  height: 16px;
`

const TitleCard = styled.p`
 color: #000;
 font-size: 28px;
 font-weight: bold;
 margin: -8px 0 4px;
`

const SubtitleCard = styled.p`
 color: #000;
 font-size: 12px;
 margin: 12px 0 4px;
`

const SubtitleLink = styled.a`
 color: blue;
 margin: 12px 0;
 font-size: 12px;
 text-align: center;
 &:hover{
   cursor: pointer;
   text-decoration: underline;
 }
`

export {
  Gap,
  TitleCard,
  SubtitleCard,
  SubtitleLink,
}