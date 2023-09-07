import config from '@/config'

import { request } from './request'
import { IUserResponse } from './type'

export async function getUser () {
  return request<IUserResponse>(`${config.MOCK_API}/user/current`)
}

export async function exitLogin () {
  return { data: {} }
}
