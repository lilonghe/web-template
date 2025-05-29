import { checkPermission } from '@/components/auth/auth'
import { Menu } from 'antd'
import { Link, matchPath } from 'react-router-dom'

import type { MenuProps } from 'antd'
import { Key, ReactNode } from 'react'
import routes, { IMyRoute } from '../../routes'

type MenuItem = Required<MenuProps>['items'][number]
function getItem(
  label: ReactNode,
  key?: Key | null,
  icon?: ReactNode,
  children?: MenuItem[],
  theme?: 'light' | 'dark',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    theme,
  } as MenuItem
}

export default function Nav() {
  let rootActiveKey: string = ''
  let isMatchNav = false
  let defaultActiveKey = location.pathname || '/'

  const getItems = (routeList: IMyRoute[], parent?: IMyRoute): MenuItem[] => {
    return routeList.map(route => {
      const isMatchPath = matchPath(route.path, defaultActiveKey)

      if (isMatchPath) {
        isMatchNav = true
      }

      if (parent && isMatchPath) {
        rootActiveKey = parent.path
      }
      const label = route.isGroup ? (
        route.title
      ) : (
        <Link to={route.path}>{route.title}</Link>
      )
      return getItem(
        label,
        route.path,
        route.icon,
        route.children && getItems(route.children, route),
      )
    })
  }

  const menuItems: MenuItem[] = getItems(
    routes.filter(route => route.isNav && checkPermission(route.authority)),
  )

  // 未匹配到绝对路由时，截取 url 最前缀当作上级导航
  // TODO: 但是如果是从耳机导航进入，应该高亮二级菜单
  if (!isMatchNav) {
    defaultActiveKey = '/' + defaultActiveKey.split('/')[1]
  }

  return (
    <Menu
      mode="inline"
      defaultOpenKeys={[rootActiveKey]}
      defaultSelectedKeys={[defaultActiveKey]}
      className={'border-0'}
      items={menuItems}
    />
  )
}
