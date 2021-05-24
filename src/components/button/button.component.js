import PropTypes from 'prop-types'

import { ButtonLogin } from './button.styled'

const Buttons = (props) => {
  return (
    <ButtonLogin
      width={props.width}
      color={props.color}
      height={props.height}
      padding={props.padding}
      border={props.border}
      onClick={props.onClick}
      fontSize={props.fontSize}
      backgroundColor={props.backgroundColor}>
      {props.children}
    </ButtonLogin>
  )
}

export default Buttons

Buttons.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  title: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}