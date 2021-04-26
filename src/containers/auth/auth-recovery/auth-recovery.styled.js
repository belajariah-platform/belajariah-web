import styled from 'styled-components'

const Gap = styled.div`
  width: 100%;
  height: 16px;
`

const Title = styled.p`
color: #ffffff;
margin: -2px 0;
font-size: 20px;
font-weight: bold;
`

const Subtitle = styled.p`
color: #ffffff;
font-size: 12px;
max-width: 336px;
text-align: center;
`

const ImageMail = styled.img`
 width: 252px;
 height: 224px;
 margin-bottom: -28px;
`

const TitleCard = styled.p`
 color: #000;
 margin: -8px 0 4px;
 font-size: 28px;
 font-weight: bold;
`

const TextPurple = styled.strong`
 color: #A734C3;
 font-size: 12px;
 font-weight: bold;
`

const SubtitleCard = styled.p`
 color: #000;
 font-size: 12px;
 margin: 12px 0 4px;
`

const SubtitleLink = styled.a`
 color: #ffffff;
 font-size: 12px;
 margin-top: 12px;
 text-align: center;
 &:hover{
   text-decoration: underline;
   cursor: pointer;
 }
`

const ContainerForm = styled.div`
 display: flex;
 flex-direction: column;
 width: 276px;
 margin-left: 36px;
`

const ContainerButton = styled.div`
 display: flex;
 margin-top: -6px;
 align-items: center;
 flex-direction: row;
 justify-content: center;
`

const ImageForgotPass = styled.img`
width: 144px;
height: 296px;
`

const ContainerRecovery = styled.div`
 display: flex;
 flex-direction: row;
`


export {
  Gap,
  Title,
  Subtitle,
  ImageMail,
  TitleCard,
  TextPurple,
  SubtitleCard,
  SubtitleLink,
  ContainerForm,
  ContainerButton,
  ImageForgotPass,
  ContainerRecovery,
}