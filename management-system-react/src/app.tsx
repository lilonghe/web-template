import Loading from '@/components/loading'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import BasicLayout from './components/layout/basic-layout'
import Login from './pages/login'
import routes from './routes'
import { renderRoutes } from './utils'
import { useSessionStore } from './stores/useSessionStore'

export function App() {
  const { user, fetchUserInfo } = useSessionStore()
  const location = useLocation()

  useEffect(() => {
    fetchUserInfo()
  }, [])

  if (location.pathname === '/login') {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    )
  }

  if (!user) {
    return <Loading />
  }

  return (
    <BasicLayout>
      <Routes>{renderRoutes(routes)}</Routes>
    </BasicLayout>
  )
}
