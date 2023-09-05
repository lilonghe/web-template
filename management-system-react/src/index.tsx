import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { IconContext } from 'react-icons'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './app'
import store from './store'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <IconContext.Provider value={{ className: 'icon' }}>
      <ConfigProvider>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </ConfigProvider>
    </IconContext.Provider>
  </React.StrictMode>
)
