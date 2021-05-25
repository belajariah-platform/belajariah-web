import PropTypes from 'prop-types'

import styles from '../../assets/css/loading.module.css'

const Loading = (props) => {
  return (
    props.type == 'page' ? (
      <div className={`${styles.container} ${styles.bgLoading}`}>
        <div className={styles.loaderPage}/>
        <p className={styles.textLoading}>Loading..</p>
      </div>
    ) : (
      props.type == 'button' && (
        props.color == 'orange' ? (
          <div className={styles.loaderButtonOrange}/>
        ) : (
          <div className={styles.loaderButton}/>
        )
      )
    )
  )
}

Loading.propTypes = {
  type : PropTypes.string,
  color: PropTypes.string,
}

export default Loading