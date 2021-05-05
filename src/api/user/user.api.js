import axios from 'axios'
// import { Config, Header } from '../config'

const GetUser = async (email) =>  {
  try {
    // const headers = await Header()
    const response = await axios.get(`
    http://dev.belajariah.com:3004/user/${email}`,
    // headers
    )
    return response
  } catch (error) {
    return error
  }
}

const UpdateProfile = async (formData) =>  {
  try {
    // const headers = await Header()
    const response = await axios.put(`
    http://dev.belajariah.com:3004/user`,
    formData,
    // headers
    )
    return response
  } catch (error) {
    return error
  }
}

const ChangePasswordPrivate = async (formData) =>  {
  console.log(formData, 'hai')
  try {
    // const headers = await Header()
    const response = await axios.put(`
    http://dev.belajariah.com:3004/change_password_private`,
    formData,
    // headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default {
  GetUser,
  UpdateProfile,
  ChangePasswordPrivate,
}