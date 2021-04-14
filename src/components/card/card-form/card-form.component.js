import { Container, ContainerLogin, ContainerMain, ContainerLogoIcon } from './card-form.styled'
import { Images } from '../../../assets'

const CardForm = () => {
  return(
    <Container >
      <ContainerMain>
        <ContainerLogin>
          <ContainerLogoIcon>
            <img src={Images.BelajariahLogo} width={34} height={52} />
          </ContainerLogoIcon>
        </ContainerLogin>
      </ContainerMain>
    </Container>
  )
}

export default CardForm