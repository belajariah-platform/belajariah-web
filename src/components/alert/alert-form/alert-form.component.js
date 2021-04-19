import {
  TxtAlert,
  IconAlert,
  ContainerAlert,
  ViewcontainerAlert,
} from './alert-form.styled'

const AlertForm = () => {
  return(
    <ContainerAlert>
      <IconAlert>i</IconAlert>
      <ViewcontainerAlert>
        <TxtAlert><strong>Maaf!</strong> Alamat Email atau Kata sandi<br></br>yang anda masukan tidak valid</TxtAlert>
      </ViewcontainerAlert>
    </ContainerAlert>
  )
}

export default AlertForm