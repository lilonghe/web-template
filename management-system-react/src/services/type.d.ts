export interface IUserResponse {
  id: string
  name: string
  permissions: string[]
}

export interface IGetProjectListResponse {
  list: { id: string, name: string }[],
  total: number
}
