import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Login } from './pages/login'
import { darkTheme } from './themes/dark'
import { lightTheme } from './themes/light'



function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
   <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <Login />
    <button onClick={() => setIsDarkTheme(!isDarkTheme)}>tema</button>
    </ThemeProvider>
  )
}

export default App
