import axios from 'axios'
import { Config } from '../config'

const GetAllPromotion = async (skip, take, filters) =>  {
  try {
    // const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_MAIN_SERVICE}/promotions?skip=${skip}&take=${take}&filter=${filters}`,
    // headers
    )
    return response
  } catch (error) {
    return error
  }
}

const ClaimPromotion = async (formData) => {
  try {
    // const headers = await Header()
    const response = await axios.post(`${Config.BELAJARIAH_MAIN_SERVICE}/promotion/claim`, formData,
    // headers
    )
    return response
  } catch(error) {
    return error
  }
}

export default { GetAllPromotion, ClaimPromotion }