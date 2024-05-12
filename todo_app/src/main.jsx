import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToDoCtxProvider } from './store/ToDoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoCtxProvider>
      <App />
    </ToDoCtxProvider>
  </React.StrictMode>,
)
