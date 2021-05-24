import axios from 'axios'
import { Config } from '../config'

const GetAllRating = async (skip, take, filters) =>  {
  try {
    // const headers = await Header()
    const response = await axios.get(`
    http://dev.belajariah.com:3004/rating_class?skip=${skip}&take=${take}&filter=${filters}`,
    // headers
    )
    return response
  } catch (error) {
    return error
  }
}

export default {
  GetAllRating,
}