import { request } from './request'
import config from '@/config'

export async function getUser () {
  return request(`${config.MOCK_API}/user/current`)
}
