import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-color: #22254b;
        color: #fff;
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
    }
`;
