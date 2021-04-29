import Skeleton from '@material-ui/lab/Skeleton'
import {
  ViewShimmer,
  TxtCardClass,
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
  const arrayStory = [1, 2, 3]
  return (
    <div className={styles.ViewPromo}>
      {arrayStory.map((item, index) => {
        return(
          <div key={index}>
            <Skeleton width={500} height={250} style={{ borderRadius: 20 }} />
          </div>
        )
      })}
    </div>
  )
}

export {
  ShimmerPromo,
  ShimmerClass,
  ShimmerInspiratifStory
}