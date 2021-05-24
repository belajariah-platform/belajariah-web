import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Tab, Tabs, AppBar, Box, Typography } from '@material-ui/core'

import ClassAbout from './class-about.container'
import { HeaderUser, } from '../../../components'
import ClassReview from './class-review.container'
import ClassInstructor from './class-instructor.container'
import {
  ViewHeadingLog,
  ContainerHeadingLog,
} from './class-detail.styled'

const ClassDetail = () => {
  const [value, setValue] = useState(0)

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
              <Tab {...a11yProps(0)} label='Tentang Kelas' style={{
                opacity: 1,
                fontSize: 16,
                color: '#fff',
                textTransform :'none',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20, }}/>
              <Tab {...a11yProps(1)} label='Instruktur' style={{
                opacity: 1,
                fontSize: 16,
                color: '#fff',
                textTransform :'none',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20, }} />
              <Tab {...a11yProps(2)} label='Ulasan' style={{
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

  return (
    <div>
      <HeaderUser />
      <ContainerHeading />
      <TabPanel value={value} index={0}>
        <ClassAbout />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ClassInstructor />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ClassReview />
      </TabPanel>
    </div>
  )
}

export default ClassDetail