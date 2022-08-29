import { Dropdown, Layout, Menu, Avatar } from 'antd'
import styles from './basicLayout.module.less'
import { useState } from 'react'

import { AiOutlineHome, AiOutlineUser, AiOutlineSecurityScan } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function BasicLayout ({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const { user } = useSelector(state => state.session)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout>
      <Layout.Sider
        trigger={null}
        collapsed={collapsed}
        theme='light'
        className={styles.sider}
      >
        <div className={styles.logo}>
          后台管理模板
        </div>
        <Menu
          mode='inline'
          defaultSelectedKeys={[location.pathname.split('/')[1] || 'home']}
          className={styles.menu}
        >
          <Menu.Item key='home' icon={<AiOutlineHome />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='about' icon={<AiOutlineUser />}>
            <Link to='/about'>About</Link>
          </Menu.Item>
          <Menu.Item key='private' icon={<AiOutlineSecurityScan />}>
            <Link to='/private'>Private</Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header className={styles.header}>
          <img
            onClick={toggleCollapsed}
            // src={collapsed ? AiOutlineFolder : AiOutlineFolderOpen}
            className={styles.collapseIcon}
          />
          <Dropdown overlay={<Menu><Menu.Item key='exit'>Exit</Menu.Item></Menu>}>
            <Avatar className={styles.avatar}>{user.name[0]}</Avatar>
          </Dropdown>
        </Layout.Header>
        <div className={styles.contentWrapper}>
          <Layout.Content className={styles.mainContent}>
            {children}
          </Layout.Content>
        </div>
      </Layout>

    </Layout>
  )
}
