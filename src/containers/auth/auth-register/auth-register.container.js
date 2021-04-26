import axios from 'axios'
import * as Yup from 'yup'
import Link from 'next/link'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'

import { Images } from '../../../assets'
import styles from '../../../assets/css/auth.module.css'
import { BackgroundAuth, CardForm, TextInput, Buttons, Loading, AlertForm } from '../../../components'
import { Gap, Logo, Title, Subtitle, DividerText, ImageMail, ContainerButton, ContainerGoogle } from './auth-register.styled'

const Register = (props) => {
  const [result, setResult] = useState({})
  const [submit, setSubmit] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadingButton, setLoadingButton] = useState(false)

  const FormSubmit = useFormik({
    initialValues: {
      Full_Name: '',
      Email: '',
      Phone: '',
      Password: '',
      Confirm_Password: '',
    },
    validationSchema: Yup.object({
      Full_Name: Yup.string().required('namerequired'),
      Email: Yup.string()
        .email('invalid')
        .required('emailrequired'),
      Phone: Yup.string()
        .max(11, 'max11')
        .required('phonerequired'),
      Password: Yup.string()
        .min(8, 'min8')
        .required('passrequired'),
      Confirm_Password: Yup.string()
        .oneOf([Yup.ref('Password')], 'passmatch')
        .required('passrequired'),
    }),
    onSubmit: async (values, form) => {
      const body = {
        'Email' : values.Email,
        'Password' : values.Password,
        'Full_Name' : values.Full_Name,
        'Phone' : parseInt(values.Phone),
      }

      try {
        setLoadingButton(true)
        console.log(values)
        const response = await axios.post('http://dev.belajariah.com:3004/register', body)

        setResult(response)
        console.log(response)

        setLoadingButton(false)

        if(response.data.result) {
          setSubmit(true)
          form.resetForm()
          alert('isi form register success')
        }
      } catch(error) {
        setLoadingButton(false)
        return error
      }
    },
  })

  const Form = () => {
    return(
      <BackgroundAuth name='register'>
        <CardForm>
          <Buttons color={'#A09C9C'} backgroundColor={'#F3F3F3'}>
            <ContainerGoogle>
              <Logo src={Images.IconGoogle}/>
              <p>Daftar dengan Google</p>
            </ContainerGoogle>
          </Buttons>
          <DividerText/>
          <TextInput title='Nama Lengkap' name='Full_Name' form={FormSubmit}/>
          <TextInput title='Alamat Email' name='Email' form={FormSubmit}/>
          <TextInput title='Nomor Telepon' name='Phone' form={FormSubmit}/>
          <TextInput title='Password' name='Password' form={FormSubmit}/>
          <TextInput title='Konfirmasi Password' name='Confirm_Password' form={FormSubmit}/>
          <Gap />
          {result && result.data?.result == false && (
            <>
              <AlertForm noMargin title={result.data.message}/>
              <Gap />
            </>
          )}
          <Buttons onClick={FormSubmit.handleSubmit}>
            <ContainerButton>
              <p>Lanjutkan</p>
              {loadingButton && (
                <Loading type='button' />
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
    }, 2000)
  }, [])

  return (
    loading ? (
      <Loading type='page' />
    ) : (
      submit ? (
        <FormSuccess />
      ) : (
        Form()
      )
    )
  )
}

export default Register