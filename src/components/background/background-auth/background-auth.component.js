import styles from '../../../assets/css/auth.module.css'

const BackgroundAuth = (props) => {
  switch (props.name) {
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
  case 'recovery':
    return (
      <div className={`${styles.container} ${styles.bgRecovery}`}>
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