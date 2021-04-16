import Link from 'next/link'
import { Title } from '../../../styles/global.styled'
import { Images } from '../../../assets'

const Header = () => {
  return (
    <header>
      <Title className='one'>hello</Title>
      <ul>
        <li>
          <Link href='/'>
            <p className='one'>Home</p>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <p className='one'> About</p>
          </Link>
        </li>
        <li>
          <Link href='/login'>
            <p className='one'>Login</p>
          </Link>
        </li>
      </ul>
      <img src={Images.IconAccepted}/>

      <style jsx>{`  
        .one {
          text-align : 'center';
          font-family : 'Lato';
        }
      `}</style>
    </header>
  )
}


export default Header