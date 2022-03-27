import { Navigate } from 'react-router-dom'
import { Suspense } from 'react'
import { checkPermission } from './auth'
import Loading from '@components/loading'

export default function AuthRoute ({ route }) {
  const { authority, children } = route
  if (checkPermission(authority)) {
    return <Suspense fallback={<Loading />}><route.component routes={children} /></Suspense>
  } else {
    return <Navigate replace to='/403' />
  }
}
