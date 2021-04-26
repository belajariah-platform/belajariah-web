import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Tab, Tabs, AppBar } from '@material-ui/core'
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
  TopFooter,
  ViewTitle,
  Container,
  ViewFooter,
  FooterPage,
  FooterInfo,
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
  FooterContact,
  ButtonHeading,
  ViewCardClass,
  ContainerClass,
  ContainerProof,
  ViewHeadingLog,
  ContainerReview,
  ViewInputSearch,
  Containerfooter,
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
import { HeaderUser, Buttons } from '../../components'
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
  const [categorySelected, setCategorySelected] = useState(0)

  const [stateEnum, setStateEnum] = useState([])
  const [stateStory, setStateStory] = useState([])
  const [stateClass, setStateClass] = useState([])
  const [stateRating, setStateRating] = useState([])
  const [statePromotion, setStatePromotion] = useState([])
  const [stateSocialMedia, setStateSocialMedia] = useState([])

  const [loadingEnum, setloadingEnum] = useState(true)
  const [loadingClass, setloadingClass] = useState(true)
  const [loadingStory, setloadingStory] = useState(true)
  const [loadingPromo, setloadingPromo] = useState(true)
  const [loadingRating, setloadingRating] = useState(true)
  const [loadingSocialMedia, setloadingSocialMedia] = useState(true)
  const [dataState] = useState({ skip: 0, take: 3, filter: [], filterString: '[]' })
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

  const fetchDataSocialMedia = async ({ skip, take, filterString }) => {
    try {
      setloadingSocialMedia(true)
      filterString='[{"type": "text", "field" : "type", "value": "social_media"}]'
      const response = await EnumAPI.GetAllEnum(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateSocialMedia(response.data.data)
      }
      setloadingSocialMedia(false)
    } catch (err) {
      setloadingSocialMedia(false)
      return err
    }
  }

  useEffect(() => {
    fetchDataEnum(dataState)
    fetchDataClass(dataState)
    fetchDataStory(dataState)
    fetchDataRating(dataState)
    fetchDataPromotion(dataState)
    fetchDataSocialMedia(dataStates)
  }, [])

  const ContentHeading = () => {
    return !islogin ? (
      <ContainerHeading>
        <ViewTitle><strong>Kelas Online</strong> Belajar Al-Qur'an<br></br>Lebih Mudah, Lebih Cepat,<br></br>dan Menyenangkan</ViewTitle>
        <ViewButton>
          <a href='#'><ButtonHeading>Daftar Sekarang</ButtonHeading></a>
        </ViewButton>
      </ContainerHeading>
    ) : (
      <ContainerHeadingLog>
        <ViewHeadingLog>
          <AppBar position='static' style={{
            zIndex: 1,
            boxShadow: 'none',
            flexDirection: 'row',
            backgroundColor: '#951CB3',
            justifyContent: 'space-between' }}>
            <Tabs>
              <Tab label='Semua' style={{
                opacity: 1,
                fontSize: 16,
                color: '#fff',
                textTransform :'none',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20, }} />
              <Tab label='Kelas Populer' style={{
                opacity: 1,
                fontSize: 16,
                color: '#fff',
                textTransform :'none',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20, }} />
              <Tab label='Kelas Terbaru' style={{
                opacity: 1,
                fontSize: 16,
                color: '#fff',
                textTransform :'none',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20, }} />
            </Tabs>
            <ViewInputSearch>
              <InputSearch placeholder='Search' />
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
            {islogin && (
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
            )}
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
              itemClass='carousel-item-padding-40-px'
            >
              <ViewCardClass>
                <CardClass>
                  {stateClass.map((item, index) => {
                    return (
                      <div key={index} style={{  }}>
                        <div>
                          <img src={Images.ImageDefault1} width={360} style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }} />
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
          </Class>

          <Promo>
            <TitleClass><ClassTitle>Promo Buat Kamu</ClassTitle></TitleClass>
            <Carousel
              ssr={true}
              arrows={false}
              showDots={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              transitionDuration={1000}
              responsive={ResponsivePromo}
              containerClass='carousel-container'
              dotListClass='custom-dot-list-style'
              itemClass='carousel-item-padding-40-px'
              customTransition='transform 600ms ease-in-out'
              removeArrowOnDeviceType={['tablet', 'mobile']}
            >

              {statePromotion.map((item, index) => {
                return(
                  <div key={index}>
                    <div className={styles.ViewPromo}>
                      <a href='#'><img src={item.banner_image == '' ?
                        { uri : item.banner_image } : Images.ImageDefault5} width={500}/>
                      </a>
                    </div>
                  </div>
                )
              })}
            </Carousel>

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

  const Footer = () => {
    return(
      <Containerfooter>
        <ViewFooter>
          <TopFooter>
            <div className={styles.IconLogoFooter}><img src={Images.BelajariahLogoWhite} /></div>
            <FooterPage>
              <div className={styles.TitleDescPageFooter}><p>BELAJARIAH</p></div>
              <div className={styles.DescFooter}>
                <a href='#'><p>Kelas</p></a>
                <a href='#'><p>Tentang Kami</p></a>
                <a href='#'><p>Bacaan Inspiratif</p></a>
              </div>
              <div className={styles.ViewDescFooterOther}>
                <p>TERSEDIA DI :</p>
                {stateSocialMedia.map((item, index) => {
                  let icon
                  let value = item.Value.split('|')[0]
                  value == 'Googleplay' ? icon = Images.IconGoPlay :
                    icon = Images.IconYt
                  return value == 'Googleplay' ? (
                    <a href={item.Value.split('|')[1]}><img src={icon} width={130} /></a>
                  ) : null
                })}
              </div>
            </FooterPage>
            <FooterInfo>
              <div className={styles.TitleDescInfoFooter}><p>INFORMASI</p></div>
              <div className={styles.DescFooter}>
                <a href='#'><p>Syarat dan Ketentuan</p></a>
                <a href='#'><p>Kebijakan Privasi</p></a>
                <a href='#'><p>Bantuan</p></a>
              </div>
              <div className={styles.ViewDescFooterOther}>
                <p>IKUTI KAMI</p>
                <div className={styles.ViewIconSocmed}>
                  {stateSocialMedia.map((item, index) => {
                    let icon
                    let value = item.Value.split('|')[0]
                    value == 'Facebook' ? icon = Images.IconFb :
                      value == 'Instagram' ? icon = Images.IconInsta :
                        icon = Images.IconYt
                    return value == 'Facebook' || value == 'Instagram' || value == 'Youtube' ? (
                      <a href={item.Value.split('|')[1]}><img src={icon} /></a>
                    ) : null
                  })}
                </div>
              </div>
            </FooterInfo>
            <FooterContact>
              <div className={styles.TitleDescContactFooter}><p>HUBUNGI KAMI</p></div>
              <div className={styles.DescFooter}>
                {stateSocialMedia.map((item, index) => {
                  let icon
                  let value = item.Value.split('|')[0]
                  value == 'Gmail' ? icon = Images.IconEmail :
                    value == 'Phone' ? icon = Images.IconPhone :
                      icon = Images.IconWA
                  return value == 'Gmail' || value == 'Phone' || value =='Whatsapp' ? (
                    <div key={index}>
                      <div className={styles.ViewContact}>
                        <img src={icon} width={24} height={20}/>
                        <p>{item.Value.split('|')[1]}</p>
                      </div>
                    </div>
                  ) : null
                })}
              </div>
            </FooterContact>
          </TopFooter>
          <div className={styles.BottomFooter}>
            <hr></hr>
            <p>©2021 Belajariah. All Right Reserved.</p>
          </div>
        </ViewFooter>
        <section>
          <div className='air air1'></div>
          <div className='air air2'></div>
          <div className='air air3'></div>
        </section>
      </Containerfooter>
    )
  }

  return(
    <Container>
      <HeaderUser />
      <ContentHeading />
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