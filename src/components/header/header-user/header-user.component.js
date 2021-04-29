import React, { useState, useEffect, useRef } from 'react'
import {
  Grow,
  Paper,
  Badge,
  Avatar,
  Popper,
  MenuList,
  ClickAwayListener,
} from '@material-ui/core'

import {
  ViewInfo,
  ViewNotif,
  SearchInput,
} from './header-user.styled'
import { Images } from '../../../assets'
import styles from '../../../assets/css/navbar.module.css'

const Header = () => {
  let islogin = true
  const [Changelogo, setChangeLogo] = useState(false)
  const [Changenavbar, setChangeNavbar] = useState(false)

  const ListNavbar = [
    { id: 1, TxtListNavbar: 'Kelas'},
    { id: 2, TxtListNavbar: 'Tentang Kami'},
    { id: 3, TxtListNavbar: 'Bacaan Inspiratif'},
    { id: 4, TxtListNavbar: 'Bantuan'},
  ]

  const MenusProfile = [
    { id: 1, TxtMenus: 'Profile', IconMenus: Images.IconProfile },
    { id: 2, TxtMenus: 'Kelas Saya', IconMenus: Images.IconClass },
    { id: 3, TxtMenus: 'Bantuan', IconMenus: Images.IconHelp },
    { id: 4, TxtMenus: 'Keluar', IconMenus: Images.IconExit },
  ]

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

  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  return (
    <nav className={Changenavbar ? 'ContainerNavbar active ' : 'ContainerNavbar'}>
      <div>
        <div className={styles.ViewLinksNavbar}>
          <img src={Changelogo ? Images.BelajariahLogo : Images.BelajariahLogoWhite } width={42} />
          <ul className={styles.Links}>
            {ListNavbar.map((item, index) => {
              return(
                <li key={index}>
                  <a href='#' className={Changenavbar ? 'Links active' : 'Links'}>{item.TxtListNavbar}</a>
                </li>
              )
            })}
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
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup='true'
              onClick={handleToggle}
              className={styles.IconProfile}/>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    padding: 5,
                    marginTop: 15,
                    marginRight: 150,
                    borderTopLeftRadius: 15,
                    backgroundColor: '#FFF',
                    borderBottomRightRadius: 15,
                    borderBottomLeftRadius: 15,
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                  <Paper>
                    <img src={Images.IconTriangle} width={10} className={styles.IconTriangleNav} />
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
                        {MenusProfile.map((list, index) => {
                          return (
                            <div className={styles.ViewDescMenu} onClick={handleClose} key={index}>
                              <img src={list.IconMenus} width={20} />
                              <p>{list.TxtMenus}</p>
                            </div>
                          )
                        })}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
          <ViewNotif>
            <Badge badgeContent={9} color='secondary'>
              <img src={Changelogo ? Images.IconShop : Images.IconShopWhite } width={20}
                // ref={anchorRef}
                // aria-controls={open ? 'menu-list-grow' : undefined}
                // aria-haspopup='true'
                // onClick={handleToggle} 
                />
            </Badge>
          </ViewNotif>
        </ViewInfo>}
    </nav>
  )
}


export default Header