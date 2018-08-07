import fly from '../utils/http'
import qs from 'qs'
import {
  baseUrl
} from './config'

const api = {
  getSalesInfo: params => {
    return fly.post('/user/getSalesInfo', qs.stringify(params))
  },
  in_theaters: () => {
    return fly.get(baseUrl + '/v2/movie/in_theaters')
  },
  search: (params) => {
    return fly.get(`${baseUrl}/v2/movie/search`, params)
  }
};
export default api
