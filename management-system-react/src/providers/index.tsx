import { IconContext } from 'react-icons'
import AntdProvider from './antd'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <IconContext.Provider value={{ className: 'icon' }}>
      <AntdProvider>{children}</AntdProvider>
    </IconContext.Provider>
  )
}
