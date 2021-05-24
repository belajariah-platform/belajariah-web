import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core'

import { Images } from '../../assets'
import { FormatRupiah, Response } from '../../utils'
import styles from '../../assets/css/transaction.module.css'
import { Buttons, HeaderUser, Loading } from '../../components'
import { BtnCheckout, BtnClaim, ContainerDetails, Text } from './transaction.styled'
import { ClassAPI, PackageAPI, PaymentAPI, PaymentMethodAPI, PromotionAPI } from '../../api'
import { TRANSACT_USER_CHOOSE_METHOD } from '../../redux/action'

const TransactionMethod = () => {
  let promoDiscount
  const router = useRouter()
  const dispatch = useDispatch()
  const [method, setMethod] = useState('BSI')
  const [promoCode, setPromoCode] = useState('')
  const [totalPrice, setTotalPrice] = useState(0)
  const [stateClass, setStateClass] = useState([])
  const [promoAmount, setPromoAmount] = useState()
  const [stateMethod, setStateMethod] = useState([])
  const [statePackage, setStatePackage] = useState([])
  const [loadingClass, setLoadingClass] = useState(true)
  const [loadingPromo, setLoadingPromo] = useState(false)
  const [loadingMethod, setLoadingMethod] = useState(true)
  const [loadingPackage, setLoadingPackage] = useState(true)
  const [loadingCheckout, setLoadingCheckout] = useState(false)
  const methodFilter = { skip: 0, take: 1000, filterString: '[]' }
  const { classes } = useSelector(state => state.TransactionClassReducer)
  const packageFilter = { skip: 0, take: 1000, filterString : `[{"type": "text", "field" : "Code", "value": "${classes.Code}"}]` }
  const classFilter = { skip: 0, take: 1000, filterString : `[{"type": "text", "field" : "Code", "value": "${classes.Class_Code}"}]` }

  const useStyles = makeStyles({
    root: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderWidth: 0,
      }
    }
  })
  const customStyles = useStyles()

  const fetchDataClass = async ({ skip, take, filterString }) => {
    try {
      setLoadingClass(true)
      const response = await ClassAPI.GetAllClass(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateClass(response.data.data)
      }
      setLoadingClass(false)
    } catch (err) {
      setLoadingClass(false)
      return err
    }
  }

  const fetchDataPackage = async ({ skip, take, filterString }) => {
    try {
      setLoadingPackage(true)
      const response = await PackageAPI.GetAllPackage(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStatePackage(response.data.data)
        setTotalPrice(response.data.data[0].Price_Discount)
      }
      setLoadingPackage(false)
    } catch (err) {
      setLoadingPackage(false)
      return err
    }
  }

  const fetchDataPaymentMethod = async ({ skip, take, filterString }) => {
    try {
      setLoadingMethod(true)
      const response = await PaymentMethodAPI.GetAllPaymentMethod(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateMethod(response.data.data)
      }
      setLoadingMethod(false)
    } catch (err) {
      setLoadingMethod(false)
      return err
    }
  }

  const fetchPromotionCode = async () => {
    const body = {
      'Class_Code' : classes.Class_Code,
      'Promo_Code' : promoCode
    }

    try {
      setLoadingPromo(true)
      const response = await PromotionAPI.ClaimPromotion(body)
      if(response.status == Response.SUCCESS) {
        if(response.data.data.Discount == 0) {
          alert(response.data.message)
        } else {
          alert('Diskon ' + response.data.data.Discount + '%' + ' dipakai')
          promoDiscount = response.data.data.Discount
          calculateDiscount()
          calculateTotal()
        }
      }
      setLoadingPromo(false)
    } catch (err) {
      setLoadingPromo(false)
      return err
    }
  }

  const fetchPaymentCheckout = async (paymentData) => {
    const body = {
      User_Code: 18,
      Class_Code: classes.Class_Code,
      Promo_Code : '',
      Package_Code : classes.Code,
      Payment_Method_Code : paymentData.Code,
      Status_Payment_Code : 'ENC00000025',
      Total_Transfer : parseInt(totalPrice),
    }

    try {
      setLoadingCheckout(true)
      const response = await PaymentAPI.InsertPayment(body)
      if (response.data.result) {
        alert('Form pembayaran dibuat')
        await dispatch ({
          type: TRANSACT_USER_CHOOSE_METHOD,
          paymentData : response.data.data,
        })
        router.push('/transaction/detail')
      }
      setLoadingCheckout(false)
    } catch (err) {
      setLoadingCheckout(false)
      return err
    }
  }

  const handleClaimPromotion = (event) => {
    setPromoCode(event.target.value)
  }

  const handleSelectedMethod = (event) => {
    setMethod(event.target.value)
  }

  const handleCheckout = () => {
    const paymentData = stateMethod.find((method) => {
      if(method.Value == 'BSI') {
        return true
      }
    })
    fetchPaymentCheckout(paymentData)
  }

  const calculateDiscount = () => {
    setPromoAmount( (promoDiscount / 100) * statePackage[0].Price_Discount)
  }

  const calculateTotal = () => {
    const amount = ( (promoDiscount / 100) * statePackage[0].Price_Discount)
    setTotalPrice( statePackage[0].Price_Discount - amount )
  }

  const PaymentLogo = ({ codename }) => {
    switch(codename) {
    case 'gopay':
      return <img height={24} className={styles.imgPaymentMethod} src={Images.IconGopay}/>
    case 'ovo':
      return <img height={20} className={styles.imgPaymentMethod} src={Images.IconOvo}/>
    case 'bca':
      return <img height={22} className={styles.imgPaymentMethod} src={Images.IconBca}/>
    case 'bri':
      return <img height={24} className={styles.imgPaymentMethod} src={Images.IconBri}/>
    case 'mandiri':
      return <img height={24} className={styles.imgPaymentMethod} src={Images.IconMandiri}/>
    case 'indomaret':
      return <img height={32} className={styles.imgPaymentMethod} src={Images.IconIndomaret}/>
    case 'alfamart':
      return <img height={28} className={styles.imgPaymentMethod} src={Images.IconAlfamart}/>
    case 'BSI':
      return <img height={28} className={styles.imgPaymentMethod} src={Images.IconBsi}/>
    default :
      return <img height={28} className={styles.imgPaymentMethod} src={Images.IconBsi}/>
    }
  }

  const ContentPromo = () => {
    return (
      <div className={styles.containerPromo}>
        <img src={Images.ILTransactVoucher} className={styles.imgPromo}/>
        <div style={{ width: '100%' }}>
          <Text color='white' fontSize={'20px'}><strong>PUNYA KODE VOUCHER?</strong></Text>
          <Text color='white'>Silahkan masukan <strong>kode voucher</strong> anda dibawah ini jika anda </Text>
          <Text color='white' margin='-8px 0px'>memiliki kode voucher</Text>
          <div className={styles.containerPromoInput}>
            <TextField
              variant='outlined'
              placeholder='Contoh : BLJRIAH'
              className={`${styles.inputPromo} ${customStyles.root}`}
              inputProps={{
                style: {
                  fontSize: 20,
                  padding: '9px 18px',
                }
              }}
              value={promoCode}
              onChange={handleClaimPromotion}
            />
            <BtnClaim>
              <Buttons
                width={'140px'}
                height={'42px'}
                fontSize={'20px'}
                onClick={fetchPromotionCode}
                backgroundColor='#FF8E26'
              >
                  KLAIM
              </Buttons>
            </BtnClaim>
          </div>
        </div>
      </div>
    )
  }

  const ContentDetails = () => {
    return (
      <div className={styles.containerDetails}>
        <Text color='black'><strong>Rincian Pembayaran</strong></Text>
        <ContainerDetails>
          <div>
            <Text color='black'><strong>Judul Kelas</strong></Text>
            <Text color='silver'>{stateClass[0] != undefined && stateClass[0].Class_Name}</Text>
          </div>
          <Text color='silver'>Rp{FormatRupiah(statePackage[0] != undefined && statePackage[0].Price_Discount)}</Text>
        </ContainerDetails>
        <ContainerDetails>
          <Text color='black'><strong>Subtotal</strong></Text>
          <Text color='black'><strong>Rp{FormatRupiah(statePackage[0] != undefined && statePackage[0].Price_Discount)}</strong></Text>
        </ContainerDetails>
        <ContainerDetails>
          <Text color='black'><strong>Diskon</strong></Text>
          {promoAmount > 0 ? (
            <Text color='black'><strong>Rp{FormatRupiah(promoAmount)}</strong></Text>
          ) : (
            <Text color='black'><strong>-</strong></Text>
          )}
        </ContainerDetails>
        <ContainerDetails>
          <Text color='black'><strong>Total</strong></Text>
          <Text color='black'><strong>Rp{FormatRupiah(totalPrice)}</strong></Text>
        </ContainerDetails>
      </div>
    )
  }

  const ContentMethods = () => {
    return (
      <div className={styles.containerMethods}>
        <Text><strong>Pilih Metode Pembayaran</strong></Text>

        <FormControl component='fieldset'>
          <RadioGroup name='method' value={method} onChange={handleSelectedMethod}>

            {stateMethod.some((method) => method.Type == 'e-wallet') && (
              <>
                <Text><strong>E-WALLET</strong></Text>
                <Text>Lakukan pembayaran langsung melalui akun e-wallet anda</Text>
                {stateMethod.map((method, index) => {
                  return method.Type == 'e-wallet' && (
                    <div key={index} className={styles.containerRadio}>
                      <FormControlLabel value={method.Value} control={<Radio color='primary' />} />
                      <PaymentLogo codename={method.Value} />
                    </div>
                  )
                })}
              </>
            )}

            {stateMethod.some((method) => method.Type == 'va' ) && (
              <>
                <Text><strong>Transfer Virtual Account</strong></Text>
                <Text>Transfer pembayaran anda dengan mudah dan cepat</Text>
                {stateMethod.map((method, index) => {
                  return method.Type == 'va' && (
                    <div key={index} className={styles.containerRadio}>
                      <FormControlLabel value={method.Value} control={<Radio color='primary' />} />
                      <PaymentLogo codename={method.Value} />
                    </div>
                  )
                })}
              </>
            )}

            {stateMethod.some((method) => method.Type == 'mart') && (
              <>
                <Text><strong>Minimarket</strong></Text>
                <Text>Selesaikan pembayaran anda melalui minimarket terdekat</Text>
                {stateMethod.map((method, index) => {
                  return method.Type == 'mart' && (
                    <div key={index} className={styles.containerRadio}>
                      <FormControlLabel value={method.Value} control={<Radio color='primary' />} />
                      <PaymentLogo codename={method.Value} />
                    </div>
                  )
                })}
              </>
            )}

            {stateMethod.some((method) => method.Type == 'manual_transfer') && (
              <>
                <Text><strong>Transfer ke Rekening Bank</strong></Text>
                <Text>Selesaikan pembayaran secara fleksibel ke rekening bank yang telah disediakan</Text>
                {stateMethod.map((method, index) => {
                  return method.Type == 'manual_transfer' && (
                    <div key={index} className={styles.containerRadio}>
                      <FormControlLabel value={method.Value} control={<Radio color='primary' />} />
                      <PaymentLogo codename={method.Value} />
                    </div>
                  )
                })}
              </>
            )}

          </RadioGroup>
        </FormControl>

        <div className={styles.containerCheckout}>
          <div>
            <Text>Total Harga</Text>
            <Text fontSize={'28px'} color='#FF8E26'><strong>Rp699.000</strong></Text>
          </div>
          <BtnCheckout>
            <Buttons onClick={handleCheckout} fontSize={'20px'} height={'60px'} backgroundColor='#FF8E26'>CHECKOUT NOW</Buttons>
          </BtnCheckout>
        </div>
      </div>
    )
  }

  useEffect(() => {
    fetchDataClass(classFilter)
    fetchDataPackage(packageFilter)
    fetchDataPaymentMethod(methodFilter)
  }, [])

  return (
    ( loadingClass || loadingMethod || loadingPackage ) ? (
      <Loading type='page' />
    ) : (
      <div>
        <HeaderUser variant='purple'/>
        {ContentPromo()}
        <ContentDetails />
        <ContentMethods />
      </div>
    )
  )
}

export default TransactionMethod