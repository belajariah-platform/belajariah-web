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
 border: 0;
 outline: 0;
 color: black;
 opacity: 0.8;
 height: 1.2em;
 line-height: 1em;
 position: relative;
 text-align: center;
 margin: 12px 0 2px;
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
   line-height: 1.5em;
   position: relative;
   display: inline-block;
   background-color: #fcfcfa;
 }
`

export {
  Logo,
  DividerText,
  ContainerGoogle,
}