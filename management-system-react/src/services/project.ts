import config from '@/config'
import { request } from './request'

export async function getProjectList (params: any) {
  return request<{
    list: { id: string, name: string }[],
    total: number
  }>(`${config.MOCK_API}/projects`, { params })
}
