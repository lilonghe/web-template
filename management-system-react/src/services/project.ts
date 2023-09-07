import config from '@/config'
import { request } from './request'
import { IGetProjectListResponse } from './type'

export async function getProjectList (params: any) {
  return request<IGetProjectListResponse>(`${config.MOCK_API}/projects`, { params })
}

export async function deleteProject (params: any) {
  return request(`${config.MOCK_API}/projects`, { method: 'delete', params })
}
