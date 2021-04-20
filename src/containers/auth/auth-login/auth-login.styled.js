import styled from 'styled-components'

const Logo = styled.img`
 width: 24px;
 height: 24px;
 margin-right: 8px;
`

const ContainerGoogle = styled.div`
 display: flex;
 margin-top: -6px;
 align-items: center;
 flex-direction: row;
 justify-content: center;
`

const DividerText = styled.hr`
 line-height: 1em;
 position: relative;
 outline: 0;
 border: 0;
 color: black;
 text-align: center;
 height: 1.2em;
 margin: 12px 0 2px;
 opacity: 0.8;
 &:before {
   content: '';
   background: black;
   position: absolute;
   left: 0;
   top: 50%;
   width: 100%;
   height: 1px;
 }
 &:after {
   content: 'atau';
   position: relative;
   display: inline-block;
   color: black;
   padding: 0 2.5em;
   line-height: 1.5em;
   font-size: 12px;
   color: #000;
   background-color: #fcfcfa;
 }
`

export {
  Logo,
  DividerText,
  ContainerGoogle,
}