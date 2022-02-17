import { checkPermission } from './auth'

export default function AuthRoute ({ children, authority }) {
  if (checkPermission(authority)) {
    return children
  }
  return null
}
