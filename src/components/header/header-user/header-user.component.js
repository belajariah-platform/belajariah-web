import PropTypes from 'prop-types'
import React, { useState, useEffect, useRef } from 'react'
import {
  Grow,
  Paper,
  Badge,
  Avatar,
  Popper,
  MenuList,
  ClickAwayListener,
  Link,
} from '@material-ui/core'

import {
  ViewInfo,
  ViewNotif,
  SearchInput,
} from './header-user.styled'
import { Images } from '../../../assets'
import styles from '../../../assets/css/navbar.module.css'

const Header = (props) => {
  let islogin = true
  const [Changelogo, setChangeLogo] = useState(false)
  const [Changenavbar, setChangeNavbar] = useState(false)

  const ListNavbar = [
    { id: 1, TxtListNavbar: 'Kelas', route : '#' },
    { id: 2, TxtListNavbar: 'Tentang Kami', route : '#' },
    { id: 3, TxtListNavbar: 'Bacaan Inspiratif', route : '/blog' },
    { id: 4, TxtListNavbar: 'Bantuan', route : '#' },
  ]

  const MenusProfile = [
    { id: 1, TxtMenus: 'Profile', IconMenus: Images.IconProfile, route : '/profile' },
    { id: 2, TxtMenus: 'Kelas Saya', IconMenus: Images.IconClass, route : '#' },
    { id: 3, TxtMenus: 'Bantuan', IconMenus: Images.IconHelp, route : '#' },
    { id: 4, TxtMenus: 'Keluar', IconMenus: Images.IconExit, route : '#' },
  ]

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
    <nav className={Changenavbar ? (
      'ContainerNavbar active '
    ) : (
      props.variant == 'purple' ? 'ContainerNavbar purple' : 'ContainerNavbar'
    )}>
      <div>
        <div className={styles.ViewLinksNavbar}>
          <Link href='/'>
            <img src={Changelogo ? Images.BelajariahLogo : Images.BelajariahLogoWhite } width={42}/>
          </Link>
          <ul className={styles.Links}>
            {ListNavbar.map((item, index) => {
              return(
                <li key={index}>
                  <a href={item.route} className={Changenavbar ? 'Links active' : 'Links'}>{item.TxtListNavbar}</a>
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
                    backgroundColor: '#FFF',
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                  <Paper>
                    <img src={Images.IconTriangle} width={10} className={styles.IconTriangleNav} />
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
                        {MenusProfile.map((list, index) => {
                          return (
                            <a key={index} href={list.route}>
                              <div className={styles.ViewDescMenu}>
                                <img src={list.IconMenus} width={20} />
                                <p>{list.TxtMenus}</p>
                              </div>
                            </a>
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

Header.propTypes = {
  variant : PropTypes.string,
}

export default Header