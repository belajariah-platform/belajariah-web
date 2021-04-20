import {
  Container,
  ContainerMain,
  ContainerLogin,
  ContainerLogoIcon
} from './card-form.styled'
import { Images } from '../../../assets'

const CardForm = (props) => {
  return(
    <Container>
      <ContainerMain>
        <ContainerLogin big={props.big}>
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