import Skeleton from '@material-ui/lab/Skeleton'
import {
  ViewShimmer,
  TxtCardClass,
  TxtCardStory,
  ViewShimmerStory,
} from './shimmer.styled'
import styles from '../../assets/css/shimmer.module.css'

const ShimmerClass = () => {
  const arrayClass = [1, 2, 3]
  return (
    <ViewShimmer>
      {arrayClass.map((item, index) => {
        return (
          <div key={index}>
            <Skeleton width={330} height={320} style={{ borderRadius: 25, }} />
            <TxtCardClass>
              <Skeleton width={300} height={21} />
              <Skeleton width={300} height={21} />
              <Skeleton width={300} height={21} />
              <Skeleton width={100} height={33} />
              <div className={styles.LineClass}><hr></hr></div>
              <Skeleton width={163} height={21} />
              <Skeleton width={200} height={24} />
              <Skeleton width={300} height={55} style={{ borderRadius: 20, }} />
            </TxtCardClass>
          </div>
        )
      })}

    </ViewShimmer>
  )
}

const ShimmerPromo = () => {
  const arrayPromo = [1, 2]
  return (
    <div className={styles.ViewPromo}>
      {arrayPromo.map((item, index) => {
        return(
          <div key={index}>
            <Skeleton width={500} height={250} style={{ borderRadius: 20 }} />
          </div>
        )
      })}
    </div>
  )
}

const ShimmerInspiratifStory = () => {
  const arrayStory = [1, 2, 3, 4, 5, 6]
  return (
    <ViewShimmerStory>
      {arrayStory.map((item, index) => {
        return (
          <div key={index} style={{ marginLeft: '2.8%', marginRight: '2.8%' }}>
            <Skeleton width={330} height={220} style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} />
            <TxtCardStory>
              <Skeleton width={280} height={36} />
              <Skeleton width={140} height={24} />
              <Skeleton width={190} height={52} style={{ position: 'absolute', marginLeft: 48, marginTop: -4, borderRadius: 28, }} />
            </TxtCardStory>
          </div>
        )
      })}

    </ViewShimmerStory>
  )
}

export {
  ShimmerPromo,
  ShimmerClass,
  ShimmerInspiratifStory
}