import AuthRoute from '@components/auth/AuthRoute'
import { Route } from 'react-router-dom'

export function renderRoutes (routeList) {
  return routeList.map(route => {
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
