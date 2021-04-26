import PropTypes from 'prop-types'
import { Images } from '../../../assets'
import { useState, useEffect } from 'react'
import { SearchInput } from './header-user.styled'
import styles from '../../../assets/css/navbar.module.css'

const Header = (props) => {
  let islogin = true
  const [Changelogo, setChangeLogo] = useState(false)
  const [Changenavbar, setChangeNavbar] = useState(false)

  useEffect(() => {
    switch(props.variant) {
    case 'white' :
      setChangeLogo(true)
      setChangeNavbar(true)
      break
    case 'purple' :
      setChangeLogo(false)
      setChangeNavbar(false)
      break
    default :
      window.addEventListener('scroll', ChangeComponentNav)
      return () => window.removeEventListener('scroll', ChangeComponentNav)
    }
  })

  const ChangeComponentNav = () => {
    if (window.scrollY >= 80) {
      setChangeLogo(true)
      setChangeNavbar(true)
    } else {
      setChangeLogo(false)
      setChangeNavbar(false)
    }
  }

  return (
    <nav className={Changenavbar ? (
      'ContainerNavbar active '
    ) : (
      props.variant == 'purple' ? 'ContainerNavbar purple' : 'ContainerNavbar'
    )}>
      <div>
        <div className={styles.ViewLinksNavbar}>
          <img src={Changelogo ? Images.BelajariahLogo : Images.BelajariahLogoWhite } width={42} />
          <ul className={styles.Links}>
            <li><a href='#' className={Changenavbar ? 'Links active' : 'Links'}>Kelas</a></li>
            <li><a href='#' className={Changenavbar ? 'Links active' : 'Links'}>Tentang Kami</a></li>
            <li><a href='#' className={Changenavbar ? 'Links active' : 'Links'}>Bacaan Inspiratif</a></li>
            <li><a href='#' className={Changenavbar ? 'Links active' : 'Links'}>Bantuan</a></li>
          </ul>
        </div>
      </div>
      {!islogin ? <div className={styles.ComponentNavbar}>
        <div><SearchInput></SearchInput></div>
        <div><p>Masuk</p></div>
      </div> : <p>Helo</p>}
    </nav>
  )
}

Header.propTypes = {
  variant : PropTypes.string,
}

export default Header