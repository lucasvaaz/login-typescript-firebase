import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ChooseThemeContext } from "./context/chooseTheme";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  const { isDarkTheme } = useContext(ChooseThemeContext);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
