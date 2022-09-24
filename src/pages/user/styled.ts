import styled from "styled-components";

export const UserContainer = styled.main` 
    margin-top: 3rem;   
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

`

export const ImageProfile = styled.span`

width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 4rem;

    div {
        width: 15rem;
        height: 15rem;
        background-color: gray;
        border-radius: 999px;
        justify-content: center;
        align-items: center;
        border: 3px solid ${(props) => props.theme.secundaryLight};

        img {
            width: 100%;
            height: 100%;
            border-radius: 999px;
        }
    }

    
`