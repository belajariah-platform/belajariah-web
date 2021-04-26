import axios from 'axios'
// import { Config, Header } from '../config'

const GetAllEnum = async (skip, take, filters) =>  {
  try {
    // const headers = await Header()
    const response = await axios.get(`
    http://dev.belajariah.com:3004/enums?skip=${skip}&take=${take}&filter=${filters}`,
    // headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default { GetAllEnum }