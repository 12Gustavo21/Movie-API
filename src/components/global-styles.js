import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        cursor: url("https://media.discordapp.net/attachments/1000858323026989078/1012548236197777488/Eagleflix.png?width=416&height=416");
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