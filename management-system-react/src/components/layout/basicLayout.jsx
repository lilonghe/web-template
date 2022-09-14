import { Avatar, Dropdown, Layout, Menu } from 'antd'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './basicLayout.module.less'
import Nav from './nav'

export default function BasicLayout ({ children }) {
  const [collapsed, setCollapsed] = useState(false)
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
        <Nav />
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
