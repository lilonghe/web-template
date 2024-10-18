import { Fragment, ReactNode } from 'react'
import { checkPermission } from './auth'
import { Authority } from '@/types'

interface IAuthWrapper {
  children: ReactNode
  authority: Authority
}

export default function AuthWrapper({ children, authority }: IAuthWrapper) {
  if (checkPermission(authority)) {
    return <Fragment>{children}</Fragment>
  }
  return null
}
