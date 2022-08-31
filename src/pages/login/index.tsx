import { useContext } from "react";
import { ChooseThemeContext } from "../../context/chooseTheme";

import { ImgContainer, Wrapper } from "./styled";

import imgDark from "../../assets/imgDark.jpg";
import imgLight from "../../assets/imgLight.jpg";
import { Header } from "./components/header";





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
      >

      </ImgContainer>

     <Header />

      
    </Wrapper>
  );
}
