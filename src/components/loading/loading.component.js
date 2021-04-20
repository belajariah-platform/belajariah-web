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
        <div className={styles.loaderButton}/>
      )
    )
  )
}

export default Loading