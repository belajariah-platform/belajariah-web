import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Images } from '../../../assets'
import styles from '../../../assets/css/auth.module.css'
import {
  Buttons,
  Loading,
  CardForm,
  TextInput,
  BackgroundAuth,
} from '../../../components'
import {
  Gap,
  Title,
  Subtitle,
  ImageMail,
  TitleCard,
  TextPurple,
  SubtitleCard,
  SubtitleLink,
  ContainerForm,
  ContainerButton,
  ImageForgotPass,
  ContainerRecovery,
} from './auth-recovery.styled'

const Recovery = (props) => {
  const data = {
    email : 'belajariah20@gmail.com',
  }
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(true)
  const [linkClicked, setLinkClicked] = useState(false)
  const [loadingButton, setLoadingButton] = useState(false)
  const [submit, setSubmit] = useState({
    email : false,
    reset : false,
  })

  const FormEmail = () => {
    return(
      <ContainerForm>
        <TitleCard>Lupa Kata Sandi</TitleCard>
        <SubtitleCard>Untuk mengatur ulang kata sandi Anda, masukkan <TextPurple>alamat email</TextPurple> akun Anda</SubtitleCard>
        <TextInput title='Alamat Email' type='email' status={status}/>
        <Gap />
        <Buttons onClick={() => setLoadingButton(true)}>
          <ContainerButton>
            <p>Submit</p>
            {loadingButton && (
              <Loading type='button' />
            )}
            {loadingButton && (
              setTimeout(() => {
                setLoadingButton(false),
                setSubmit(s => ({ ...s, email : true }))
              }, 2000),
              clearTimeout()
            )}
          </ContainerButton>
        </Buttons>
      </ContainerForm>
    )
  }

  const FormReset = () => {
    return(
      <ContainerForm>
        <TitleCard>Reset Kata Sandi</TitleCard>
        <TextInput title='Alamat Email' type='email' disable={true} value={data.email}/>
        <TextInput title='Password Baru' type='password'/>
        <TextInput title='Konfirmasi Password' type='password'/>
        <Gap />
        <Buttons onClick={() => setLoadingButton(true)}>
          <ContainerButton>
            <p>Reset Password</p>
            {loadingButton && (
              <Loading type='button' />
            )}
            {loadingButton && (
              setTimeout(() => {
                setLoadingButton(false),
                setSubmit(s => ({ ...s, reset : true }))
              }, 2000),
              clearTimeout()
            )}
          </ContainerButton>
        </Buttons>
      </ContainerForm>
    )
  }

  const CardEmail = () => {
    return(
      <BackgroundAuth name='recovery'>
        <CardForm big>
          <ContainerRecovery>
            <ImageForgotPass src={Images.ILForgotPass}/>
            <FormEmail />
          </ContainerRecovery>
        </CardForm>
      </BackgroundAuth>
    )
  }

  const CardReset = () => {
    return(
      <BackgroundAuth name='recovery'>
        <CardForm big>
          <ContainerRecovery>
            <ImageForgotPass src={Images.ILForgotPass}/>
            <FormReset />
          </ContainerRecovery>
        </CardForm>
      </BackgroundAuth>
    )
  }

  const FormEmailSuccess = () => {
    return(
      <BackgroundAuth name='register'>
        <Title>Tautan Anda Berhasil</Title>
        <Title>Terkirim</Title>
        <ImageMail src={Images.ILMailSent} />
        <Subtitle>Kami telah mengirimkan email yang dapat anda gunakan untuk <strong>mengatur ulang kata sandi baru anda,</strong> dan pastikan anda telah memeriksa folder spam anda.</Subtitle>
      </BackgroundAuth>
    )
  }

  const FormResetSuccess = () => {
    return (
      <BackgroundAuth name='register'>
        <ImageMail src={Images.ILRecoverySuccess} />
        <Gap />
        <Title>Hore, kata sandi anda</Title>
        <Title>berhasil diubah</Title>
        <Link href='/auth/login'>
          <SubtitleLink>Kembali ke halaman login</SubtitleLink>
        </Link>
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
      linkClicked ? (
        submit.reset ? (
          <FormResetSuccess />
        ) : (
          <CardReset />
        )
      ) : (
        submit.email ? (
          <FormEmailSuccess />
        ) : (
          <CardEmail />
        )
      )
    )
  )
}

export default Recovery