import { useState, useEffect } from 'react'

import { Images } from '../../assets'
import { PackageAPI} from '../../api'
import { Response, FormatRupiah} from '../../utils'
import { HeaderUser, Footer, Buttons } from '../../components'
import {
  LineTxt,
  TxtNewPrice,
  TxtOldPrice,
  TriangleImg,
  TxtBenefits,
  ViewButtons,
  BenefitsIcon,
  TxtDescTitle,
  ClassPackage,
  TitleContainer,
  ViewDescPackage,
  TxtChildBenefits,
  ViewDescBenefits,
  ContainerPackage,
  TitleClassPackage,
  TitleDescContainer,
  ViewContainerPackage,
  ViewTitleClassPackage,
} from './package.styled'

const Package = () => {
  const [statePackage, setStatePackage] = useState([])
  const [dataState] = useState({ skip: 0, take: 3, filter: [], filterString: '[]' })

  const fetchDataPackage = async (state, code) => {
    try {
      let { skip, take, filterString } = state
      filterString=`[{"type": "text", "field" : "class_code", "value": "CLC00000001"}]`
      const response = await PackageAPI.GetAllPackage(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStatePackage(response.data.data)
      } 
      console.log(response)
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    fetchDataPackage(dataState)
  }, [])

  const PackageClass = () => {
    return(
      <ContainerPackage>
        <TitleContainer>Pilih Paket Belajar</TitleContainer>
        <TitleDescContainer>Yuk, Pilih Paket Belajar Tahsin sesuai kebutuhan kamu sekarang</TitleDescContainer>
        <ViewContainerPackage>
          {statePackage.map((item, index) => {
            return (
              <ClassPackage key={index}>
                <ViewTitleClassPackage>
                  <TitleClassPackage>Paket {item.Type}</TitleClassPackage>
                </ViewTitleClassPackage>
                <div style={{ textAlign: 'center' }}><TriangleImg src={Images.IconTrianglePurple} /></div>
                <ViewDescPackage>
                  <TxtOldPrice><s>Rp{FormatRupiah(item.Price_Package)}</s></TxtOldPrice>
                  <TxtNewPrice>Rp{FormatRupiah(item.Price_Discount)}</TxtNewPrice>
                  <LineTxt />
                  <TxtDescTitle>Keuntungan yang kamu <br></br>dapatkan</TxtDescTitle>
                  <ViewDescBenefits>
                    <BenefitsIcon width={35} height={30} src={Images.IconAccessVideo} />
                    <TxtBenefits >Akses Video Selamanya</TxtBenefits>
                  </ViewDescBenefits>
                  <ViewDescBenefits>
                    <BenefitsIcon width={34} height={28} src={Images.IconConsultation} />
                    <div>
                      <TxtBenefits>Akses Konsultasi {item.Consultation}x</TxtBenefits>
                      <TxtChildBenefits>({item.Duration} Bulan)</TxtChildBenefits>
                    </div>
                  </ViewDescBenefits>
                  <ViewDescBenefits>
                    <BenefitsIcon width={35} height={25} src={Images.IconWebinar} />
                    <TxtBenefits>Webinar {item.Webinar}x</TxtBenefits>
                  </ViewDescBenefits>
                  <ViewButtons><Buttons fontSize={'14px'}>PILIH SEKARANG</Buttons></ViewButtons>
                </ViewDescPackage>
              </ClassPackage>
            )
          })}
        </ViewContainerPackage>
      </ContainerPackage>
    )
  }

  return (
    <div>
      <HeaderUser />
      <PackageClass />
      <Footer />
    </div>
  )
}

export default Package