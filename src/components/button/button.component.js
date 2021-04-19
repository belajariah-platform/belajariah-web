import { ButtonLogin } from './button.styled'

const Buttons = (props) => {
  return (
    <ButtonLogin
      color = {props.color}
      onClick = {props.onClick}
      backgroundColor = {props.backgroundColor}>
      {props.children}
    </ButtonLogin>
  )
}

export default Buttons