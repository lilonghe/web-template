import routes from '../../routes'
import styles from './basicLayout.module.less'
import { Menu } from 'antd'
import { checkPermission } from '@components/auth/auth'
import { Link } from 'react-router-dom'

export default function Nav () {
  const defaultActiveKey = location.pathname.split('/')[1] || '/'
  return (
    <Menu
      mode='inline'
      defaultSelectedKeys={[defaultActiveKey]}
      className={styles.menu}>
      {routes.filter(r => r.isNav && checkPermission(r.authority)).map(r => <Menu.Item
        key={r.path}
        icon={r.icon}>
        <Link to={r.path}>{r.title}</Link>
      </Menu.Item>)}
    </Menu>
  )
}
