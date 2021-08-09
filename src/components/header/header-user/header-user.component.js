import PropTypes from 'prop-types'
import React, { useState, useEffect, useRef } from 'react'
import {
  Link,
  Grow,
  Paper,
  Badge,
  Avatar,
  Popper,
  MenuList,
  ClickAwayListener,
} from '@material-ui/core'

import {
  IconImg,
  ViewInfo,
  NoInvoice,
  ViewNotif,
  IconStyleNo,
  SearchInput,
  PaymentView,
  DatePayment,
  LineVertical,
  TitlePayment,
  TxtNoTransact,
  TitleClassName,
  containerNoTransact,
} from './header-user.styled'
import { Images } from '../../../assets'
import { Buttons } from '../../../components'
import styles from '../../../assets/css/navbar.module.css'

const Header = (props) => {
  let islogin = true
  let isTransact = false
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
  const anchorRefPayment = useRef(null)
  const [open, setOpen] = useState(false)
  const [openPayment, setOpenPayment] = useState(false)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleTogglePayment = () => {
    setOpenPayment((prevOpenPayment) => !prevOpenPayment)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const handleClosePayment = (event) => {
    if (anchorRefPayment.current && anchorRefPayment.current.contains(event.target)) {
      return
    }
    setOpenPayment(false)
  }

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  const handleListKeyDownPayment = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpenPayment(false)
    }
  }

  const NoTransact = () => {
    return (
      <containerNoTransact>
        <TxtNoTransact>Tidak ada pembayaran tersedia</TxtNoTransact>
        <IconStyleNo src={Images.IconNoTransact} />
      </containerNoTransact>
    )
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
                ref={anchorRefPayment}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup='true'
                onClick={handleTogglePayment}
                style={{ cursor: 'pointer' }}
              />
              <Popper open={openPayment} anchorEl={anchorRefPayment.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <div>
                    <img src={Images.IconTriangle} width={10} className={styles.IconTriangleNavPayment} />
                    <Grow
                      {...TransitionProps}
                      style={{
                        width: 320,
                        opacity: 1,
                        padding: 15,
                        marginTop: 3,
                        marginLeft: -120,
                        backgroundColor: '#FFF',
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                      <Paper>
                        <ClickAwayListener onClickAway={handleClosePayment}>
                          <MenuList style={{ padding: 0 }} autoFocusItem={openPayment} id='menu-list-grow' onKeyDown={handleListKeyDownPayment}>
                            {isTransact ? (
                              <div>
                                <PaymentView>
                                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                      <IconImg src={Images.IconPending} />
                                      <TitlePayment>Menunggu</TitlePayment>
                                    </div>
                                    <DatePayment>12/04/2021 15:35</DatePayment>
                                  </div>
                                  <div style={{ display: 'flex', marginTop: 10 }}>
                                    <LineVertical />
                                    <div>
                                      <TitleClassName>Belajar Al-Qur’an dengan metode yang mudah dan menyenangkan</TitleClassName>
                                      <NoInvoice>INV-XXX000XX</NoInvoice>
                                    </div>
                                  </div>
                                </PaymentView>
                                <PaymentView>
                                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                      <IconImg src={Images.IconComplete} />
                                      <TitlePayment>Menunggu</TitlePayment>
                                    </div>
                                    <DatePayment>12/04/2021 15:35</DatePayment>
                                  </div>
                                  <div style={{ display: 'flex', marginTop: 10 }}>
                                    <LineVertical />
                                    <div>
                                      <TitleClassName>Belajar Al-Qur’an dengan metode yang mudah dan menyenangkan</TitleClassName>
                                      <NoInvoice>INV-XXX000XX</NoInvoice>
                                    </div>
                                  </div>
                                </PaymentView>
                                <PaymentView>
                                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                      <IconImg src={Images.IconFailed} />
                                      <TitlePayment>Menunggu</TitlePayment>
                                    </div>
                                    <DatePayment>12/04/2021 15:35</DatePayment>
                                  </div>
                                  <div style={{ display: 'flex', marginTop: 10 }}>
                                    <LineVertical />
                                    <div>
                                      <TitleClassName>Belajar Al-Qur’an dengan metode yang mudah dan menyenangkan</TitleClassName>
                                      <NoInvoice>INV-XXX000XX</NoInvoice>
                                    </div>
                                  </div>
                                </PaymentView>
                              </div>
                            ) : ( <NoTransact/> )}
                            

                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  </div>
                )}
              </Popper>
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