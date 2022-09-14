import { ConfigProvider } from 'antd'
import { createRoot } from 'react-dom/client'
import { IconContext } from 'react-icons'
import { Provider } from 'react-redux'

import { App } from './app.jsx'
import store from './store'

const app = document.getElementById('app')
const root = createRoot(app)

root.render(
  <IconContext.Provider value={{ className: 'icon' }}>
    <ConfigProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </IconContext.Provider>
)
