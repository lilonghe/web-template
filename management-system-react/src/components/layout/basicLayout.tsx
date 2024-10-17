import { Layout } from 'antd'
import { ReactNode, useState } from 'react'

import styles from './basicLayout.module.less'
import Nav from './Nav'
import User from './User'
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai'

export default function BasicLayout ({ children } : { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

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
          <User />
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
