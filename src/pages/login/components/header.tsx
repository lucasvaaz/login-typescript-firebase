import { useContext } from "react";
import { ChooseThemeContext } from "../../../context/chooseTheme";

import { 
    DarkIcon, 
    HeaderLogo, 
    IconLogo, 
    LightIcon, 
    LoginContainer
    } from "./styled";

export function Header() {
    const { isDarkTheme, setIsDarkTheme } = useContext(ChooseThemeContext);

    return (
        <>
         <LoginContainer>

<HeaderLogo>
  <div>
  <IconLogo /> 
  <h3>MOUNTAIN ADVENTURE</h3>
  </div>
  <span onClick={() => setIsDarkTheme(!isDarkTheme)}>
  {isDarkTheme ? <LightIcon /> : <DarkIcon />}
  </span>
</HeaderLogo>

</LoginContainer>
        </>
    )
}