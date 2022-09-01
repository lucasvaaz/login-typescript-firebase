import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: 200ms;
        -webkit-font-smoothing: antialiased;
    }

    body { 
        font-family: 'Nunito', sans-serif;
    }
`