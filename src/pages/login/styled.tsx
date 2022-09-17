import styled from "styled-components";

import { BsGoogle, BsFacebook } from "react-icons/bs";

export const FormLogin = styled.form`
  input {
    width: 100%;
    height: 2.5rem;
    font-size: 1rem;
    font-weight: 200;
    color: ${(props) => props.theme.inputText};
    outline: none;
    border: none;
    border-radius: 0.4rem;
    padding: 0.7rem;
    border: 2px solid ${(props) => props.theme.secundaryText};

    &:focus {
      outline: 2px solid ${(props) => props.theme.secundaryLight};
      border: none;
    }
  }

  button {
    width: 100%;
    height: 3rem;
    font-size: 1.3rem;
    font-weight: 800;
    font-family: "Nunito";
    color: ${(props) => props.theme.secundaryText};
    margin-top: 1.5rem;
    background-color: ${(props) => props.theme.secundaryLight};
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: 500ms;

    &:disabled {
      cursor: not-allowed;
      background-color: ${(props) => props.theme.secundaryDark};
      color: ${(props) => props.theme.buttonText};
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.secundaryDark};
    }
  }

  label {
    display: block;
    font-weight: 300;
    padding: 2rem 0 0 0;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: ${(props) => props.theme.secundaryLight};

    &:hover {
      color: ${(props) => props.theme.secundaryDark};
    }
  }
`;

export const Register = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;

  a {
    text-decoration: none;
    font-weight: 500;
    color: ${(props) => props.theme.secundaryLight};

    &:hover {
      color: ${(props) => props.theme.secundaryDark};
    }
  }
`;

export const LoginSocial = styled.span`
  width: 100%;
  justify-content: space-evenly;
  margin-top: 20px;
  display: flex;

  div {
    display: flex;
    width: 45%;
    justify-content: center;
    align-items: center;
    padding: 0.6rem;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: ${(props) => props.theme.google};
    
    &:hover {
      filter: brightness(1.1)
    }

    &:active{
      filter: brightness(1.2)
    }

    &:first-child {
      background-color: ${(props) => props.theme.facebook};
    }

    h3 {
      color: ${(props) => props.theme.buttonText}
    }
  }
`;

export const GoogleIcon = styled(BsGoogle)`
  width: 3rem;
  font-size: 1.4rem;
  color: ${(props) => props.theme.buttonText};
  

`;

export const FacebookIcon = styled(BsFacebook)`
  width: 3rem;
  font-size: 1.4rem;
  color: ${(props) => props.theme.buttonText};
`;


export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 1rem;

  &::before, ::after {
    content: '';
  flex: 1;
  border-bottom: 1px solid ${(props) => props.theme.divider};
  }

  &::before {
    margin-right: 0.5rem;
  }

  &::after {
    margin-left: 0.5rem;
  }

`

export const WarningLogin = styled.h5`
  color: ${(props) => props.theme.warning};
  font-weight: 500;
`