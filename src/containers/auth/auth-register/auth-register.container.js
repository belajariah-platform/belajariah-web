import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Images } from '../../../assets'
import styles from '../../../assets/css/auth.module.css'
import { BackgroundAuth, CardForm, TextInput, Buttons, Loading } from '../../../components'
import { Gap, Logo, DividerText, ContainerButton, ContainerGoogle } from './auth-register.styled'

const Register = (props) => {
  const [status, setStatus] = useState('')
  const [submit, setSubmit] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadButton, setLoadButton] = useState(false)

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
          <Loading type='page' />
        </>
      ) : (
        <>
          <BackgroundAuth name='register'>
            <CardForm>
              <Buttons color={'#A09C9C'} backgroundColor={'#F3F3F3'}>
                <ContainerGoogle>
                  <Logo src={Images.IconGoogle}/>
                  <p>Masuk dengan Google</p>
                </ContainerGoogle>
              </Buttons>
              <DividerText/>
              <TextInput title='Nama Lengkap' />
              <TextInput title='Alamat Email' type='email' status={status}/>
              <TextInput title='Nomor Telepon' type='phone' />
              <TextInput title='Password' type='password'/>
              <Gap />
              <Buttons onClick={() => setLoadButton(true)}>
                <ContainerButton>
                  <p>Lanjutkan</p>
                  {loadButton && (
                    <Loading type='button' />
                  )}
                  {loadButton && (
                    setTimeout(() => {
                      setLoadButton(false)
                    }, 2000),
                    clearTimeout()
                  )}
                </ContainerButton>
              </Buttons>
              <div className={styles.containerTextRegister}>
                <p className={styles.textRegular}>Sudah memiliki akun?
                  {' '}
                  <Link href='/'>
                    <a className={styles.textLink}>Klik Disini</a>
                  </Link>
                </p>
              </div>
              <div className={styles.containerTextRequirement}>
                <p className={styles.textRegularSmall}>Dengan menekan lanjutkan, Anda menyetujui
                  {' '}
                  <Link href='/'>
                    <a className={styles.textLinkSmall}>Syarat & Ketentuan</a>
                  </Link>
                  {' '}
                  dan
                  {' '}
                  <Link href='/'>
                    <a className={styles.textLinkSmall}>Kebijakan Privasi</a>
                  </Link>
                  {' '}
                  oleh Tim Belajariah
                </p>
              </div>
            </CardForm>
          </BackgroundAuth>
        </>
      )}
    </>
  )
}

export default Register