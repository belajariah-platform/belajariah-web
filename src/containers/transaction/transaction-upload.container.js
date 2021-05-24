import * as Yup from 'yup'
import { useFormik } from 'formik'

import { useState } from 'react'
import { PaymentAPI } from '../../api'
import { Text } from './transaction.styled'
import styles from '../../assets/css/transaction.module.css'
import { Buttons, HeaderUser, TextInput } from '../../components'

const TransactionUpload = () => {
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(true)

  const FormSubmit = useFormik({
    initialValues: {
      Sender_Name: '',
      Sender_Bank: '',
    },
    validationSchema: Yup.object({
      Sender_Name: Yup.string()
        .required('namerequired'),
      Sender_Bank: Yup.string()
        .required('bankrequired'),
    }),
    onSubmit: async (values, form) => {
      const body = {
        'ID' : '',
        'Payment_Method_Code' : '',
        'Status_Payment_Code' : '',
        'Sender_Bank' : '',
        'Sender_Name' : '',
        'Image_Code' : 0,
        'Total_Transfer' : 0,
        'Action' : 'Approved',
      }

      try {
        const response = await PaymentAPI.UploadPayment(body)
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

  const ContainerUpload = () => {
    return (
      <div className={styles.containerUpload}>
        <p>Upload a photo</p>
      </div>
    )
  }

  const ContainerDetail = () => {
    return (
      <div className={styles.containerUploadDetail}>
        <TextInput
          title='Nama Pengirim di rekening Bank'
          placeholder='Masukan Nama Lengkap'
          name='Sender_Name' />
        <TextInput
          title='Transfer dari Bank'
          placeholder='Masukan Nama Bank'
          name='Sender_Bank' />
        <div>
          <hr/>
          <Buttons><Text color={'white'} margin={'0px'}>Kirim</Text></Buttons>
        </div>
      </div>
    )
  }

  return (
    <div>
      <HeaderUser variant='purple' />
      <ContainerUpload />
      <ContainerDetail />
    </div>
  )
}

export default TransactionUpload