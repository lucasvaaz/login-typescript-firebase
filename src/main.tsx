import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChooseThemeProvider } from './context/chooseTheme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChooseThemeProvider>
    <App />
    </ChooseThemeProvider>
  </React.StrictMode>
)
