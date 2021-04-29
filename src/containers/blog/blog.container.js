import moment from 'moment'
import 'moment/locale/id'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import { useEffect, useState } from 'react'
import InputBase from '@material-ui/core/InputBase'
import Pagination from '@material-ui/lab/Pagination'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'

import {
  Clear,
  Search,
  Vector,
  Content,
  Triangle,
  Container,
  BoxCategory,
  ContentHeader,
  CategoryButton,
  ContainerSearch,
  ContainerCategory,
  ImgCard,
  TitleCard,
  SubtitleCard,
  ContentBlog,
} from './blog.styled'
import { StoryAPI } from '../../api'
import { Images } from '../../assets'
import { Response } from '../../utils'
import styles from '../../assets/css/blog.module.css'
import { HeaderUser, Footer, Buttons } from '../../components'

const Blog = () => {
  const isLogin = true
  const [page, setPage] = useState(1)
  const [showSearch, setShowSearch] = useState(false)
  const [categoryIndex, setCategoryIndex] = useState(-1)
  const [showCategory, setShowCategory] = useState(false)
  const [loadingStory, setloadingStory] = useState(false)
  const [stateStory, setStateStory] = useState({ count : 0, story: [] })

  const [count, setCount] = useState(0)
  const [isi, setIsi] = useState([])

  const [stateRequest, setStateRequest] = useState({
    skip: 0,
    take: 6,
    filter: [],
    filterString: '[]',
  })

  const [searchRequest, setSearchRequest] = useState({
    skip: 0,
    take: 6,
    filter: [],
    filterString: '[]',
  })

  const categories = [
    { id : 0, nameEn : 'MuslimInspiration', nameId: 'Inspirasi Muslim' },
    { id : 1, nameEn : 'IslamicScientist', nameId: 'Ilmuan Islam' },
    { id : 2, nameEn : 'Prophet', nameId : 'Sahabat Nabi' },
    { id : 3, nameEn : 'Prophet', nameId : 'Sahabat Nabi' },
    { id : 4, nameEn : 'Prophet', nameId : 'Sahabat Nabi' },
    { id : 5, nameEn : 'Prophet', nameId : 'Sahabat Nabi' },
  ]

  const fetchDataStory = async ({ skip, take, filterString }) => {
    try {
      setloadingStory(true)
      const response = await StoryAPI.GetAllStory(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateStory(s => ({ ...s, count : response.data.count }))
        setStateStory(s => ({ ...s, story : response.data.data }))
        //console.log(response.data.data)
      }
      setloadingStory(false)
    } catch (err) {
      setloadingStory(false)
      return err
    }
  }

  const fetchSearchStory = async ({ skip, take, filterString }) => {
    console.log('halo')
    try {
      //setloadingStory(true)
      const response = await StoryAPI.GetAllStory(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        //setCount(response.data.count)
        //setIsi(response.data.data)
        //console.log(response.data.data)
      }
      // setloadingStory(false)
    } catch (err) {
      // setloadingStory(false)
      return err
    }
  }

  const handleShowCategory = () => {
    setShowCategory(!showCategory)
  }

  const handleShowSearch = () => {
    setShowSearch(!showSearch)
  }

  const handleCategoryIndex = (index) => {
    if(categoryIndex == index) {
      setCategoryIndex(-1)
    } else {
      setCategoryIndex(index)
    }
  }

  const handlePagination = (index) => {
    if(page != index) {
      const skipCount = ( index - 1 ) * 6
      setPage(index)
      setStateRequest(s => ({ ...s, skip: skipCount }))
      window.scrollTo({ top : 0, behavior: 'smooth' })
    }
  }

  const handleSearch = (event) => {
    const result = {
      skip: 0,
      take: 6,
      filter: [],
      filterString : `[{"type": "text", "field" : "Title", "value": "${event.target.value}"}]`
    }
    fetchSearchStory(result)
    console.log(result)
  }

  const useStyles = makeStyles(() => ({
    root: {
      '& .Mui-selected': {
        color:'white',
        backgroundColor: '#951CB3',
      },
    },
  }))

  const BlogList = () => {
    return(
      <ContentBlog>
        {stateStory.story.map((value, index) => {
          const date = moment(value.Modified_Date, 'YYYY-MM-DDTHH:mm:ssZ').format('Do MMMM YYYY')

          return(
            <div key={index} className={styles.card}>
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
          )
        }
        )}
      </ContentBlog>
    )
  }

  const ContainerBlog = () => {
    const classes = useStyles()
    return(
      <Content>

        <ContentHeader>
          <CategoryButton onClick={handleShowCategory}>Kategori <Vector src={Images.IconVectorGrey}/></CategoryButton>
          {showCategory && (
            <ContainerCategory>
              <Triangle />
              <BoxCategory>
                {categories.map((category, index) => (
                  <a
                    key={index}
                    onClick={() => handleCategoryIndex(index)}
                    className={categoryIndex == index ? styles.categoriesActive : styles.categories}>
                    {category.nameId}
                  </a>
                ))}
              </BoxCategory>
            </ContainerCategory>
          )}

          {showSearch ? (
            <Paper component='form' className={styles.containerSearch} elevation={0} style={{ borderRadius: 10, marginRight: '3.5%' }}>
              <IconButton>
                <Search src={Images.IconSearch} />
              </IconButton>
              <InputBase
                style={{ fontSize: 14 }}
                className={styles.input}
                onChange={handleSearch}
              />
              <IconButton>
                <Clear src={Images.IconClear} />
              </IconButton>
            </Paper>
          ): (
            <IconButton style={{ marginRight: '2.5%' }}>
              <Search src={Images.IconSearch} onClick={handleShowSearch} />
            </IconButton>
          )}
        </ContentHeader>

        <BlogList />

        <div style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', marginTop: 20 }}>
          <Pagination
            count={Math.ceil(stateStory.count / 6)}
            page={page}
            showLastButton
            showFirstButton
            onChange={(event, index) => handlePagination(index)}
            classes={{ root: classes.root, hover: classes.hover, ul : classes.ul }} />
        </div>

      </Content>
    )
  }

  useEffect(() => {
    fetchDataStory(stateRequest)
  }, [stateRequest])

  // useEffect(() => {
  //   fetchDataStory(searchRequest)
  // }, [searchRequest])

  return (
    <Container>
      {isLogin ? (
        <HeaderUser variant='purple' />
      ) : (
        <HeaderUser variant='white' />
      )}
      <ContainerBlog />
      <Footer />
    </Container>
  )
}

export default Blog
