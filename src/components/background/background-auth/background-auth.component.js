import styles from '../../../assets/css/auth.module.css'

const BackgroundAuth = (props) => {
  switch (props.name) {
  case 'loading':
    return (
      <div className={`${styles.container} ${styles.bgLoading}`}>
        <div className={styles.loader}/>
        <p className={styles.text}>Loading..</p>
      </div>
    )
  case 'register':
    return (
      <div className={`${styles.container} ${styles.bgRegister}`}>
        {props.children}
      </div>
    )
  case 'login':
    return (
      <div className={`${styles.container} ${styles.bgLogin}`}>
        {props.children}
      </div>
    )
  case 'recover':
    return (
      <div className={`${styles.container} ${styles.bgRecover}`}>
        {props.children}
      </div>
    )
  default:
    return (
      <div className={`${styles.container} ${styles.bgLoading}`}>
        {props.children}
      </div>
    )
  }
}

export default BackgroundAuth