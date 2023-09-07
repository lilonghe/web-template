import config from '@/config'
import { request } from './request'

export async function getProjectList (params: any) {
  return request<{
    list: { id: string, name: string }[],
    total: number
  }>(`${config.MOCK_API}/projects`, { params })
}

export async function deleteProject (params: any) {
  return request(`${config.MOCK_API}/projects`, { method: 'delete', params })
}
