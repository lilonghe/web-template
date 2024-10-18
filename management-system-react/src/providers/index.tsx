import { IconContext } from 'react-icons'
import AntdProvider from './antd'
import { Provider } from 'react-redux'

import store from '../store'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <IconContext.Provider value={{ className: 'icon' }}>
      <AntdProvider>
        <Provider store={store}>{children}</Provider>
      </AntdProvider>
    </IconContext.Provider>
  )
}
