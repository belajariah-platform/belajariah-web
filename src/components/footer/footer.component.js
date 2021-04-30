import { useEffect, useState } from 'react'

import { EnumAPI } from '../../api'
import {
  TopFooter,
  FooterPage,
  FooterInfo,
  ViewFooter,
  FooterContact,
  Containerfooter,
} from './footer.styled'
import { Images } from '../../assets'
import { Response } from '../../utils'
import styles from '../../assets/css/footer.module.css'

const Footer = () => {
  const [stateSocialMedia, setStateSocialMedia] = useState([])
  const [loadingSocialMedia, setloadingSocialMedia] = useState(true)
  const [dataState] = useState({ skip: 0, take: 7, filter: [], filterString: '[]' })

  const fetchDataSocialMedia = async ({ skip, take, filterString }) => {
    try {
      setloadingSocialMedia(true)
      filterString='[{"type": "text", "field" : "type", "value": "social_media"}]'
      const response = await EnumAPI.GetAllEnum(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateSocialMedia(response.data.data)
      }
      setloadingSocialMedia(false)
    } catch (err) {
      setloadingSocialMedia(false)
      return err
    }
  }

  useEffect(() => {
    fetchDataSocialMedia(dataState)
  }, [])

  return(
    <Containerfooter>
      <ViewFooter>
        <TopFooter>
          <div className={styles.IconLogo}><img src={Images.BelajariahLogoWhite} /></div>
          <FooterPage>
            <div className={styles.TitleDescPage}><p>BELAJARIAH</p></div>
            <div className={styles.DescFooter}>
              <a href='#'><p>Kelas</p></a>
              <a href='#'><p>Tentang Kami</p></a>
              <a href='/blog'><p>Bacaan Inspiratif</p></a>
            </div>
            <div className={styles.ViewDescOther}>
              <p>TERSEDIA DI :</p>
              {stateSocialMedia.map((item, index) => {
                let icon
                let value = item.Value.split('|')[0]
                value == 'Googleplay' ? icon = Images.IconGoPlay :
                  icon = Images.IconYt
                return value == 'Googleplay' ? (
                  <a key={index} href={item.Value.split('|')[1]}><img src={icon} width={130} /></a>
                ) : null
              })}
            </div>
          </FooterPage>
          <FooterInfo>
            <div className={styles.TitleDescInfo}><p>INFORMASI</p></div>
            <div className={styles.DescFooter}>
              <a href='#'><p>Syarat dan Ketentuan</p></a>
              <a href='#'><p>Kebijakan Privasi</p></a>
              <a href='#'><p>Bantuan</p></a>
            </div>
            <div className={styles.ViewDescOther}>
              <p>IKUTI KAMI</p>
              <div className={styles.ViewIconSocmed}>
                {stateSocialMedia.map((item, index) => {
                  let icon
                  let value = item.Value.split('|')[0]
                  value == 'Facebook' ? icon = Images.IconFb :
                    value == 'Instagram' ? icon = Images.IconInsta :
                      icon = Images.IconYt
                  return value == 'Facebook' || value == 'Instagram' || value == 'Youtube' ? (
                    <a key={index} href={item.Value.split('|')[1]}><img src={icon} /></a>
                  ) : null
                })}
              </div>
            </div>
          </FooterInfo>
          <FooterContact>
            <div className={styles.TitleDescContact}><p>HUBUNGI KAMI</p></div>
            <div className={styles.DescFooter}>
              {stateSocialMedia.map((item, index) => {
                let icon
                let value = item.Value.split('|')[0]
                value == 'Gmail' ? icon = Images.IconEmail :
                  value == 'Phone' ? icon = Images.IconPhone :
                    icon = Images.IconWA
                return value == 'Gmail' || value == 'Phone' || value =='Whatsapp' ? (
                  <div key={index}>
                    <div className={styles.ViewContact}>
                      <img src={icon} width={24} height={20}/>
                      <p>{item.Value.split('|')[1]}</p>
                    </div>
                  </div>
                ) : null
              })}
            </div>
          </FooterContact>
        </TopFooter>
        <div className={styles.BottomFooter}>
          <hr></hr>
          <p>©2021 Belajariah. All Right Reserved.</p>
        </div>
      </ViewFooter>
      <section>
        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
      </section>
    </Containerfooter>
  )
}

export default Footer