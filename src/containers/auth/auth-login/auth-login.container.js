import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Images } from '../../../assets'
import { Logo, ContainerGoogle } from './auth-login.styled'
import styles from '../../../assets/css/auth.module.css'
import { AlertForm, BackgroundAuth, CardForm, TextInput, Buttons } from '../../../components'

const Login = (props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      console.log(loading)
    }, 2000)
  }, [])

  return (
    <>
      {loading ? (
        <>
          <BackgroundAuth name='loading' />
        </>
      ) : (
        <>
          <BackgroundAuth name='login'>
            <CardForm>
              <Buttons color={'#A09C9C'} backgroundColor={'#F3F3F3'}>
                <ContainerGoogle>
                  <Logo src={Images.IconGoogle}/>
                  <p>Masuk dengan Google</p>
                </ContainerGoogle>
              </Buttons>
              <TextInput title='Alamat Email' type='email'/>
              <TextInput title='Password' type='password'/>
              <div className={styles.containerTextRecover}>
                <Link href='/'>
                  <a className={styles.textLink}>Lupa kata sandi</a>
                </Link>
              </div>
              {props.status == 'invalid' && (
                <AlertForm />
              )}
              <Buttons>Masuk</Buttons>
              <div className={styles.containerTextRegister}>
                <p className={styles.textRegular}>Tidak Memiliki akun?
                  {' '}
                  <Link href='/'>
                    <a className={styles.textLink}>Daftar Sekarang</a>
                  </Link>
                </p>
              </div>
            </CardForm>
          </BackgroundAuth>
        </>
      )}
    </>
  )
}

export default Login
