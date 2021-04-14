import Link from 'next/link'
import { Images } from '../../../assets'

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </li>
      </ul>
      <img src={Images.IconAccepted}/>
    </header>
  )
}


export default Header