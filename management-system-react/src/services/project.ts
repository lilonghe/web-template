import config from '@/config'
import { request, requestWithStack } from './request'
import { IGetProjectListResponse } from './type'

export async function getProjectList(params: any) {
  return request<IGetProjectListResponse>(`${config.MOCK_API}/projects`, {
    params,
  })
}

export async function deleteProject(params: any) {
  return requestWithStack(`${config.MOCK_API}/projects`, { method: 'delete', params })
}
