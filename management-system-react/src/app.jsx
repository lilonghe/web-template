import 'antd/dist/antd.css'
import './app.module.less'
import BasicLayout from './components/layout/basicLayout'
import routes from './routes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import AuthRoute from '@components/auth/AuthRoute'

export function App () {
  return (
    <Provider store={store}>
      <RouteList />
    </Provider>
  )
}

const RouteList = () => {
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
    if (route.children) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<AuthRoute route={route} />}
        >
          {renderRoute(route.children)}
        </Route>
      )
    } else {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<AuthRoute route={route} />}
        />
      )
    }
  })
}
