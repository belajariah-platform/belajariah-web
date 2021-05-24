import axios from 'axios'
import { Config } from '../config'

const SignIn = async (formData) => {
  try {
    const response = await axios.post(
        `${Config.BELAJARIAH_MAIN_SERVICE}/login`,
        formData,
    )
    return response
  } catch (error) {
    return error
  }
}

const SignUp = async (formData) =>  {
  try {
    //const headers = await Header()
    const response = await axios.post(`
      ${Config.BELAJARIAH_MAIN_SERVICE}/register`,
    formData,
    //headers
    )
    return response
  } catch (error) {
    return error
  }
}

const ChangePasswordPublic = async (formData) =>  {
  try {
    //const headers = await Header()
    const response = await axios.put(`
      ${Config.BELAJARIAH_MAIN_SERVICE}/change_password_public`,
    formData,
    //headers
    )
    return response
  } catch (error) {
    return error
  }
}

const VerifyAccount = async (formData) =>  {
  try {
    //const headers = await Header()
    const response = await axios.put(`
      ${Config.BELAJARIAH_MAIN_SERVICE}/verify_account`,
    formData,
      //headers
    )
    return response
  } catch (error) {
    return error
  }
}

const VerifyEmail = async (formData) =>  {
  try {
    //const headers = await Header()
    const response = await axios.put(`
      ${Config.BELAJARIAH_MAIN_SERVICE}/verify_email`,
    formData,
      //headers
    )
    return response
  } catch (error) {
    return error
  }
}

const ResetVerification = async (formData) =>  {
  try {
    //const headers = await Header()
    const response = await axios.put(`
      ${Config.BELAJARIAH_MAIN_SERVICE}/reset_verification`,
    formData,
      //headers
    )
    return response
  } catch (error) {
    return error
  }
}

const CheckEmail = async (email) =>  {
  try {
    //const headers = await Header()
    const response = await axios.get(`
      ${Config.BELAJARIAH_MAIN_SERVICE}/check_email/${email}`,
      //headers
    )
    return response
  } catch (error) {
    return error
  }
}

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
  SignIn,
  SignUp,
  GetUser,
  CheckEmail,
  VerifyEmail,
  VerifyAccount,
  UpdateProfile,
  ResetVerification,
  ChangePasswordPublic,
  ChangePasswordPrivate,
}