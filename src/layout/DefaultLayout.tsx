import { useContext } from "react";
import { ChooseThemeContext } from "../context/chooseTheme";


import {
  ImgContainer,
  LoginContent,
  Wrapper,
} from "./styled";

import imgDark from "../assets/imgDark.jpg";
import imgLight from "../assets/imgLight.jpg";
import { Header } from "../components/Header/header";
import { Outlet } from "react-router-dom";


export function DefaultLayout() {

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

         <Outlet />
        </LoginContent>
      </div>
    </Wrapper>
  );
}