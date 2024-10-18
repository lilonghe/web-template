import Loading from '@/components/loading'
import { Suspense } from 'react'
import { Navigate } from 'react-router-dom'

import { checkPermission } from './auth'
import { IMyRoute } from '@/routes'

export default function AuthRoute({ route }: { route: IMyRoute }) {
  const { authority, children } = route
  if (checkPermission(authority) && route.component) {
    return (
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error 传递子路由信息到内部 */}
        <route.component routes={children} />
      </Suspense>
    )
  } else {
    return <Navigate replace to="/403" />
  }
}
