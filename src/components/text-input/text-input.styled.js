import styled from 'styled-components'

const Title = styled.p`
  font-size: 12px;
`

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: -4px 0px -10px;
  justify-content:space-between;
`

const ContainerPhone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content:space-between;
`

const ErrorMsg = styled.p`
  color: #CD5454;
  font-size: 10px;
  margin-bottom: 12px;
`
const InputIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`
export {
  Title,
  ErrorMsg,
  InputIcon,
  ContainerPhone,
  ContainerTitle,
}