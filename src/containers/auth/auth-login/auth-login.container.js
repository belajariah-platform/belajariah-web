import { useEffect, useState } from 'react'
import styles from '../../../assets/css/auth.module.css'
import { BackgroundAuth, CardForm, TextInput } from '../../../components'

const Login = () => {
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
              <TextInput title='Nama Lengkap'/>
              <TextInput title='Alamat Email' type='email'/>
              <TextInput title='Nomor Telepon' type='phone'/>
              <TextInput title='Password' type='password'/>
            </CardForm>
          </BackgroundAuth>
        </>
      )}
    </>
  )
}

export default Login
