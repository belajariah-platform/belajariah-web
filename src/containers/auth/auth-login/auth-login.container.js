import axios from 'axios'
import * as Yup from 'yup'
import Link from 'next/link'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'

import { UserAPI } from '../../../api'
import { Images } from '../../../assets'
import { Response } from '../../../utils'
import styles from '../../../assets/css/auth.module.css'
import { Logo, DividerText, ContainerGoogle } from './auth-login.styled'
import { AlertForm, BackgroundAuth, CardForm, TextInput, Buttons, Loading } from '../../../components'

const Login = (props) => {
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(true)

  const FormSubmit = useFormik({
    initialValues: {
      Email: '',
      Password: '',
    },
    validationSchema: Yup.object({
      Email: Yup.string()
        .email('invalid')
        .required('emailrequired'),
      Password: Yup.string()
        .min(8, 'min8')
        .required('passrequired'),
    }),
    onSubmit: async (values, form) => {
      try {
        const response = await UserAPI.SignIn(values)
        if (response.status === Response.SUCCESS) {
          setResult(response)
          if (response.data.result) {
            alert('Login sukses')
            form.resetForm()
          }
        } else {
          alert('Login gagal')
        }
      } catch(error) {
        return error
      }
    },
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    loading ? (
      <>
        <Loading type='page' />
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
            <DividerText/>
            <TextInput title='Alamat Email' name='Email' form={FormSubmit}/>
            <TextInput title='Password' name='Password' form={FormSubmit}/>
            <div className={styles.containerTextRecovery}>
              <Link href='/auth/recovery'>
                <a className={styles.textLink}>Lupa kata sandi</a>
              </Link>
            </div>
            {result && result.data?.result == false && (
              <AlertForm title={result.data.message}/>
            )}
            <Buttons onClick={FormSubmit.handleSubmit}>Masuk</Buttons>
            <div className={styles.containerTextRegister}>
              <p className={styles.textRegular}>Tidak Memiliki akun?
                {' '}
                <Link href='/auth/register'>
                  <a className={styles.textLink}>Daftar Sekarang</a>
                </Link>
              </p>
            </div>
          </CardForm>
        </BackgroundAuth>
      </>
    )
  )
}

export default Login
