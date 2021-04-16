import { Images } from '../../../assets'
import {
  Navbar,
  LiNavbar,
  UlNavbar,
  IconNavbar,
  ContainerNavbar,
} from './header-user.styled'

const Header = () => {
  return (
    <div>
      <Navbar>
        <ContainerNavbar>
          <IconNavbar><img src={Images.BelajariahLogo} width={64} height={95} /></IconNavbar>
          <UlNavbar>
            <LiNavbar><a href='#'>Home</a></LiNavbar>
            <LiNavbar><a href='#'>Home</a></LiNavbar>
            <LiNavbar><a href='#'>Home</a></LiNavbar>
            <LiNavbar><a href='#'>Home</a></LiNavbar>
          </UlNavbar>
        </ContainerNavbar>
      </Navbar>
    </div>
  )
}


export default Header