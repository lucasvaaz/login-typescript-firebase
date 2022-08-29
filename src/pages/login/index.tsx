import { useContext } from "react";
import { ChooseThemeContext } from "../../context/chooseTheme";

import { ImgContainer, Wrapper } from "./styled";

import imgDark from '../../assets/imgDark.jpg'
import imgLight from '../../assets/imgLight.jpg'

export function Login() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ChooseThemeContext);
  return (
    <Wrapper>
      <ImgContainer style={{ backgroundImage: `url(${isDarkTheme ? imgDark : imgLight})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        
      </ImgContainer>

      <button onClick={() => {
        setIsDarkTheme(!isDarkTheme)
      }}> tema </button>
    </Wrapper>
  );
}
