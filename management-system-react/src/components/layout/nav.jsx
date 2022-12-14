import { checkPermission } from '@components/auth/auth'
import { Menu } from 'antd'
import { Link, matchPath } from 'react-router-dom'

import routes from '../../routes'
import styles from './basicLayout.module.less'

export default function Nav () {
  let rootActiveKey
  let isMatchNav = false
  let defaultActiveKey = location.pathname || '/'

  const generateNav = (routes, parent) => {
    return routes.filter(r => r.isNav && checkPermission(r.authority)).map(r => {
      const isMatchPath = matchPath(r.path, defaultActiveKey)

      if (isMatchPath) {
        isMatchNav = true
      }

      if (parent && isMatchPath) {
        rootActiveKey = parent.path
      }

      if (r.isGroup) {
        return <Menu.SubMenu key={r.path} title={r.title} icon={r.icon}>
          {generateNav(r.children, r)}
        </Menu.SubMenu>
      }
      return <Menu.Item
        key={r.path}
        icon={r.icon}>
        <Link to={r.path}>{r.title}</Link>
      </Menu.Item>
    })
  }

  // 未匹配到绝对路由时，截取 url 最前缀当作上级导航
  // TODO: 但是如果是从耳机导航进入，应该高亮二级菜单
  if (!isMatchNav) {
    defaultActiveKey = '/' + defaultActiveKey.split('/')[1]
  }

  const navList = generateNav(routes)

  return (
    <Menu
      mode='inline'
      defaultOpenKeys={[rootActiveKey]}
      defaultSelectedKeys={[defaultActiveKey]}
      className={styles.menu}>
      {navList}
    </Menu>
  )
}
