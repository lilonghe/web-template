import './app.module.less'

import Loading from '@/components/loading'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'

import BasicLayout from './components/layout/basicLayout'
import Login from './pages/login'
import routes from './routes'
import { renderRoutes } from './utils'
import { RootState } from './store'

export function App () {
  const { user } = useSelector((state: RootState) => state.session)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch.session.fetchUserInfo()
  }, [])

  if (location.pathname === '/login') {
    return <Routes>
      <Route path='/login' element={<Login />} />
    </Routes>
  }

  if (!user) {
    return <Loading />
  }

  return (
    <BasicLayout>
      <Routes>
        {renderRoutes(routes)}
      </Routes>
    </BasicLayout>
  )
}
