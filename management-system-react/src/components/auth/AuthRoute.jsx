import Loading from '@components/loading'
import { Suspense } from 'react'
import { Navigate } from 'react-router-dom'

import { checkPermission } from './auth'

export default function AuthRoute ({ route }) {
  const { authority, children } = route
  if (checkPermission(authority)) {
    return <Suspense fallback={<Loading />}><route.component routes={children} /></Suspense>
  } else {
    return <Navigate replace to='/403' />
  }
}
