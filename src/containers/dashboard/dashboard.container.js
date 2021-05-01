import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Tab, Tabs, AppBar, } from '@material-ui/core'
import {
  Class,
  Promo,
  Story,
  Reviews,
  Reviewer,
  ViewClass,
  CardClass,
  ViewPrice,
  ViewStory,
  ViewTitle,
  Container,
  ViewButton,
  ViewReview,
  ClassTitle,
  TitleClass,
  TitleProof,
  ProofTitle,
  ViewBenefit,
  IconReviews,
  ProofButton,
  ButtonProof,
  InputSearch,
  TitleBenefit,
  TxtCardClass,
  ButtonHeading,
  ViewCardClass,
  ContainerClass,
  ContainerProof,
  ViewHeadingLog,
  ContainerReview,
  ViewInputSearch,
  ButtonInspiratif,
  ContainerHeading,
  ContainerBenefit,
  ViewCategoryClass,
  ContainerHeadingLog,
  ViewInspiratifStory,
  InspiratifStoryTitle,
  TitleInspiratifStory,
  ViewWritingBelajariah,
  ContainerInspiratifStory,
} from './dashboard.styled'
import { Images } from '../../assets'
import { Response } from '../../utils'
import {
  Footer,
  HeaderUser,
  ShimmerPromo,
  ShimmerClass,
  ShimmerInspiratifStory,
} from '../../components'
import {
  EnumAPI,
  ClassAPI,
  StoryAPI,
  RatingAPI,
  PromotionAPI
} from '../../api'
import {
  ResponsiveClass,
  ResponsivePromo,
} from '../../utils'
import styles from '../../assets/css/dashboards.module.css'

const Dashboards = () => {
  const islogin = true
  const [selectedTab, setSelectedTab] = useState(0)

  const [stateEnum, setStateEnum] = useState([])
  const [stateStory, setStateStory] = useState([])
  const [stateClass, setStateClass] = useState([])
  const [stateRating, setStateRating] = useState([])
  const [statePromotion, setStatePromotion] = useState([])

  const [loadingEnum, setloadingEnum] = useState(true)
  const [loadingClass, setloadingClass] = useState(true)
  const [loadingStory, setloadingStory] = useState(true)
  const [loadingPromo, setloadingPromo] = useState(true)
  const [loadingRating, setloadingRating] = useState(true)
  const [dataState, setDataState] = useState({ skip: 0, take: 3, filter: [], filterString: '[]' })
  const [dataStates] = useState({ skip: 0, take: 7, filter: [], filterString: '[]' })

  const ClassCategory = [
    { id: 1, name: 'Al-Quran', IconClassCategory: Images.IconAlQuran },
    { id: 2, name: 'Fiqih', IconClassCategory: Images.IconFiqih },
    { id: 3, name: 'Ekonomi Syariah', IconClassCategory: Images.IconEconomicSyariah },
    { id: 4, name: 'Ibadah Kemasyarakatan', IconClassCategory: Images.IconCommunityWorship },
    { id: 5, name: 'Bahasa Arab', IconClassCategory: Images.IconArabicLanguage },
  ]

  const fetchDataClass = async ({ skip, take, filterString }) => {
    try {
      setloadingClass(true)
      const response = await ClassAPI.GetAllClass(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateClass(response.data.data)
      }
      setloadingClass(false)
    } catch (err) {
      setloadingClass(false)
      return err
    }
  }

  const fetchDataPromotion = async ({ skip, take, filterString }) => {
    try {
      setloadingPromo(true)
      const response = await PromotionAPI.GetAllPromotion(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStatePromotion(response.data.data)
      }
      setloadingPromo(false)
    } catch (err) {
      setloadingPromo(false)
      return err
    }
  }

  const fetchDataStory = async ({ skip, take, filterString }) => {
    try {
      setloadingStory(true)
      const response = await StoryAPI.GetAllStory(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateStory(response.data.data)
      }
      setloadingStory(false)
    } catch (err) {
      setloadingStory(false)
      return err
    }
  }

  const fetchDataEnum = async ({ skip, take, filterString }) => {
    try {
      setloadingEnum(true)
      filterString='[{"type": "text", "field" : "type", "value": "dashboard_benefit"}]'
      const response = await EnumAPI.GetAllEnum(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateEnum(response.data.data)
      }
      setloadingEnum(false)
    } catch (err) {
      setloadingEnum(false)
      return err
    }
  }

  const fetchDataRating = async ({ skip, take, filterString }) => {
    try {
      setloadingRating(true)
      const response = await RatingAPI.GetAllRating(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateRating(response.data.data)
      }
      setloadingRating(false)
    } catch (err) {
      setloadingRating(false)
      return err
    }
  }

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  const onDataStateChange = (event) => {
    setDataState({
      ...dataState,
      filterString : `[{"type": "text", "field" : "Class_Name", "value": "${event.target.value}"}]`
    })
  }

  useEffect(() => {
    fetchDataEnum(dataState)
    fetchDataStory(dataState)
    fetchDataRating(dataState)
    fetchDataPromotion(dataState)
  }, [])

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchDataClass(dataState)
    }, 500)
    return () => clearTimeout(delay)
  }, [dataState])

  const a11yProps = (index) =>  {
    return{
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  const ContentHeading = () => {
    return !islogin ? (
      <ContainerHeading>
        <ViewTitle><strong>Kelas Online</strong> Belajar Al-Qur'an<br></br>Lebih Mudah, Lebih Cepat,<br></br>dan Menyenangkan</ViewTitle>
        <ViewButton>
          <a href='/auth/register'><ButtonHeading>Daftar Sekarang</ButtonHeading></a>
        </ViewButton>
      </ContainerHeading>
    ) : (
      <ContainerHeadingLog>
        <ViewHeadingLog>
          <AppBar position='static' style={{
            zIndex: 1,
            boxShadow: 'none',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#951CB3',
            justifyContent: 'space-between' }}>
            <Tabs value={selectedTab} onChange={handleChange} indicatorColor='secondary'>
              <Tab {...a11yProps(0)} label='Semua' style={{
                opacity: 1,
                fontSize: 16,
                color: '#fff',
                textTransform :'none',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20, }} />
              <Tab onClick={() => fetchDataClass(dataState)} {...a11yProps(2)} label='Kelas Populer' style={{
                opacity: 1,
                fontSize: 16,
                color: '#fff',
                textTransform :'none',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20, }} />
              <Tab onClick={() => fetchDataPromotion(dataState)} {...a11yProps(3)} label='Kelas Terbaru' style={{
                opacity: 1,
                fontSize: 16,
                color: '#fff',
                textTransform :'none',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20, }} />
            </Tabs>
            <ViewInputSearch>
              <InputSearch placeholder='Search' onChange={onDataStateChange} />
            </ViewInputSearch>
          </AppBar>
        </ViewHeadingLog>
      </ContainerHeadingLog>
    )
  }

  const ContentClass = () => {
    return(
      <ContainerClass>
        <ViewClass>
          <Class>
            <TitleClass><ClassTitle>Semua Kelas</ClassTitle></TitleClass>
            {/* {islogin && (
              <ViewCategoryClass>
                {ClassCategory.map((category, index) => {
                  return (
                    <a key={index}>
                      <div className={styles.CategoryView}>
                        <img src={category.IconClassCategory} />
                        <p>{category.name}</p>
                      </div>
                    </a>
                  )
                })}
              </ViewCategoryClass>
            )} */}
            {loadingClass ? <ShimmerClass /> :
              <Carousel
                ssr={true}
                arrows={false}
                showDots={false}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={2000}
                responsive={ResponsiveClass}
                keyBoardControl={true}
                containerClass='carousel-container'
                removeArrowOnDeviceType={['tablet', 'mobile']}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'>
                <ViewCardClass>
                  <CardClass>
                    {stateClass.map((item, index) => {
                      return (
                        <div key={index} style={{ marginRight: 110 }}>
                          <div>
                            <img src={item.Class_Image != '' ? item.Class_Image : Images.ImageDefault1} width={330} height={192} style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }} />
                          </div>
                          <TxtCardClass>
                            <div className={styles.TitleCardClass}><p>{item.Class_Name}</p></div>
                            <div><img src={Images.IconStar} width={100} /></div>
                            <div className={styles.LineClass}><hr></hr></div>
                            <ViewPrice>
                              <div className={styles.PriceClassOld}><p><s>Rp.400.000 - 1.500.000</s></p></div>
                              <div className={styles.PriceClassNew}><p>Rp.199.000 - 999.000</p></div>
                              <div className={styles.ButtonClass}>
                                <a href='#'><button style={{ backgroundColor:'#65C6E6', }}>Beli Kelas Sekarang</button></a>
                              </div>
                            </ViewPrice>
                          </TxtCardClass>
                        </div>
                      )
                    })}
                  </CardClass>
                </ViewCardClass>
              </Carousel>
            }
          </Class>

          <Promo>
            <TitleClass><ClassTitle>Promo Buat Kamu</ClassTitle></TitleClass>
            {loadingPromo ? <ShimmerPromo /> :
              <Carousel
                ssr={true}
                arrows={false}
                infinite={true}
                autoPlay={true}
                showDots={false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                transitionDuration={1000}
                responsive={ResponsivePromo}
                containerClass='carousel-container'
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
                customTransition='transform 600ms ease-in-out'
                removeArrowOnDeviceType={['tablet', 'mobile']}>
                {statePromotion.map((item, index) => {
                  return(
                    <div key={index}>
                      <div className={styles.ViewPromo}>
                        <a href='#'><img src={item.Banner_Image != '' ? item.Banner_Image : Images.ImageDefault5} width={500}/>
                        </a>
                      </div>
                    </div>
                  )
                })}
              </Carousel>
            }
          </Promo>
        </ViewClass>
      </ContainerClass>
    )
  }

  const ContentBenefit = () => {
    return(
      <ContainerBenefit>
        <ViewBenefit>
          {stateEnum.map((item, index) => {
            return(
              <div className={styles.Benefit} key={index}>
                <img src={Images.IconStudyOnline} />
                <TitleBenefit>{item.Value.split('|')[0]}</TitleBenefit>
                <div className={styles.TxtBenefit}>
                  <p>{item.Value.split('|')[1]}</p>
                </div>
              </div>
            )
          })}
        </ViewBenefit>
      </ContainerBenefit>
    )
  }

  const ContentReview = () => {
    return(
      <ContainerReview>
        <div className={styles.TitleContainerReview}>
          <p>Apa yang dikatakan Santri <strong>Belajariah?</strong></p>
        </div>
        <ViewReview>
          {stateRating.map((item, index) => {
            return(
              <Reviews key={index}>
                <IconReviews>
                  <img className={styles.StyleReviews} src={Images.IconStyleRev} width={90} />
                  <div className={styles.StarIcon}><img src={Images.IconStar} width={100} /></div>
                </IconReviews>
                <div className={styles.TxtReviews}>
                  <p>{item.Comment}</p>
                </div>
                <Reviewer>
                  <div><img src={Images.ImageDefaultReviewer} width={60} /></div>
                  <div className={styles.TxtReviewer}>
                    <p className={styles.TitleReviewer}>{item.User_Name}</p>
                    <p className={styles.DescReviewer}>Santri Kelas {item.Class_Initial} Belajariah</p>
                  </div>
                </Reviewer>
              </Reviews>
            )
          })}
        </ViewReview>
      </ContainerReview>
    )
  }

  const ContentProof = () => {
    return(
      <ContainerProof>
        <TitleProof>
          <ProofTitle>Ayo, Tunggu Apalagi Daftarkan Segera Dirimu<br></br>menjadi Santri Belajariah, dan peroleh benefitnya</ProofTitle>
        </TitleProof>
        <ButtonProof>
          <a href='#'><ProofButton>Daftar Sekarang</ProofButton></a>
        </ButtonProof>
      </ContainerProof>
    )
  }

  const ContentInspiratifStory = () => {
    const handleSplitString = (value) => {
      const stringSplit = value.split('|')
      return stringSplit.map((val, index) => {
        if (val.includes('<Img>')) {
          return  (
            <p key={index}/>
          )
        } else {
          return (
            <p key={index}>{val}. </p>
          )}})
    }
    return(
      <ContainerInspiratifStory>
        <TitleInspiratifStory><InspiratifStoryTitle>Bacaan Inspiratif</InspiratifStoryTitle></TitleInspiratifStory>
        <ViewInspiratifStory>
          {stateStory.map((item, index) => {
            return(
              <Story key={index}>
                <div className={styles.StoryImg}><img src={Images.ImageDefault1} width={320} height={170} style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }} /></div>
                <ViewStory>
                  <div className={styles.TitleStory}><p>Jadi Sukses, Belajar dari<br></br><strong>{item.Title}</strong></p></div>
                  <div className={styles.IconArtStory}><img src={Images.IconArtSquare} width={300} /></div>
                  <div className={styles.TxtDescStory}>
                    <p>{handleSplitString(item.Content.substring(0, 100))}...</p>
                  </div>
                  <ViewWritingBelajariah>
                    <div><img src={Images.IconWriterBelajariah} /></div>
                    <div>
                      <div className={styles.ViewWriterBelajariah}>
                        <p>Ditulis oleh<br></br><strong>BELAJARIAH</strong><img src={Images.IconChecklist} /></p>
                      </div>
                    </div>
                  </ViewWritingBelajariah>
                </ViewStory>
              </Story>
            )
          })}
        </ViewInspiratifStory>
        <ViewButton>
          <a href='#'><ButtonInspiratif>Bacaan Lainnya</ButtonInspiratif></a>
        </ViewButton>
      </ContainerInspiratifStory>
    )
  }

  return(
    <Container>
      <HeaderUser />
      {ContentHeading()}
      <ContentClass />
      <ContentBenefit />
      <ContentReview />
      <ContentProof />
      <ContentInspiratifStory />
      <Footer />
    </Container>
  )
}

export default Dashboards