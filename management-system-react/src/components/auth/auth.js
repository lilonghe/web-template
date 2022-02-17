import { useSelector } from 'react-redux'
import config from '../../config'

export function checkPermission (authority, mode = config.PERMISSION_AUTH_MODE) {
  const { permissions } = useSelector(state => state.session)

  if (authority) {
    if (typeof authority === 'string') {
      if (permissions.includes(authority)) {
        return true
      }
    } else if (Array.isArray(authority)) {
      if (mode === 'and') {
        if (authority.every(item => permissions.includes(item))) {
          return true
        }
      } else {
        if (authority.find(item => permissions.includes(item))) {
          return true
        }
      }
    }
  } else {
    return true
  }
  return false
}
