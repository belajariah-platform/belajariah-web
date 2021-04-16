import { Container, ContainerLogin, ContainerMain, ContainerLogoIcon } from './card-form.styled'
import { Images } from '../../../assets'
import { Login } from '../../../containers'

const CardForm = (props) => {
  return(
    <Container >
      <ContainerMain>
        <ContainerLogin>
          <ContainerLogoIcon>
            <img src={Images.BelajariahLogo} width={34} height={52} />
          </ContainerLogoIcon>
          {props.children}
        </ContainerLogin>
      </ContainerMain>
    </Container>
  )
}

export default CardForm