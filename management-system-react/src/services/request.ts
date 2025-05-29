import config from '@/config'
import { obj2Query } from '@/utils'

export interface CommonResponse<T> {
  err?: string
  errStack?: unknown
  data?: T
}

/**
 * 数据请求，返回原始信息，以及错误信息
 * @param {*} url
 * @param {*} userOptions
 * @returns  err, data, errStack
 */
export async function requestWithStack<T>(
  url: string,
  userOptions?: any,
): Promise<CommonResponse<T>> {
  const options = {
    method: 'GET',
    credentials: 'include',
    ...userOptions,
  }

  if (!url.startsWith('http') && !url.startsWith(config.MOCK_API)) {
    url = config.API_BASE_URL + url
  }

  if (options.method.toLowerCase() !== 'get') {
    if (options.params) {
      options.data = JSON.stringify(options.params)
    }
  } else {
    if (options.params) {
      url += '?' + obj2Query(options.params)
    }
  }

  return fetch(url, options)
    .then(res => res.json())
    .then(data => {
      if (data?.code) {
        return { err: data.code, errStack: data }
      } else {
        return { data }
      }
    })
    .catch(err => {
      return { err: err.message, errStack: err }
    })
}

/**
 * 数据请求，只返回实际数据
 * @param {*} url
 * @param {*} userOptions
 * @returns  T
 */
export async function request<T>(
  url: string,
  userOptions?: any,
): Promise<T | undefined> {
  const res = await requestWithStack<T>(url, userOptions)
  return res.data
}
