import styled from 'styled-components'

const Title = styled.p`
  font-size: 14px;
`

const FlexRow = styled.div`
  display: flex;
  margin: -4px 0px -10px;
  flex-direction: row;
  align-items: flex-end;
  justify-content:space-between;
`

const ErrorMsg = styled.p`
  margin-bottom: 12px;
  color: #CD5454;
  font-size: 10px;
`
const InputIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`
export {
  Title,
  FlexRow,
  ErrorMsg,
  InputIcon,
}