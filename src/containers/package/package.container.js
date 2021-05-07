import { Images } from '../../assets'
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
  ViewDescBenefits,
  ContainerPackage,
  TitleClassPackage,
  TitleDescContainer,
  ViewContainerPackage,
  ViewTitleClassPackage,
} from './package.styled'

const Package = () => {
  const ListPackage= [
    { id: 1, name: 'Paket Darussalam' },
    { id: 2, name: 'Paket Naim' },
    { id: 3, name: 'Paket Firdaus' },
  ]

  const PackageClass = () => {
    return(
      <ContainerPackage>
        <TitleContainer>Pilih Paket Belajar</TitleContainer>
        <TitleDescContainer>Yuk, Pilih Paket Belajar Tahsin sesuai kebutuhan kamu sekarang</TitleDescContainer>
        <ViewContainerPackage>
          {ListPackage.map((item, index) => {
            return (
              <ClassPackage key={index}>
                <ViewTitleClassPackage>
                  <TitleClassPackage>{item.name}</TitleClassPackage>
                </ViewTitleClassPackage>
                <div style={{ textAlign: 'center' }}><TriangleImg src={Images.IconTrianglePurple} /></div>
                <ViewDescPackage>
                  <TxtOldPrice><s>Rp1.000.000</s></TxtOldPrice>
                  <TxtNewPrice>Rp699.000</TxtNewPrice>
                  <LineTxt />
                  <TxtDescTitle>Keuntungan yang kamu <br></br>dapatkan</TxtDescTitle>
                  <ViewDescBenefits>
                    <BenefitsIcon width={35} height={30} src={Images.IconAccessVideo} />
                    <TxtBenefits >Akses Video Selamanya</TxtBenefits>
                  </ViewDescBenefits>
                  <ViewDescBenefits>
                    <BenefitsIcon width={34} height={28} src={Images.IconConsultation} />
                    <TxtBenefits>Akses Konsultasi 16x</TxtBenefits>
                  </ViewDescBenefits>
                  <ViewDescBenefits>
                    <BenefitsIcon width={35} height={25} src={Images.IconWebinar} />
                    <TxtBenefits>Webinar 2x</TxtBenefits>
                  </ViewDescBenefits>
                  <ViewButtons><Buttons>Pilih Sekarang</Buttons></ViewButtons>
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