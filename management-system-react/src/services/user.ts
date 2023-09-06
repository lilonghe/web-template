import config from '@/config'

import { request } from './request'

export async function getUser () {
  return request(`${config.MOCK_API}/user/current`)
}

export async function exitLogin () {
  return { data: {} }
}
