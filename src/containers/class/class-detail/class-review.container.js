import moment from 'moment'
import { useState, useEffect } from 'react'
import Rating from '@material-ui/lab/Rating'
import { withStyles, LinearProgress } from '@material-ui/core'

import {
  Review,
  ViewStar,
  TxtRating,
  TxtReview,
  ViewReview,
  ViewRating,
  TitleRating,
  ReviewerImg,
  ViewProgress,
  ButtonTxtMore,
  TitleReviewer,
  ViewContainer,
  TitleContainer,
  ViewTitleRating,
  ContainerReview,
} from './class-review.styled'
import { Images } from '../../../assets'
import { Response, } from '../../../utils'
import { RatingAPI, ClassAPI } from '../../../api'

const ClassReview = () => {
  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [stateClass, setStateClass] = useState([])
  const [dataStates] = useState({ skip: 0, take: 1, filter: [], filterString: '[]' })
  const [dataState, setDataState] = useState({ skip: 0, take: 3, filter: [], filterString: '[]' })

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

  const fetchDataRating = async (state, code) => {
    try {
      let { skip, take, filterString } = state
      filterString='[{"type": "text", "field" : "class_code", "value": "CLC00000001"}]'
      const response = await RatingAPI.GetAllRating(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setState(response.data.data)
        setCount(response.data.count)
      }
      console.log(response.data.count)
    } catch (err) {
      return err
    }
  }

  const handleLoadMore = () => {
    setDataState({
      ...dataState,
      take : dataState.take + 3
    })
  }

  useEffect(() => {
    fetchDataClass(dataStates)
  }, [])

  useEffect(() => {
    fetchDataRating(dataState)
  }, [dataState])

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      backgroundColor: '#951CB3',
    },
  }))(LinearProgress)

  return (
    <ContainerReview>
      <ViewContainer>
        <TitleContainer>Apa yang dikatakatan mereka</TitleContainer>
        <ViewRating>
          {stateClass.map((item, index) => {
            return (
              <ViewTitleRating key={index}>
                <TitleRating>RATING</TitleRating>
                <TxtRating>{item.Class_Rating.toFixed(1)}</TxtRating>
                <Rating value={item.Class_Rating} style={{ fontSize: 20, }} readOnly />
              </ViewTitleRating>
            )
          })}
          <ViewProgress>
            <BorderLinearProgress variant='determinate' value={80} /><br></br>
            <BorderLinearProgress variant='determinate' value={0} /><br></br>
            <BorderLinearProgress variant='determinate' value={0} /><br></br>
            <BorderLinearProgress variant='determinate' value={0} /><br></br>
            <BorderLinearProgress variant='determinate' value={0} />
          </ViewProgress>
          <ViewStar>
            <Rating style={{ fontSize: 20, color: '#fff' }} readOnly />
            <Rating style={{ fontSize: 20, color: '#fff' }} readOnly />
            <Rating style={{ fontSize: 20, color: '#fff' }} readOnly />
            <Rating style={{ fontSize: 20, color: '#fff' }} readOnly />
            <Rating style={{ fontSize: 20, color: '#fff' }} readOnly />
          </ViewStar>
        </ViewRating>

        <ViewReview>
          {state.map((item, index) => {
            return (
              <Review key={index}>
                <ReviewerImg src={Images.ImgReviewer} />
                <div style={{ textAlign: 'left' }}>
                  <TitleReviewer>{item.User_Name} | {moment(item.Created_Date).fromNow()}</TitleReviewer>
                  <Rating value={item.Rating} style={{ fontSize: 20, }} readOnly />
                  <TxtReview>{item.Comment}</TxtReview>
                </div>
              </Review>
            )
          })}
          <ButtonTxtMore onClick={handleLoadMore}>
            {dataState.take <= count &&(
              <p>- Lihat Semua -</p>
            )}
          </ButtonTxtMore>
        </ViewReview>
      </ViewContainer>
    </ContainerReview>
  )
}

export default ClassReview