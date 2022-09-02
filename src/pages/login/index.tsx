import { useContext } from "react";
import { ChooseThemeContext } from "../../context/chooseTheme";

import { FormLogin, ImgContainer, LoginContent, Wrapper } from "./styled";

import imgDark from "../../assets/imgDark.jpg";
import imgLight from "../../assets/imgLight.jpg";
import { Header } from "../../components/Header/header";

export function Login() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ChooseThemeContext);
  return (
    <Wrapper>
      <div>
        <ImgContainer
          style={{
            backgroundImage: `url(${isDarkTheme ? imgDark : imgLight})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></ImgContainer>

        <LoginContent>
          <Header />

          <div>
            <h1>login</h1>
          </div>

          <FormLogin>
            
              <label htmlFor="email">email</label>
              <input id="email" type="text" />
           

            
              <label htmlFor="password">senha</label>
              <input id="password" type="password" />
              <a href="#">Esqueci minha senha</a>
            
            <div>
              <button type="submit" > ENTRAR </button>
            </div>
          </FormLogin>
        </LoginContent>
      </div>
    </Wrapper>
  );
}
