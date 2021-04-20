import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Images } from '../../../assets'
import styles from '../../../assets/css/auth.module.css'
import { BackgroundAuth, CardForm, TextInput, Buttons, Loading } from '../../../components'
import { Gap, Logo, Title, Subtitle, DividerText, ImageMail, ContainerButton, ContainerGoogle } from './auth-register.styled'

const Register = (props) => {
  const [status, setStatus] = useState('')
  const [submit, setSubmit] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadingButton, setLoadingButton] = useState(false)

  const Form = () => {
    return(
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
          <Buttons onClick={() => setLoadingButton(true)}>
            <ContainerButton>
              <p>Lanjutkan</p>
              {loadingButton && (
                <Loading type='button' />
              )}
              {loadingButton && (
                setTimeout(() => {
                  setLoadingButton(false),
                  setSubmit(true)
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
    )
  }

  const FormSuccess = () => {
    return (
      <BackgroundAuth name='register'>
        <ImageMail src={Images.ILRegisterSuccess} />
        <Title>Yeayy, Pendaftaran Anda</Title>
        <Title>Berhasil</Title>
        <Subtitle>Silahkan check email anda untuk melakukan verifikasi</Subtitle>
      </BackgroundAuth>
    )
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      console.log(loading)
    }, 2000)
  }, [])

  return (
    loading ? (
      <Loading type='page' />
    ) : (
      submit ? (
        <FormSuccess />
      ) : (
        <Form />
      )
    )
  )
}

export default Register