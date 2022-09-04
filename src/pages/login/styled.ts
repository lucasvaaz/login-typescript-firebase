import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primaryText};

  div {
    display: flex;
  }
`;
export const ImgContainer = styled.div`
  flex: 1;
  height: 100vh;
`;

export const LoginContent = styled.main`
  width: 40%;
  padding: 5rem;

  div {
    &:nth-child(2) {
      border-bottom: 1px solid ${(props) => props.theme.divider};
    }

    h1 {
      margin-top: 3rem;
      font-weight: 500;
    }
  }
`;

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

export const LoginSocial = styled.div`
  
`
