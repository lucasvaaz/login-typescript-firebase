import styled from "styled-components";
import { GiMountains } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primaryText};
`;
export const ImgContainer = styled.div`
  width: 50%;
  height: 100vh;
`;

export const LoginContainer = styled.main`
  padding: 5rem;
  width: 50%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div { 
    display: flex;
    align-items: center;
    

    h2 { 
        color: ${(props) => props.theme.primaryText};
        margin-left: 0.5rem;
    }
  }

  span { 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    box-shadow: 1px 1px ;
    background-color: ${(props) => props.theme.secundaryLight};
  }
`;



////////////////////////////ICONS//////////////////////////////

export const IconLogo = styled(GiMountains)`
  font-size: 3rem;
  color: ${(props) => props.theme.primaryText};
`;
export const DarkIcon = styled(MdDarkMode)`
  font-size: 2rem;
  color: ${(props) => props.theme.primaryText};
  cursor: pointer;
  padding: 0.3rem;
  transition: 300ms;

  &:hover {
    color: ${(props) => props.theme.secundaryDark};
  }
`;

export const LightIcon = styled(MdLightMode)`
  font-size: 2rem;
  color: ${(props) => props.theme.primaryText};
  cursor: pointer;
  padding: 0.3rem;
  transition: 300ms;

  &:hover {
    color: ${(props) => props.theme.secundaryDark};
  }
`;

////////////////////////////ICONS//////////////////////////////
