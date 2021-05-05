import axios from 'axios'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useState, useEffect } from 'react'

import { Images } from '../../assets'
import { TextInput, Buttons } from '../../components'
import {
  ViewButton,
  TitleContainer,
  ViewIllustration,
  ViewChangePassword,
  ViewFormChangePassword,
  ContainerChangePassword,
} from './profile-change-password.styled'

const ProfileChangePassword = () => {
  const FormSubmit = useFormik({
    initialValues: {
      Password: '',
      New_Password: '',
      Confirm_Password: '',
    },
    validationSchema: Yup.object({
      Password: Yup.string()
        .min(8, 'min8')
        .required('passrequired'),
      New_Password: Yup.string()
        .min(8, 'min8')
        .required('passrequired'),
      Confirm_Password: Yup.string()
        .oneOf([Yup.ref('New_Password')], 'passmatch')
        .required('passrequired'),
    }),
  })

  return (
    <ContainerChangePassword>
      <TitleContainer>Perubahan Kata Sandi</TitleContainer>
      <ViewChangePassword>
        <ViewIllustration src={Images.ChangePasswordIllustration} />
        <ViewFormChangePassword>
          <TextInput title='Masukan Kata Sandi Lama' name='Password' form={FormSubmit}/>
          <TextInput title='Masukan Kata Sandi Baru' name='New_Password' form={FormSubmit}/>
          <TextInput title='Konfirmasi Password' name='Confirm_Password' form={FormSubmit}/>
          <ViewButton><Buttons onClick={FormSubmit.handleSubmit}>Simpan Perubahan</Buttons></ViewButton>
        </ViewFormChangePassword>
      </ViewChangePassword>
    </ContainerChangePassword>
  )
}

export default ProfileChangePassword