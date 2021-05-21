import { useState, useEffect } from 'react'

import {
  ViewDesc,
  DescClass,
  ImgUstadz,
  ViewHeading,
  DescBiografi,
  ViewContainer,
  DescInstructor,
  TitleContainer,
  TitleInstructor,
  ViewDescHeading,
  ContainerInstructor,
} from './class-instructor.styled'
import { Images } from '../../../assets'
import { ClassAPI } from '../../../api'
import { Response } from '../../../utils'

const ClassInstructor = () => {
  const [stateClass, setStateClass] = useState([])
  const [dataState] = useState({ skip: 0, take: 1, filter: [], filterString: '[]' })

  const fetchDataClass = async ({ skip, take, filterString }) => {
    try {
      const response = await ClassAPI.GetAllClass(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateClass(response.data.data)
      }
      console.log(response.data.data)
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    fetchDataClass(dataState)
  }, [])

  return (
    <ContainerInstructor>
      <ViewContainer>
        <TitleContainer>Tentang Instruktur</TitleContainer>
        {stateClass.map((item, index) => {
          return (
            <ViewHeading key={index}>
              <div style={{ display: 'flex' }}>
                <ImgUstadz src={Images.ImgUstadzLarge} />
                <ViewDescHeading >
                  <TitleInstructor>{item.Instructor_Name}</TitleInstructor>
                  <DescInstructor>{item.Instructor_Biografi}</DescInstructor>
                </ViewDescHeading>
              </div>
              <ViewDesc>
                <DescBiografi>{item.Instructor_Description}</DescBiografi>
                <br></br>
                <DescClass>{item.Class_Description}</DescClass>
              </ViewDesc>
            </ViewHeading>
          )
        })}
      </ViewContainer>
    </ContainerInstructor>
  )
}

export default ClassInstructor