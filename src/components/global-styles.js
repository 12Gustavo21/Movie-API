import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        scroll-behavior: smooth;
        cursor: url(https://www.cursor.cc/cursor/106/176/cursor.png), auto !important;
        ::selection {
            background: #d8ae5e;
            color: #131313;
        }
    }

    ::-webkit-scrollbar {
        background: #131313;
    }

    ::-webkit-scrollbar-thumb {
        background: none;
        border: 1px solid #d8ae5e;
        border-radius: 20px;
    }
`;

export default GlobalStyle;