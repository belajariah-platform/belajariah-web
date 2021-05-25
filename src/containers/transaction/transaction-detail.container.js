import moment from 'moment'
import 'moment/locale/id'
import { useSelector } from 'react-redux'

import { FormatRupiah } from '../../utils'
import { Buttons, HeaderUser } from '../../components'
import { Number, Text } from './transaction.styled'
import styles from '../../assets/css/transaction.module.css'
import { useRouter } from 'next/router'

const TransactionDetail = () => {
  const router = useRouter()
  const { paymentData } = useSelector(state => state.TransactionClassReducer)

  const handleBtnClick = () => {
    router.push('/transaction/upload')
  }

  const TotalPaymentText = () => {
    switch(paymentData.Payment_Method) {
    case 'BSI':
      return <Text>Transfer ke bank BSI</Text>
    default :
      return <Text>No data!</Text>
    }
  }

  const ContentHeader = () => {
    return (
      <div className={styles.containerDetailHeader}>
        <Text color='white' fontSize={'20px'}><strong>PEMBAYARAN DITERIMA</strong></Text>
        <Text color='white'><strong>Terima kasih</strong>, Info Pembayaran anda telah</Text>
        <Text color='white' margin='-8px 0'>diterima</Text>
      </div>
    )
  }

  const ContentDetail = () => {
    return (
      <div className={styles.containerPaymentGuide}>
        <div className={styles.containerTotalPayment}>
          <div>
            <Text><strong>Pembayaran</strong></Text>
            <TotalPaymentText />
          </div>
          <div>
            <Text><strong>Total Pembayaran</strong></Text>
            <Text color={'#FF8E26'}><strong>Rp{FormatRupiah(paymentData.Total_Transfer)}</strong></Text>
          </div>
        </div>
        <Text>Bayar pesanan anda sesuai diatas</Text>
        <Text>Dicek dalam <strong>24 Jam</strong> setelah bukti pembayaran telah diupload. Diwajibkan untuk membayar sesuai total pembayaran (termasuk kode unik) sebelum batas waktu berakhir yang telah ditentukan.</Text>
        <div>
          <div className={styles.containerRow2}>
            <Number>1</Number>
            <Text color={'#AFAFAF'}>Gunakan ATM / iBanking / mBanking setor tunai untuk transfer ke rekening dibawah ini :</Text>
          </div>
          <div className={styles.containerAccountDetail}>
            <Text>Detail Rekening</Text>
            <div className={styles.containerRow1}>
              <div>
                <Text fontSize={'12px'} margin={'16px 0 -8px 0'}>Nama Rekening</Text>
                <Text color={'silver'}><strong>{paymentData.Account_Name}</strong></Text>
              </div>
              <div>
                <Text fontSize={'12px'} margin={'16px 0 -8px 0'}>Bank</Text>
                <Text color={'silver'}><strong>{paymentData.Payment_Method}</strong></Text>
              </div>
              <div>
                <Text fontSize={'12px'} margin={'16px 0 -8px 0'}>No. Rekening</Text>
                <Text color={'silver'}><strong>{paymentData.Account_Number}</strong></Text>
              </div>
            </div>
          </div>
          <div className={styles.containerRow2}>
            <Number>2</Number>
            <Text color={'#AFAFAF'}>Silahkan upload bukti transfer sebelum {moment(paymentData.Expired_Date, 'YYYY-MM-DDTHH:mm:ssZ').format('dddd, Do MMMM YYYY')}</Text>
          </div>
          <div className={styles.containerRow2}>
            <Number>3</Number>
            <Text color={'#AFAFAF'}>Demi Keamanan Transaksi, Mohon untuk tidak membagikan bukti transaksi</Text>
          </div>
        </div>
        <div className={styles.containerRow1}>
          <Buttons
            width={'108px'}
            padding={'0px'}
            backgroundColor={'white'}
            border={'1px solid #FF8E26'}>
            <Text margin={'0px'} color={'#FF8E26'}>Nanti</Text>
          </Buttons>
          <Buttons
            width={'164px'}
            padding={'0px'}
            onClick={handleBtnClick}
            backgroundColor={'#FF8E26'}>
            <Text margin={'0px'} color={'white'}>Upload Bukti</Text>
          </Buttons>
        </div>
      </div>
    )
  }

  return (
    <div>
      <HeaderUser variant='purple'/>
      <ContentHeader />
      <ContentDetail />
    </div>
  )
}

export default TransactionDetail