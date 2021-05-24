import axios from 'axios'
import { Config } from '../config'

const GetAllPaymentMethod = async (skip, take, filters) =>  {
  try {
    // const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_MAIN_SERVICE}/payment_methods?skip=${skip}&take=${take}&filter=${filters}`,
    // headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default { GetAllPaymentMethod }