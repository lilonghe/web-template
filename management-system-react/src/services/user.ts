import config from '@/config'

import { requestWithStack } from './request'
import { IUserResponse } from './type'

export async function getUser() {
  return requestWithStack<IUserResponse>(`${config.MOCK_API}/user/current`)
}

export async function exitLogin() {
  return { data: {} }
}
