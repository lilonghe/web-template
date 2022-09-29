import 'antd/dist/antd.variable.min.css'
import './app.module.less'

import Loading from '@components/loading'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

import BasicLayout from './components/layout/basicLayout'
import routes from './routes'
import { renderRoutes } from './utils'

export function App () {
  const { user } = useSelector(state => state.session)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch.session.fetchUserInfo()
  }, [])

  // if (!user) {
  //   return <Loading />
  // }

  return (
    <Router>
      <BasicLayout>
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </BasicLayout>
    </Router>
  )
}
