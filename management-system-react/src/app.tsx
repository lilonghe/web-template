import 'antd/dist/antd.css'
import './app.module.less'
import BasicLayout from './components/layout/basicLayout'
import routes, { IRoute } from './routes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store, { RootState } from './store'
import AuthRoute from '@components/auth/AuthRoute'
import Loading from '@components/loading'
import { useEffect } from 'react'

export function App () {
  return (
    <Provider store={store}>
      <RouteList />
    </Provider>
  )
}

const RouteList = () => {
  const { user } = useSelector((state: RootState) => state.session)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch.session.fetchUserInfo()
  }, [])

  if (!user) {
    return <Loading />
  }

  return (
    <Router>
      <BasicLayout>
        <Routes>
          {renderRoute(routes)}
        </Routes>
      </BasicLayout>
    </Router>
  )
}

const renderRoute = (routeList: IRoute[]) => {
  return routeList.map((route: IRoute) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={<AuthRoute route={route} />}
      >
        {route.children && renderRoute(route.children)}
      </Route>
    )
  })
}
