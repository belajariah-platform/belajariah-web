import axios from 'axios'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useState, useEffect } from 'react'
import { RadioGroup, Radio, FormControl, FormControlLabel, TextField } from '@material-ui/core'

import { UserAPI } from '../../api'
import { Images } from '../../assets'
import { TextInput, Buttons } from '../../components'
import {
  ViewInput,
  ViewButton,
  TitleContainer,
  TitleDescContainer,
  ContainerProfileEdit,
  ViewContainerProfileEdit,
} from './profile-edit.styled'

const ProfileEdit = () => {
  const [result, setResult] = useState({})
  const [submit, setSubmit] = useState(false)
  const [stateUser, setStateUser] = useState([])
  const [dataState, setDataState] = useState({})
  const [loadingUser, setloadingUser] = useState(true)
  const Email = useState()

  const fetchDataUser = async (email) => {
    try {
      setloadingUser(true)
      const response = await UserAPI.GetUser(email)
      if (response.status === Response.SUCCESS) {
        setStateUser(response.data.result)
      }
      setloadingUser(false)
    } catch (err) {
      setloadingUser(false)
      return err
    }
  }

  useEffect(() => {
    fetchDataUser(dataState)
  }, [])

  const FormSubmit = useFormik({
    initialValues: {
      Full_Name: 'Riki',
      Phone: '813191919',
      Profession: 'Intel',
      Gender: 'Laki-laki',
      Birthday: '30 April 1999',
      Province: 'Sumatera Selatan',
      City: 'Asgard',
      Address: 'Plaju',
    },
    onSubmit: async (values) => {
      try {
        values.Phone = values.Phone == '' ? 0 : Number('62' + values.Phone)
        const response = await UserAPI.UpdateProfile(values)
        console.log(response)
        if (response.data.result) {
          fetchDataUser(Email)
        }
      } catch (error) {
        return error
      }
    }
  })

  const FormContainer = () => {
    return (
      <ContainerProfileEdit>
        <TitleContainer>Data Personal</TitleContainer>
        <TitleDescContainer>Anda bisa edit informasi profile anda</TitleDescContainer>
        <ViewContainerProfileEdit>
          <ViewInput>
            <TextInput title='Nama Lengkap' name='Full_Name' form={FormSubmit}/>
            <TextInput title='Nomor Telepon' name='Phone' form={FormSubmit}/>
            <TextInput title='Profesi' name='Profession' form={FormSubmit}/>
            <FormControl component='fieldset'>
              <p style={{ marginTop: 8, marginBottom: 0, fontSize: 12, }}>Jenis Kelamin</p>
              <RadioGroup row aria-label='position' name='position' defaultValue='top'
                onSelect={FormSubmit.values['Gender'] != 'Laki-laki' ? 1 : 0}
                onChange={(e) => FormSubmit
                  .setFieldValue('Gender', e == 0 ?
                    'Laki-laki' : 'Perempuan'
                  )}>
                <FormControlLabel value='Laki-laki' control={<Radio color='primary' />} style={{ fontSize: 10 }} label='Laki-laki' />
                <FormControlLabel value='Perempuan' control={<Radio color='primary' />} style={{ fontSize: 10 }} label='Perempuan' />
              </RadioGroup>
            </FormControl>
            <TextInput title='Tanggal Lahir' name='Birthday' form={FormSubmit}/>
            <ViewButton><Buttons onClick={FormSubmit.handleSubmit}>Simpan Perubahan</Buttons></ViewButton>
          </ViewInput>
          <ViewInput>
            <TextInput title='Provinsi' name='Province' form={FormSubmit}/>
            <TextInput title='Kota' name='City' form={FormSubmit}/>
            <TextInput title='Alamat' name='Address' form={FormSubmit}/>
          </ViewInput>
        </ViewContainerProfileEdit>
      </ContainerProfileEdit>
    )
  }
  return (
    <div>
      {FormContainer()}
    </div>
  )
}

export default ProfileEdit