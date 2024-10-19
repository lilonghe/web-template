import config from '../../config'
import { useSessionStore } from '@/stores/useSessionStore'

export function checkPermission(
  authority: string | string[] | undefined,
  mode = config.PERMISSION_AUTH_MODE,
) {
  const { permissions } = useSessionStore.getState()

  if (authority) {
    if (typeof authority === 'string') {
      if (permissions.includes(authority)) {
        return true
      }
    } else if (Array.isArray(authority)) {
      if (mode === 'and') {
        if (authority.every((item) => permissions.includes(item))) {
          return true
        }
      } else {
        if (authority.find((item) => permissions.includes(item))) {
          return true
        }
      }
    }
  } else {
    return true
  }
  return false
}
