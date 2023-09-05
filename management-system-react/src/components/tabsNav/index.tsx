import { IMyRoute } from '@/routes'
import { Tabs } from 'antd'
import { NavLink, useLocation } from 'react-router-dom'

export default function TabsNav ({ routes }: { routes: IMyRoute[] }) {
  const location = useLocation()
  const lastPath = location.pathname.split('/').reverse()[0]

  return (
    <Tabs
      activeKey={lastPath}
    >
      {routes.map(route => <Tabs.TabPane key={route.path} tab={<NavLink to={route.path}>{route.title}</NavLink>} />)}
    </Tabs>
  )
}
