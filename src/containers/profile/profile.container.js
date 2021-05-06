import moment from 'moment'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Tab, Tabs, AppBar, Box, Typography, TextField } from '@material-ui/core'

import { UserAPI } from '../../api'
import { Images } from '../../assets'
import { Response } from '../../utils'
import ProfileEdit from './profile-edit.container'
import { Footer, HeaderUser } from '../../components'
import ProfileChangePassword from './profile-change-password.container'
import {
  LineTxt,
  ViewTxt,
  ImgProfile,
  TxtProfile,
  ImgIconProf,
  IconViewTxt,
  DescProfile,
  ViewProfile,
  TitleProfile,
  ViewTxtProfile,
  HeadingProfile,
  ViewHeadingLog,
  ViewDescProfile,
  TxtTitleProfile,
  ContainerProfile,
  DescHeadingProfile,
  ContainerHeadingLog,
} from './profile.styled'

const Profile = () => {
  const [value, setValue] = useState(0)
  const [stateUser, setStateUser] = useState([])
  const [dataState, setDataState] = useState({})
  const [loadingUser, setloadingUser] = useState(true)

  const fetchDataUser = async (email) => {
    email = 'herryheryanto22@gmail.com'
    try {
      setloadingUser(true)
      const response = await UserAPI.GetUser(email)
      if (response.status === Response.SUCCESS) {
        setStateUser(response.data.result)
      }
      setloadingUser(false)
    } catch (err) {
      setloadingUser(false)
      return err
    }
  }

  useEffect(() => {
    fetchDataUser(dataState)
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const a11yProps = (index) =>  {
    return{
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props
    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3} style={{ padding: 0 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  }

  const ContainerHeading = () => {
    return (
      <ContainerHeadingLog>
        <ViewHeadingLog>
          <AppBar position='static' style={{
            zIndex: 1,
            boxShadow: 'none',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#951CB3',
            justifyContent: 'space-between' }}>
            <Tabs value={value} onChange={handleChange} indicatorColor='secondary'>
              <Tab {...a11yProps(0)} label='Profile' style={{
                opacity: 1,
                fontSize: 16,
                color: '#fff',
                textTransform :'none',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20, }}/>
              <Tab {...a11yProps(1)} label='Edit Profile' style={{
                opacity: 1,
                fontSize: 16,
                color: '#fff',
                textTransform :'none',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20, }} />
              <Tab {...a11yProps(2)} label='Ubah Kata Sandi' style={{
                opacity: 1,
                fontSize: 16,
                color: '#fff',
                textTransform :'none',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20, }}/>
            </Tabs>
          </AppBar>
        </ViewHeadingLog>
      </ContainerHeadingLog>
    )
  }

  const Profile = () => {
    return (
      <ContainerProfile>
        <ViewProfile>
          <HeadingProfile>
            <ImgProfile src={Images.IconProfileDefault} />
            <DescHeadingProfile>
              <div>
                <TitleProfile>{stateUser.Full_Name}</TitleProfile>
                <div>
                  <ViewDescProfile>
                    <ImgIconProf src={Images.IconEmailPurple} />
                    <p>{stateUser.Email}</p>
                    <ViewDescProfile style={{ marginLeft: 40 }}>
                      <ImgIconProf src={Images.IconPhonePurple} />
                      <p>+{stateUser.Phone}</p>
                    </ViewDescProfile>
                  </ViewDescProfile>
                </div>
              </div>
            </DescHeadingProfile>
          </HeadingProfile>
          <div style={{ marginTop: 60, }}>
            <DescProfile>
              <ViewTxt>
                <IconViewTxt src={Images.IconProfile} />
                <ViewTxtProfile>
                  <TxtTitleProfile>Nama Lengkap</TxtTitleProfile>
                  <TxtProfile>{stateUser.Full_Name}</TxtProfile>
                </ViewTxtProfile>
              </ViewTxt>
              <LineTxt />
            </DescProfile>
            <DescProfile>
              <ViewTxt>
                <IconViewTxt src={Images.IconGender} />
                <ViewTxtProfile>
                  <TxtTitleProfile>Jenis Kelamin</TxtTitleProfile>
                  <TxtProfile>{stateUser.Gender}</TxtProfile>
                </ViewTxtProfile>
              </ViewTxt>
              <LineTxt />
            </DescProfile>
            <DescProfile>
              <ViewTxt>
                <IconViewTxt src={Images.IconUnion} />
                <ViewTxtProfile>
                  <TxtTitleProfile>Tanggal Lahir</TxtTitleProfile>
                  <TxtProfile>{stateUser.Birth ? moment(stateUser.Birth).format('DD MMMM YYYY') : ''}</TxtProfile>
                </ViewTxtProfile>
              </ViewTxt>
              <LineTxt />
            </DescProfile>
            <DescProfile>
              <ViewTxt>
                <IconViewTxt src={Images.IconAddress} />
                <ViewTxtProfile>
                  <TxtTitleProfile>Alamat</TxtTitleProfile>
                  <TxtProfile>{stateUser.Address}</TxtProfile>
                </ViewTxtProfile>
              </ViewTxt>
              <LineTxt />
            </DescProfile>
            <DescProfile>
              <ViewTxt>
                <IconViewTxt src={Images.IconProfession} />
                <ViewTxtProfile>
                  <TxtTitleProfile>Pekerjaan</TxtTitleProfile>
                  <TxtProfile>{stateUser.Profession}</TxtProfile>
                </ViewTxtProfile>
              </ViewTxt>
              <LineTxt />
            </DescProfile>
          </div>
        </ViewProfile>
      </ContainerProfile>
    )
  }

  return (
    <div>
      <HeaderUser />
      <ContainerHeading />
      <TabPanel value={value} index={0}>
        <Profile/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileEdit/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProfileChangePassword/>
      </TabPanel>
      <Footer />
    </div>
  )
}

export default Profile