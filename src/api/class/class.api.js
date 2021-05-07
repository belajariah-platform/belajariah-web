import axios from 'axios'
import { Config } from '../config'

const GetAllClass = async (skip, take, filters) =>  {
  try {
    // const headers = await Header()
    const response = await axios.get(`
    ${Config.BELAJARIAH_MAIN_SERVICE}/classes?skip=${skip}&take=${take}&filter=${filters}`,
    // headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default { GetAllClass }