import config from '@/config'

export interface CommonResponse<T> {
    err?: string
    errStack?: unknown
    data?: T
}

/**
 *
 * @param {*} url
 * @param {*} userOptions
 * @returns  err, data, errStack
 */
export async function request<T> (url: string, userOptions?: any): Promise<CommonResponse<T>> {
  const options = {
    method: 'GET',
    credentials: 'include',
    ...userOptions
  }

  if (!url.startsWith('http') && !url.startsWith(config.MOCK_API)) {
    url = config.API_BASE_URL + url
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
