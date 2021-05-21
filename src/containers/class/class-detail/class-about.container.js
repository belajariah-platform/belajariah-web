import { useState, useEffect } from 'react'
import Rating from '@material-ui/lab/Rating'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Accordion, AccordionSummary, AccordionDetails, Dialog, withStyles, DialogContentText } from '@material-ui/core'

import {
  ImgCard,
  TxtCard,
  LineTxt,
  ViewCard,
  TitleCard,
  DescClass,
  TxtRating,
  ViewPrice,
  ImgUstadz,
  ViewAbout,
  TitleAbout,
  TitleUstadz,
  DescHeading,
  TxtBenefits,
  TxtOldPrice,
  TxtNewPrice,
  VideoHeading,
  BenefitsIcon,
  HeadingVideo,
  TxtDescVideo,
  ViewDescVideo,
  ChildBenefits,
  ViewDescAbout,
  ContainerCard,
  ContainerDesc,
  ImgCloseDialog,
  ThumbnailVideo,
  ViewInstructor,
  ContainerPrice,
  TitleDescAbout,
  ContainerAbout,
  ViewDescBenefits,
  ContainerBenefits,
} from './class-about.styled'
import { Images } from '../../../assets'
import { Buttons } from '../../../components'
import { LearningAPI, ClassAPI, PackageAPI } from '../../../api'
import { FormatRupiah, Response, TimeConvertToHour } from '../../../utils'

const ClassAbout = () => {
  const [state, setState] = useState([])
  const [count, setCount] = useState([])
  const [stateClass, setStateClass] = useState([])
  const [statePackage, setStatePackage] = useState([])
  const [dataStates] = useState({ skip: 0, take: 1, filter: [], filterString: '[]' })
  const [dataPackage] = useState({ skip: 0, take: 3, filter: [], filterString: '[]' })
  const [dataState] = useState({ skip: 0, take: 1000, filter: [], filterString: '[]' })

  const fetchDataClass = async ({ skip, take, filterString }) => {
    try {
      const response = await ClassAPI.GetAllClass(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateClass(response.data.data)
      }
    } catch (err) {
      return err
    }
  }

  const fetchDataPackage = async (state, code) => {
    try {
      let { skip, take, filterString } = state
      filterString='[{"type": "text", "field" : "class_code", "value": "CLC00000001"}]'
      const response = await PackageAPI.GetAllPackage(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStatePackage(response.data.data)
      }
    } catch (err) {
      return err
    }
  }

  const fetchDataLearning = async ({ skip, take, filterString }) => {
    try {
      // let { skip, take, filterString } = state
      filterString='[{"type": "text", "field" : "class_code", "value": "CLC00000001"}]'
      const response = await LearningAPI.GetAllLearning(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
        setCount(response.data.count)
      }
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    fetchDataClass(dataStates)
    fetchDataLearning(dataState)
    fetchDataPackage(dataPackage)
  }, [])

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const BenefitsCategory = [
    { id: 1, ValueBenefits: 'Akses Video Selamanya', BenefitsIcon: Images.IconAccessVideo },
    { id: 2, ValueBenefits: 'Webinar', BenefitsIcon: Images.IconWebinar },
    { id: 3, ValueBenefits: 'Ringkasan Materi', BenefitsIcon: Images.IconMaterial },
    { id: 4, ValueBenefits: 'Akses Grub chat Khusus', BenefitsIcon: Images.IconAccessGrup },
    { id: 5, ValueBenefits: 'Akses Konsultasi', BenefitsIcon: Images.IconConsultation },
    { id: 6, ValueBenefits: 'Sertifikat & Hasil evaluasi', BenefitsIcon: Images.IconCertificateBlack },
  ]

  const VideoClass = () => {
    return (
      <Dialog
        open={open}
        style={{ backgroundColor: '#0f1223e6' }}
        maxWidth={630}>
        <ImgCloseDialog onClick={handleClose} src={Images.IconClose} />
        <VideoHeading>
          <HeadingVideo autoPlay>
            <source src='https://www.belajariah.com/video_pembelajaran/TrailerMini.mp4' type='video/mp4' />
          </HeadingVideo>
          <ViewDescVideo>
            <TxtDescVideo>Belajar Al-Qur’an dari dasar dengan metode yang mudah dan menyenangkan.</TxtDescVideo>
            <Buttons width={'300px'} height={'50px'} fontSize={'14px'} padding={'0% 2%'} backgroundColor={'#FF8E26'}>BELAJAR SEKARANG</Buttons>
          </ViewDescVideo>
        </VideoHeading>
      </Dialog>
    )
  }

  const Heading = () => {
    return (
      <div>
        <ViewAbout>
          {stateClass.map((item, index) => {
            return (
              <DescHeading key={index}>
                <TitleAbout>{item.Class_Name}</TitleAbout>
                <ViewInstructor>
                  <ImgUstadz src={Images.ImgUstadzMaulana} />
                  <TitleUstadz>{item.Instructor_Name}</TitleUstadz>
                </ViewInstructor>
                <TxtRating>RATING</TxtRating>
                <Rating style={{ fontSize: 34, marginTop: 20, color: '#fff' }} value={item.Class_Rating} readOnly />
              </DescHeading>
            )
          })}
          <ThumbnailVideo onClick={handleClickOpen} src={Images.ImgThumbnailClass} />
          <VideoClass />
        </ViewAbout>
        <ViewDescAbout>
          <TitleDescAbout>Deskripsi</TitleDescAbout>
          {stateClass.map((item, index) => {
            return (
              <DescClass key={index}>{item.Class_Description}</DescClass>
            )
          })}
        </ViewDescAbout>
      </div>
    )
  }

  const CardClassDesc = () => {
    return (
      <div>
        <ImgCard src={Images.IconBenefitsTopic} />
        <ContainerCard>
          <TitleCard>Topik yang dibahas</TitleCard>
          <ViewCard>
            <TxtCard>{count} Video</TxtCard>
            {stateClass.map((item, index) => {
              return (
                <TxtCard key={index}>{TimeConvertToHour(item.Total_Video_Duration)}</TxtCard>
              )
            })}
          </ViewCard>
        </ContainerCard>
      </div>
    )
  }

  const ClassDesc = () => {
    return (
      <ContainerDesc>
        {state.map((item, index) => {
          return (
            <Accordion style={{ backgroundColor: '#FEF9FF' }} key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />} style={{ fontWeight: 'bold' }}>
                {item.Title}
              </AccordionSummary>
              {item.SubTitles.map((list, index) => {
                const no = index + 1
                const name = no + '. ' + list.Sub_Title
                return (
                  <AccordionDetails key={index} style={{ padding: 0, display: 'grid' }}>
                    <div style={{ paddingLeft: 16, paddingRight: 16, }}>
                      <p>{name}</p>
                      {index != item.SubTitles.length-1 && <LineTxt  />}
                    </div>
                  </AccordionDetails>
                )
              })}
            </Accordion>
          )
        })}
      </ContainerDesc>
    )
  }

  const CardClassBenefits = () => {
    return (
      <div>
        <ImgCard src={Images.IconCardBenefits} />
        <ContainerCard>
          <TitleCard>Benefit yang diperoleh</TitleCard>
          <TxtCard>Benefit apa saja yang akan diperoleh?</TxtCard>
        </ContainerCard>
      </div>
    )
  }

  const ClassBenefits = () => {
    return (
      <ContainerBenefits>
        <ChildBenefits>
          {BenefitsCategory.map((item, index) => {
            return (
              <div key={index}>
                <ViewDescBenefits >
                  <BenefitsIcon src={item.BenefitsIcon} />
                  <TxtBenefits>{item.ValueBenefits}</TxtBenefits>
                </ViewDescBenefits>
              </div>
            )
          })}
        </ChildBenefits>
      </ContainerBenefits>
    )
  }

  const ClassPrice = () => {
    return (
      <ContainerPrice>
        <ViewPrice>
          <div>
            <TxtOldPrice><s>Rp{FormatRupiah(statePackage.length != 0 && statePackage[0].Price_Package)} - Rp{FormatRupiah(statePackage.length != 0 && statePackage[2].Price_Package)}</s></TxtOldPrice>
            <TxtNewPrice>Rp{FormatRupiah(statePackage.length != 0 && statePackage[0].Price_Discount)} - Rp{FormatRupiah(statePackage.length != 0 && statePackage[2].Price_Discount)}</TxtNewPrice>
          </div>
          <div>
            <Buttons width={'240px'} height={'65px'} fontSize={'16px'} padding={'0% 10%'} backgroundColor={'#FF8E26'}>BELAJAR SEKARANG</Buttons>
          </div>
        </ViewPrice>
      </ContainerPrice>
    )
  }

  return (
    <ContainerAbout>
      <Heading />
      <CardClassDesc />
      <ClassDesc />
      <CardClassBenefits />
      <ClassBenefits />
      <ClassPrice />
    </ContainerAbout>
  )
}

export default ClassAbout