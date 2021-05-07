import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from 'react-share'
import {
  Grow,
  Card,
  Paper,
  Popper,
  IconButton,
  CardContent,
} from '@material-ui/core'
import moment from 'moment'
import 'moment/locale/id'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import {
  Icon,
  Image,
  Title,
  Author,
  Source,
  Content,
  Divider,
  Heading,
  ImgCard,
  DateBlog,
  Triangle,
  ArrowLeft,
  Container,
  IconShare,
  TitleCard,
  ArrowRight,
  SubtitleCard,
  ContainerArrow,
  ContainerShare,
  ContainerAuthor,
} from './blog-detail.styled'
import { StoryAPI } from '../../api'
import { Images } from '../../assets'
import styles from '../../assets/css/blog.module.css'
import { Response, ResponsiveBlog } from '../../utils'
import { Buttons, Footer, HeaderUser } from '../../components'

const BlogDetail = ({ story }) => {
  const isLogin = true
  const url = 'http://www.belajariah.com'
  const [showShare, setShowShare] = useState(false)
  const [loadingStory, setloadingStory] = useState(false)
  const [stateStory, setStateStory] = useState({ count : 0, story: [] })

  const [stateRequest, setStateRequest] = useState({
    skip: 0,
    take: 6,
    filter: [],
    filterString: '[]',
  })

  const fetchDataStory = async ({ skip, take, filterString }) => {
    try {
      setloadingStory(true)
      const response = await StoryAPI.GetAllStory(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateStory(s => ({ ...s, story : response.data.data }))
        setStateStory(s => ({ ...s, count : response.data.count }))
        console.log(response.data.data)
      }
      setloadingStory(false)
    } catch (err) {
      setloadingStory(false)
      return err
    }
  }

  const handleShowShare = () => {
    setShowShare(!showShare)
  }

  const copyToClipboard = (str) => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    const selected =
      document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    if (selected) {
      document.getSelection().removeAllRanges()
      document.getSelection().addRange(selected)
    }
    alert('Link telah disalin')
  }

  const ShareBox = () => {
    return (
      <Popper
        open={showShare}
        transition
        style={{
          zIndex: 2,
          top: '30.5%',
          left: 'auto',
          right: '9.8%',
          position: 'absolute',
          display: 'inline-flex',
        }}
        disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              backgroundColor: '#FFF',
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              transformOrigin: placement === 'bottom right' }}>
            <Paper style={{ padding: '0px 12px' }}>
              <Triangle />
              <ContainerShare>
                <IconButton onClick={() => copyToClipboard(url)}>
                  <Icon src={Images.IconCopy} />
                </IconButton>
                <FacebookShareButton url={url}>
                  <IconShare src={Images.IconFbSolid} />
                </FacebookShareButton>
                <TelegramShareButton url={url}>
                  <IconShare src={Images.IconTelegram} />
                </TelegramShareButton>
                <WhatsappShareButton url={url}>
                  <IconShare src={Images.IconWaSolid} />
                </WhatsappShareButton>
              </ContainerShare>
            </Paper>
          </Grow>
        )}
      </Popper>
    )
  }

  const ArrowGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest
    return (
      <ContainerArrow>
        <ArrowLeft src={Images.IconBlogPrev} className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <ArrowRight src={Images.IconBlogNext} onClick={() => next()} />
      </ContainerArrow>
    )
  }

  const Paragraph = () => {
    const p = story[0].Content
    const res = p.split('|')
    return (
      res.map((sentence, index) => (
        <p style={{ fontSize : 20, textAlign: 'justify' }} key={index}>{sentence}</p>
      ))
    )
  }

  const BlogList = () => {
    return(
      <Carousel
        arrows={false}
        draggable={false}
        responsive={ResponsiveBlog}
        customButtonGroup={<ArrowGroup />}>
        {stateStory.story.map((value, index) => {
          if(value.ID != story[0].ID) {
            const date = moment(value.Modified_Date, 'YYYY-MM-DDTHH:mm:ssZ').format('Do MMMM YYYY')
            return(
              <Link href={'/blog/' + value.ID} key={index}>
                <div className={styles.cardBlogDetail}>
                  <Card
                    variant='outlined'
                    style={{
                      border: 0,
                      borderRadius : 0,
                      borderTopLeftRadius: 25,
                      borderTopRightRadius: 25,
                      boxShadow: '0px 4px 6px -6px'
                    }}>
                    <CardContent style={{ padding: 0, paddingBottom: 24 }}>
                      {value.Banner_Image == '' ? (
                        <ImgCard src={Images.ImageDefault1} />
                      ) : (
                        <ImgCard src={value.Banner_Image} />
                      )}
                      <TitleCard>{value.Title}</TitleCard>
                      <SubtitleCard>Belajariah / {date}</SubtitleCard>
                    </CardContent>
                  </Card>
                  <div className={styles.cardButton}>
                    <Buttons width={'56%'} height={'32px'} padding={'0% 5%'}>Baca Selengkapnya</Buttons>
                  </div>
                </div>
              </Link>
            )
          }
        })}
      </Carousel>
    )
  }

  const Page = () => {
    const date = moment(story[0].Modified_Date, 'YYYY-MM-DDTHH:mm:ssZ').format('Do MMMM YYYY')

    return(
      <Content>
        <Title>{story[0].Title}</Title>
        <Heading>
          <div>
            <ContainerAuthor>
              <Author>BELAJARIAH</Author>
              <Icon src={Images.IconChecklist} />
            </ContainerAuthor>
            <DateBlog>{date}</DateBlog>
          </div>
          <IconButton onClick={handleShowShare}>
            <Icon src={Images.IconShare}/>
          </IconButton>
        </Heading>
        <ShareBox />
        {story[0].Header_Image == '' ? (
          <Image src={Images.ImageDefault5} />
        ) : (
          <Image src={story[0].Header_Image} />
        )}
        <Source>Source : {story[0].Source}</Source>
        <Paragraph />
        <Divider />
        <Title>Bacaan Inspiratif Lainnya</Title>
        <BlogList />
      </Content>
    )
  }

  useEffect(() => {
    fetchDataStory(stateRequest)
  }, [stateRequest])

  useEffect(() => {
    console.log(story)
  }, [])

  return (
    <Container>
      {isLogin ? (
        <HeaderUser variant='purple'/>
      ) : (
        <HeaderUser variant='white'/>
      )}
      <Page />
      <Footer />
    </Container>
  )
}

export default BlogDetail