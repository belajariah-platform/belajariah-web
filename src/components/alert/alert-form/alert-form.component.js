import PropTypes from 'prop-types'

import {
  TxtAlert,
  IconAlert,
  ContainerAlert,
  ViewcontainerAlert,
} from './alert-form.styled'

const AlertForm = (props) => {
  return(
    <ContainerAlert {...props}>
      <IconAlert>i</IconAlert>
      <ViewcontainerAlert>
        <TxtAlert><strong>{props.success ? 'Berhasil' : 'Maaf!'}</strong> {props.title}</TxtAlert>
      </ViewcontainerAlert>
    </ContainerAlert>
  )
}

AlertForm.propTypes = {
  title : PropTypes.string,
  width : PropTypes.string,
  success : PropTypes.bool,
  noMargin : PropTypes.bool,
}

export default AlertForm