import moment from 'moment'
import 'moment/locale/id'
import { useEffect, useRef, useState } from 'react'
import { Pagination } from '@material-ui/lab'
import {
  Grow,
  Card,
  Paper,
  Popper,
  InputBase,
  IconButton,
  makeStyles,
  CardContent,
  ClickAwayListener,
} from '@material-ui/core'

import {
  Clear,
  Search,
  Vector,
  Content,
  ImgCard,
  Triangle,
  Container,
  TitleCard,
  ContentBlog,
  SubtitleCard,
  CategoryButton,
} from './blog.styled'
import { StoryAPI } from '../../api'
import { Images } from '../../assets'
import { Response } from '../../utils'
import styles from '../../assets/css/blog.module.css'
import { HeaderUser, Footer, Buttons, ShimmerInspiratifStory } from '../../components'

const Blog = () => {
  const isLogin = true
  const categoryRef = useRef(null)
  const [page, setPage] = useState(1)
  const [showSearch, setShowSearch] = useState(false)
  const [categoryIndex, setCategoryIndex] = useState(-1)
  const [showCategory, setShowCategory] = useState(false)
  const [loadingStory, setloadingStory] = useState(false)
  const [stateStory, setStateStory] = useState({ count : 0, story: [] })

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
        setStateStory(s => ({ ...s, story : response.data.data }))
        setStateStory(s => ({ ...s, count : response.data.count }))
        //console.log(response.data.data)
      }
      setloadingStory(false)
    } catch (err) {
      setloadingStory(false)
      return err
    }
  }

  const fetchSearchStory = async ({ skip, take, filterString }) => {
    try {
      setloadingStory(true)
      const response = await StoryAPI.GetAllStory(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateStory(s => ({ ...s, story : response.data.data }))
        setStateStory(s => ({ ...s, count : response.data.count }))
        //console.log(response.data.data)
      }
      setloadingStory(false)
    } catch (err) {
      setloadingStory(false)
      return err
    }
  }

  const handleShowCategory = () => {
    setShowCategory(!showCategory)
  }

  const handleShowSearch = () => {
    setShowSearch(true)
  }

  const handleHideCategory = () => {
    if (categoryRef.current && categoryRef.current.contains(event.target)) {
      return
    }
    setShowCategory(false)
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
      window.scrollTo({ top : 0, behavior: 'smooth' })
      setStateRequest(s => ({ ...s, skip: skipCount }))
    }
  }

  const handleSearch = (event) => {
    if(event.target.value == '') {
      fetchDataStory(stateRequest)
    } else {
      setSearchRequest({ ...searchRequest, filterString : `[{"type": "text", "field" : "Title", "value": "${event.target.value}"}]` })
      fetchSearchStory(searchRequest)
    }
    //console.log(searchRequest)
  }

  const handleSearchKeyDown = (event) => {
    if(event.keyCode == 13) {
      if(event.target.value == '') {
        fetchDataStory(stateRequest)
      } else {
        setSearchRequest({ ...searchRequest, filterString : `[{"type": "text", "field" : "Title", "value": "${event.target.value}"}]` })
        fetchSearchStory(searchRequest)
      }
    }
  }

  const handleClear = () => {
    document.getElementById('SearchInput').value = ''
    setShowSearch(false)
    fetchDataStory(stateRequest)
  }

  const handleSubmit = () => {
    const value = document.getElementById('SearchInput').value
    setSearchRequest({ ...searchRequest, filterString : `[{"type": "text", "field" : "Title", "value": "${value}"}]` })
    fetchSearchStory(searchRequest)
  }

  const useStyles = makeStyles(() => ({
    root: {
      '& .Mui-selected': {
        color:'white',
        backgroundColor: '#951CB3',
      },
    },
  }))

  const ContentHeader = () => {
    return (
      <div className={styles.containerHeader}>
        <CategoryButton
          ref={categoryRef}
          onClick={handleShowCategory}>
          Kategori
          <Vector src={Images.IconVectorGrey}/>
        </CategoryButton>
        <Popper
          transition
          disablePortal
          role={undefined}
          placement='right'
          open={showCategory}
          style={{ zIndex: 2 }}
          anchorEl={categoryRef.current}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                width: 292,
                padding: 10,
                marginTop: -18,
                marginLeft: 18,
                borderRadius: 20,
                position: 'absolute',
                borderTopLeftRadius: 0,
                display: 'inline-block',
                backgroundColor: '#FFF',
                boxShadow: '0px 0px 12px 2px rgba(52,52,52, 0.15)',
                transformOrigin: placement === 'right' ? 'left' : 'center bottom' }}>
              <Paper>
                <ClickAwayListener onClickAway={handleHideCategory}>
                  <div>
                    <Triangle />
                    {categories.map((category, index) => (
                      <a
                        key={index}
                        onClick={() => handleCategoryIndex(index)}
                        className={categoryIndex == index ? styles.categoriesActive : styles.categories}>
                        {category.nameId}
                      </a>
                    ))}
                  </div>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        {showSearch ? (
          <Popper
            transition
            disablePortal
            role={undefined}
            open={showSearch}
            style={{ position: 'relative', marginRight: '3.5%' }}>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  width: 400,
                  height: 36,
                  padding: 4,
                  marginBottom: 4,
                  backgroundColor: '#FFF',
                  borderTopLeftRadius: 10,
                  border: '1px solid #C4C4C4',
                  transformOrigin: placement = 'right' }}>
                <Paper className={styles.containerSearch} elevation={0} style={{ borderRadius: 10, marginRight: '3.5%' }}>
                  <IconButton>
                    <Search src={Images.IconSearch} onClick={handleSubmit}/>
                  </IconButton>
                  <InputBase
                    id='SearchInput'
                    onChange={handleSearch}
                    style={{ fontSize: 14 }}
                    className={styles.input}
                    onKeyDown={handleSearchKeyDown}
                  />
                  <IconButton>
                    <Clear src={Images.IconClear} onClick={handleClear}/>
                  </IconButton>
                </Paper>
              </Grow>
            )}
          </Popper>
        ) : (
          <IconButton style={{ marginRight: '2.5%' }}>
            <Search src={Images.IconSearch} onClick={handleShowSearch} />
          </IconButton>
        )}
      </div>
    )
  }

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
        })}
      </ContentBlog>
    )
  }

  const ContentPagination = () => {
    const classes = useStyles()

    return(
      <div style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', marginTop: 20 }}>
        <Pagination
          count={Math.ceil(stateStory.count / 6)}
          page={page}
          showLastButton
          showFirstButton
          onChange={(event, index) => handlePagination(index)}
          classes={{ root: classes.root, hover: classes.hover, ul : classes.ul }} />
      </div>
    )
  }

  useEffect(() => {
    fetchDataStory(stateRequest)
  }, [stateRequest])

  useEffect(() => {
    fetchDataStory(searchRequest)
  }, [searchRequest])

  return (
    <Container>
      {isLogin ? (
        <HeaderUser variant='purple'/>
      ) : (
        <HeaderUser variant='white'/>
      )}
      <Content>
        {ContentHeader()}
        {loadingStory ? (
          <ShimmerInspiratifStory />
        ) : (
          <BlogList />
        )}
        <ContentPagination />
      </Content>
      <Footer />
    </Container>
  )
}

export default Blog
