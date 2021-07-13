import { useState, useEffect } from 'react'
import { withStyles, LinearProgress } from '@material-ui/core'

import { HeaderUser, Footer } from '../../../components'
import {
  Images,
} from '../../../assets'
import {
  Exam,
  ImgExam,
  BtnStart,
  ViewExam,
  ViewCard,
  ImgClass,
  TxtNoList,
  ImgNoList,
  TitleExam,
  TitleClass,
  TxtProgress,
  ViewTxtCard,
  ViewProgress,
  ViewListUser,
  TitleProgress,
  ViewNoListUser,
  ContainerListUser,
  ContainerNoListUser,
} from './class-user.styled'

const ClassUser = () => {
  const isClassList = true
  const NoneListClassUser = () => {
    return (
      <ContainerNoListUser>
        <ViewNoListUser>
          <ImgNoList src={Images.IconBookmark}  />
          <TxtNoList><strong>Maaf,</strong> saat ini tidak ada kelas yang anda ambil</TxtNoList>
        </ViewNoListUser>
      </ContainerNoListUser>
    )
  }
  const ListClassUser = () => {
    const [progress, setProgress] = useState(10)
    const BorderLinearProgress = withStyles((theme) => ({
      root: {
        height: 10,
        borderRadius: 10,
      },
      colorPrimary: {
        backgroundColor: '#f1c0fd',
      },
      bar: {
        borderRadius: 6,
        backgroundColor: '#951CB3',
      },
    }))(LinearProgress)

    return (
      <ContainerListUser>
        <ViewListUser>
          <ViewCard>
            <ImgClass src={Images.ImgIllustrationTahsin} />
            <ViewTxtCard>
              <TitleClass>Belajar Al-Qur’an dari dasar dengan metode mudah dan menyenangka..</TitleClass>
              <ViewExam>
                <Exam>
                  <ImgExam src={Images.IconExam} width='20' />
                  <TitleExam>Nilai Ujian Awal : 80</TitleExam>
                </Exam>
                <Exam>
                  <ImgExam src={Images.IconLastExam} height='22' />
                  <TitleExam>Nilai Ujian Akhir : 80</TitleExam>
                </Exam>
              </ViewExam>
              <ViewProgress>
                <div style={{ width: '100%' }}>
                  <TitleProgress>Progress</TitleProgress>
                  <Exam >
                    <div style={{ width: '75%' }}>
                      <BorderLinearProgress variant='determinate' value={progress} />
                    </div>
                    <TxtProgress>{progress}%</TxtProgress>
                  </Exam>
                </div>
                <BtnStart>Mulai</BtnStart>
              </ViewProgress>
            </ViewTxtCard>
          </ViewCard>
          <ViewCard>
            <ImgClass src={Images.ImgIllustrationTahsin} />
            <ViewTxtCard>
              <TitleClass>Belajar Al-Qur’an dari dasar dengan metode mudah dan menyenangka..</TitleClass>
              <ViewExam>
                <Exam>
                  <ImgExam src={Images.IconExam} width='20' />
                  <TitleExam>Nilai Ujian Awal : 80</TitleExam>
                </Exam>
                <Exam>
                  <ImgExam src={Images.IconLastExam} height='22' />
                  <TitleExam>Nilai Ujian Akhir : 80</TitleExam>
                </Exam>
              </ViewExam>
              <ViewProgress>
                <div style={{ width: '100%' }}>
                  <TitleProgress>Progress</TitleProgress>
                  <Exam >
                    <div style={{ width: '75%' }}>
                      <BorderLinearProgress variant='determinate' value={progress} />
                    </div>
                    <TxtProgress>{progress}%</TxtProgress>
                  </Exam>
                </div>
                <BtnStart>Mulai</BtnStart>
              </ViewProgress>
            </ViewTxtCard>
          </ViewCard>
          <ViewCard>
            <ImgClass src={Images.ImgIllustrationTahsin} />
            <ViewTxtCard>
              <TitleClass>Belajar Al-Qur’an dari dasar dengan metode mudah dan menyenangka..</TitleClass>
              <ViewExam>
                <Exam>
                  <ImgExam src={Images.IconExam} width='20' />
                  <TitleExam>Nilai Ujian Awal : 80</TitleExam>
                </Exam>
                <Exam>
                  <ImgExam src={Images.IconLastExam} height='22' />
                  <TitleExam>Nilai Ujian Akhir : 80</TitleExam>
                </Exam>
              </ViewExam>
              <ViewProgress>
                <div style={{ width: '100%' }}>
                  <TitleProgress>Progress</TitleProgress>
                  <Exam >
                    <div style={{ width: '75%' }}>
                      <BorderLinearProgress variant='determinate' value={progress} />
                    </div>
                    <TxtProgress>{progress}%</TxtProgress>
                  </Exam>
                </div>
                <BtnStart>Mulai</BtnStart>
              </ViewProgress>
            </ViewTxtCard>
          </ViewCard>
        </ViewListUser>
      </ContainerListUser>
    )
  }
  return (
    <div>
      <HeaderUser variant='purple' />
      {isClassList ? <ListClassUser /> : <NoneListClassUser />}
      <Footer />
    </div>
  )
}

export default ClassUser