import { Avatar, Dropdown, Layout } from 'antd'
import { useToken } from 'antd/es/theme/internal'
import { ReactNode, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './basicLayout.module.less'
import Nav from './nav'
import { RootState } from '@/store'

export default function BasicLayout ({ children } : { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const { user } = useSelector((state: RootState) => state.session)
  const [, token] = useToken()

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
          <Dropdown menu={{ items: [{ key: 'exit', label: 'Exit' }] }}>
            <Avatar className={styles.avatar} style={{ background: token.colorPrimary }}>{user?.name[0]}</Avatar>
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
