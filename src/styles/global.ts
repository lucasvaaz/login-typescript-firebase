import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    body { 
        font-family: 'Nunito', sans-serif;
    }

    button {
        cursor: pointer;
        color: ${(props) => props.theme.secundaryText};

    }
`