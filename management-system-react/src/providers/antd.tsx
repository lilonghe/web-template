import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'

export default function AntdProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: 'white',
          },
        },
      }}
    >
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProvider>
  )
}
