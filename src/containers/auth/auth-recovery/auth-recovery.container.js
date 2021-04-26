import axios from 'axios'
import * as Yup from 'yup'
import Link from 'next/link'
import { useFormik } from 'formik'
import { useCallback, useEffect, useLayoutEffect, useState } from 'react'

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
    email: 'm_ridhoputra@yahoo.com',
  }
  const [loading, setLoading] = useState(true)
  const [linkClicked, setLinkClicked] = useState(true)
  const [loadingButton, setLoadingButton] = useState(false)
  const [submit, setSubmit] = useState({
    email: false,
    reset: false,
  })

  const EmailSubmit = useFormik({
    initialValues: {
      Email : '',
    },
    validationSchema: Yup.object({
      Email: Yup.string()
        .email('invalid')
        .required('emailrequired'),
    }),
    onSubmit: async (values, form) => {
      const body = {
        'Email' : values.Email,
      }

      try {
        console.log(values)
        setLoadingButton(true)
        const response = await axios.put('http://dev.belajariah.com:3004/reset_verification', body)
        console.log(response)

        if(response.data.result) {
          alert('isi data email success')
          form.resetForm()
          setSubmit(s => ({ ...s, email : true }))
        } else {
          alert('gagal')
        }

        setLoadingButton(false)
      } catch(error) {
        setLoadingButton(false)
        return error
      }
    },
  })

  const FormSubmit = useFormik({
    initialValues: {
      Password: '',
      Confirm_Password: '',
    },
    validationSchema: Yup.object({
      Password: Yup.string()
        .min(8, 'min8')
        .required('passrequired'),
      Confirm_Password: Yup.string()
        .oneOf([Yup.ref('Password')], 'passmatch')
        .required('passrequired'),
    }),
    onSubmit: async (values, form) => {
      const body = {
        'Email' : data.email,
        'Password' : values.Password,
      }

      try {
        console.log(values)
        setLoadingButton(true)
        const response = await axios.put('http://dev.belajariah.com:3004/change_password_public', body)
        console.log(response)

        if(response.data.result) {
          alert('ganti password success')
          form.resetForm()
          setSubmit(s => ({ ...s, reset : true }))
        } else {
          alert('gagal')
        }

        setLoadingButton(false)
      } catch(error) {
        setLoadingButton(false)
        return error
      }
    },
  })

  const CardEmail = () => {
    return (
      <BackgroundAuth name='recovery'>
        <CardForm big>
          <ContainerRecovery>
            <ImageForgotPass src={Images.ILForgotPass} />
            <ContainerForm>
              <TitleCard>Lupa Kata Sandi</TitleCard>
              <SubtitleCard>Untuk mengatur ulang kata sandi Anda, masukkan <TextPurple>alamat email</TextPurple> akun Anda</SubtitleCard>
              <TextInput title='Alamat Email' name='Email' form={EmailSubmit}/>
              <Gap />
              <Buttons onClick={EmailSubmit.handleSubmit}>
                <ContainerButton>
                  <p>Submit</p>
                  {loadingButton && (
                    <Loading type='button' />
                  )}
                </ContainerButton>
              </Buttons>
            </ContainerForm>
          </ContainerRecovery>
        </CardForm>
      </BackgroundAuth>
    )
  }

  const CardReset = () => {
    return (
      <BackgroundAuth name='recovery'>
        <CardForm big>
          <ContainerRecovery>
            <ImageForgotPass src={Images.ILForgotPass} />
            <ContainerForm>
              <TitleCard>Reset Kata Sandi</TitleCard>
              <TextInput title='Alamat Email' name='Email' disabled={true} value={data.email} />
              <TextInput title='Password Baru' name='Password' form={FormSubmit}/>
              <TextInput title='Konfirmasi Password' name='Confirm_Password' form={FormSubmit}/>
              <Gap />
              <Buttons onClick={FormSubmit.handleSubmit}>
                <ContainerButton>
                  <p>Reset Password</p>
                  {loadingButton && (
                    <Loading type='button' />
                  )}
                </ContainerButton>
              </Buttons>
            </ContainerForm>
          </ContainerRecovery>
        </CardForm>
      </BackgroundAuth>
    )
  }

  const FormEmailSuccess = () => {
    return (
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
          CardReset()
        )
      ) : (
        submit.email ? (
          <FormEmailSuccess />
        ) : (
          CardEmail()
        )
      )
    )
  )
}

export default Recovery