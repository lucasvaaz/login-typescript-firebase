import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ChooseThemeContext } from "./context/chooseTheme";
import { Login } from "./pages/login";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";

function App() {
  const { isDarkTheme } = useContext(ChooseThemeContext);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
