import { Images } from '../../../assets'
import React, { useState, useEffect } from 'react'
import { 
  ViewInfo, 
  ViewNotif,
  SearchInput, 
} from './header-user.styled'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Avatar from '@material-ui/core/Avatar'
import styles from '../../../assets/css/navbar.module.css'

const Header = () => {
  let islogin = true
  const [Changelogo, setChangeLogo] = useState(false)
  const [Changenavbar, setChangeNavbar] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', ChangeComponentNav)
    return () => window.removeEventListener('scroll', ChangeComponentNav)
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

  const [anchorEl, setAnchorEl] = useState(null)
  const handleClose = () => {
    setAnchorEl(null)
  }

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <nav className={Changenavbar ? 'ContainerNavbar active ' : 'ContainerNavbar'}>
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
      {!islogin ? 
      <div className={styles.ComponentNavbar}>
        <div><SearchInput></SearchInput></div>
        <div><p>Masuk</p></div>
      </div> : 
      <ViewInfo>
        <div>
          <Avatar 
            src={Images.IconProfileDefault}
            variant='contained'
            onClick={openMenu}
            className={styles.IconProfile}/>
          <Menu
            id='lame-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
              <div>
              <div className={styles.ViewDescMenu} onClick={handleClose}>
                <img src={Images.IconProfile} width={20} />
                <p>Profile</p>
              </div>
              <div className={styles.ViewDescMenu} onClick={handleClose}>
                <img src={Images.IconClass} width={20} />
                <p>Kelas Saya</p>
              </div>
              <div className={styles.ViewDescMenu} onClick={handleClose}>
                <img src={Images.IconHelp} width={20} />
                <p>Bantuan</p>
              </div>
              <div className={styles.ViewDescMenu} onClick={handleClose}>
                <img src={Images.IconExit} width={20} />
                <p>Keluar</p>
              </div>
              </div>
          </Menu>
        </div>
        <div>
          <img src={Images.IconNotications} width={18} />
        </div>
      </ViewInfo>}
    </nav>
  )
}


export default Header