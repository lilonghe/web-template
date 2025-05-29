import { IMyRoute } from '@/routes'
import { Tabs } from 'antd'
import { NavLink, useLocation } from 'react-router-dom'

export default function TabsNav({ routes }: { routes: IMyRoute[] }) {
  const location = useLocation()
  const lastPath = location.pathname.split('/').reverse()[0]

  return (
    <Tabs
      activeKey={lastPath}
      items={routes.map(route => ({
        key: route.path,
        label: <NavLink to={route.path}>{route.title}</NavLink>,
      }))}
    />
  )
}
