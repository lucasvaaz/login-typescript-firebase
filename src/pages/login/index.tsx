import { useContext } from "react";
import { ChooseThemeContext } from "../../context/chooseTheme";

import { Wrapper } from "./styled";

export function Login() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ChooseThemeContext);
  return (
    <Wrapper>
      <button onClick={() => {
        setIsDarkTheme(!isDarkTheme)
      }}> tema </button>
    </Wrapper>
  );
}
