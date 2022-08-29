import 'antd/dist/antd.variable.min.css'
import './app.module.less'
import BasicLayout from './components/layout/basicLayout'
import routes from './routes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './store'
import AuthRoute from '@components/auth/AuthRoute'
import Loading from '@components/loading'
import { useEffect } from 'react'
import { IconContext } from 'react-icons'
import { ConfigProvider } from 'antd'

export function App () {
  return (
    <IconContext.Provider value={{ className: 'icon' }}>
      <ConfigProvider>
        <Provider store={store}>
          <RouteList />
        </Provider>
      </ConfigProvider>
    </IconContext.Provider>
  )
}

const RouteList = () => {
  const { user } = useSelector(state => state.session)
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

const renderRoute = (routeList) => {
  return routeList.map(route => {
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
