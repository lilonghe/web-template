import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './app'
import Providers from './providers'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Providers>
      <Router>
        <App />
      </Router>
    </Providers>
  </React.StrictMode>,
)
