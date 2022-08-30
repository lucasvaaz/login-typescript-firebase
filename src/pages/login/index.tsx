import { useContext } from "react";
import { ChooseThemeContext } from "../../context/chooseTheme";

import { DarkIcon, Header, IconLogo, ImgContainer, LightIcon, LoginContainer, Wrapper } from "./styled";

import imgDark from "../../assets/imgDark.jpg";
import imgLight from "../../assets/imgLight.jpg";





export function Login() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ChooseThemeContext);
  return (
    <Wrapper>
      <ImgContainer
        style={{
          backgroundImage: `url(${isDarkTheme ? imgDark : imgLight})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></ImgContainer>

      <LoginContainer>

          <Header>
            <div>
            <IconLogo /> 
            <h2>MOUNTAIN ADVENTURE</h2>
            </div>
            <span onClick={() => setIsDarkTheme(!isDarkTheme)}>
            {isDarkTheme ? <LightIcon /> : <DarkIcon />}
            </span>
          </Header>
        
      </LoginContainer>

      
    </Wrapper>
  );
}
