import { Layout } from 'antd'
import { ReactNode, useState } from 'react'

import { AiOutlineMenu, AiOutlineMenuFold } from 'react-icons/ai'
import styles from './basic-layout.module.less'
import Nav from './nav'
import User from './user'

export default function BasicLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout>
      <Layout.Sider
        trigger={null}
        collapsed={collapsed}
        theme="light"
        className={styles.sider}
      >
        <div className={'flex whitespace-nowrap items-center p-5 gap-2'}>
          <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            className="flex-shrink-0"
          >
            <rect width={40} height={40}></rect>
          </svg>
          {!collapsed && '后台管理模板'}
        </div>
        <Nav />
      </Layout.Sider>
      <Layout>
        <Layout.Header
          className={
            '!pl-4 flex justify-between items-center relative shadow-sm z-10 !h-[var(--layout-header-height)]'
          }
        >
          <span onClick={toggleCollapsed} className="cursor-pointer">
            {collapsed ? <AiOutlineMenu /> : <AiOutlineMenuFold />}
          </span>
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
