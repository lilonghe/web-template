import { IMyRoute } from '@/routes'
import AuthRoute from '@components/auth/AuthRoute'
import { ReactNode } from 'react'
import { Route } from 'react-router-dom'

export function renderRoutes (routeList: IMyRoute[]): ReactNode[] {
  return routeList.map((route: IMyRoute) => {
    if (route.isGroup) {
      return route.children && renderRoutes(route.children)
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        element={<AuthRoute route={route} />}
          >
        {route.children && renderRoutes(route.children)}
      </Route>
    )
  })
}
