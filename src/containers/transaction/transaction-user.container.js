import { RadioGroup, Radio, FormControlLabel, } from '@material-ui/core'

import {
  Dot,
  TxtBtn,
  ViewDot,
  IconImg,
  ViewInput,
  Container,
  NoInvoice,
  PaymentView,
  DatePayment,
  TitleFilter,
  ViewContent,
  LineVertical,
  TitlePayment,
  ContainerBtn,
  ContainerList,
  TitleClassName,
  ContainerFilter,
} from './transaction.styled'
import { Images } from '../../assets'
import { HeaderUser, Buttons, Footer } from '../../components'

const TransactionUser = () => {
  const state = false

  const HeaderSearch = () => {
    return (
      <p>Hai Search</p>
    )
  }

  const Filter = () => {
    return (
      <ContainerFilter>
        <TitleFilter>Status Pembayaran</TitleFilter>
        <ViewInput>
          <RadioGroup aria-label='position' name='position' defaultValue='top'>
            <FormControlLabel value='A' control={<Radio color='primary' />} label='Berhasil' />
            <FormControlLabel value='B' control={<Radio color='primary' />} label='Gagal' />
            <FormControlLabel value='C' control={<Radio color='primary' />} label='Menunggu' />
          </RadioGroup>
        </ViewInput>
        <Buttons backgroundColor={'#FF8E26'}>Terapkan</Buttons>
      </ContainerFilter>
    )
  }

  const NoTransaction = () => {
    return (
      <ContainerList>
        <p>Tidak ada pembayaran yang anda lakukan saat ini. yuk beli kelas<br></br>sekarang juga!</p>
      </ContainerList>
    )
  }

  const TransactionList = () => {
    return (
      <ContainerList>
        <PaymentView>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconImg src={Images.IconPending} />
              <TitlePayment>Menunggu</TitlePayment>
            </div>
            <DatePayment>12/04/2021 15:35</DatePayment>
          </div>
          <div style={{ display: 'flex', marginTop: 10 }}>
            <LineVertical />
            <div>
              <TitleClassName>Belajar Al-Qur’an dengan metode yang mudah dan menyenangkan</TitleClassName>
              <NoInvoice>INV-XXX000XX</NoInvoice>
            </div>
          </div>
        </PaymentView>
        <PaymentView>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconImg src={Images.IconComplete} />
              <TitlePayment>Menunggu</TitlePayment>
            </div>
            <DatePayment>12/04/2021 15:35</DatePayment>
          </div>
          <div style={{ display: 'flex', marginTop: 10 }}>
            <LineVertical />
            <div>
              <TitleClassName>Belajar Al-Qur’an dengan metode yang mudah dan menyenangkan</TitleClassName>
              <NoInvoice>INV-XXX000XX</NoInvoice>
            </div>
          </div>
        </PaymentView>
        <PaymentView>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconImg src={Images.IconFailed} />
              <TitlePayment>Menunggu</TitlePayment>
            </div>
            <DatePayment>12/04/2021 15:35</DatePayment>
          </div>
          <div style={{ display: 'flex', marginTop: 10 }}>
            <LineVertical />
            <div>
              <TitleClassName>Belajar Al-Qur’an dengan metode yang mudah dan menyenangkan</TitleClassName>
              <NoInvoice>INV-XXX000XX</NoInvoice>
            </div>
          </div>
        </PaymentView>
      </ContainerList>
    )
  }

  const BtnMore = () => {
    return (
      <ContainerBtn>
        <ViewDot>
          <Dot>...</Dot>
        </ViewDot>
        <TxtBtn>More</TxtBtn>
      </ContainerBtn>
    )
  }

  return (
    <div>
      <HeaderUser variant='purple' />
      <Container>
        <HeaderSearch />
        <ViewContent>
          <Filter />
          {state ? <NoTransaction /> : <div style={{ width: '80%' }}>
            <TransactionList />
            <BtnMore />
          </div>
          }
        </ViewContent>
      </Container>
      <Footer />
    </div>
  )
}

export default TransactionUser