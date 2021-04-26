import styled from 'styled-components'

const Gap = styled.div`
  width: 100%;
  height: 16px;
`

const Logo = styled.img`
 width: 24px;
 height: 24px;
 margin-right: 8px;
`

const Title = styled.p`
color: #fff;
margin: -2px 0;
font-size: 20px;
font-weight: bold;
`

const Subtitle = styled.p`
color: #fff;
font-size: 12px;
`

const ImageMail = styled.img`
 width: 256px;
 height: 256px;
 margin-bottom: -8px;
`

const DividerText = styled.hr`
 border: 0;
 outline: 0;
 color: black;
 opacity: 0.8;
 height: 1.2em;
 line-height: 1em;
 margin: 14px 0 2px;
 position: relative;
 text-align: center;
 &:before {
   left: 0;
   top: 50%;
   width: 100%;
   height: 1px;
   content: '';
   background: black;
   position: absolute;
 }
 &:after {
   color: #000;
   content: 'atau';
   font-size: 12px;
   padding: 0 2.5em;
   position: relative;
   line-height: 1.5em;
   display: inline-block;
   background-color: #fcfcfa;
 }
`

const ContainerGoogle = styled.div`
 display: flex;
 margin-top: -6px;
 align-items: center;
 flex-direction: row;
 justify-content: center;
`

const ContainerButton = styled.div`
 display: flex;
 margin-top: -6px;
 align-items: center;
 flex-direction: row;
 justify-content: center;
`

export {
  Gap,
  Logo,
  Title,
  Subtitle,
  ImageMail,
  DividerText,
  ContainerButton,
  ContainerGoogle,
}