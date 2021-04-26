import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import {
  Gap,
  TitleCard,
  SubtitleCard,
  SubtitleLink,
} from './auth-verify.styled'
import styles from '../../../assets/css/auth.module.css'
import { BackgroundAuth, CardForm, Loading } from '../../../components'

const Verify = (props) => {
  const isVerified = true
  const [loading, setLoading] = useState(true)

  const VerifyFail = () => {
    return(
      <BackgroundAuth name='login'>
        <CardForm>
          <TitleCard>Aktivasi Email</TitleCard>
          <SubtitleCard>Maaf, akun anda belum bisa diaktivasi</SubtitleCard>
          <Link href='/auth/recovery'>
            <SubtitleLink>Kirim ulang</SubtitleLink>
          </Link>
          <Gap />
        </CardForm>
      </BackgroundAuth>
    )
  }

  const VerifySuccess = () => {
    return(
      <BackgroundAuth name='login'>
        <CardForm>
          <TitleCard>Aktivasi Email</TitleCard>
          <SubtitleCard>Selamat, akun anda telah berhasil diaktivasi</SubtitleCard>
          <Link href='/auth/login'>
            <SubtitleLink>Kembali ke halaman login</SubtitleLink>
          </Link>
          <Gap />
        </CardForm>
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
    ) : isVerified ? (
      <VerifySuccess />
    ) : (
      <VerifyFail />
    )
  )
}

export default Verify
