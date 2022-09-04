import { checkPermission } from './auth'

export default function AuthWrapper ({ children, authority }) {
  if (checkPermission(authority)) {
    return children
  }
  return null
}
