import PropTypes from 'prop-types'
// import CircularProgress from '@material-ui/core/CircularProgress'

import { ButtonLogin } from './button.styled'

const Buttons = (props) => {
  return(
    <ButtonLogin onClick={() => props.onClick}>
      {props.title}
      {props.loading}
    </ButtonLogin>
  )
}

export default Buttons

Buttons.propTypes = {
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  style: PropTypes.object,
  color: PropTypes.string,
  title: PropTypes.string,
  loading : PropTypes.bool,
}