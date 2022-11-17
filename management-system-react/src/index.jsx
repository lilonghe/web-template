import { ConfigProvider } from 'antd'
import { createRoot } from 'react-dom/client'
import { IconContext } from 'react-icons'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './app.jsx'
import store from './store'

const app = document.getElementById('app')
const root = createRoot(app)

root.render(
  <IconContext.Provider value={{ className: 'icon' }}>
    <ConfigProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ConfigProvider>
  </IconContext.Provider>
)
