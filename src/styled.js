import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #000;
    color: #d8ae5e;

    h1{
        transition: 1s all;
        color: #d8ae5e;
        padding: 20px;
    }

    h1:hover{
        text-decoration: underline wavy;
        cursor: url(https://www.cursor.cc/cursor/107/176/cursor.png), auto!important;
    }

    img {
        width: 30%;
    }

    img:hover {
        cursor: url(https://www.cursor.cc/cursor/107/176/cursor.png), auto!important;
    }

    div {
        display: flex;
    }

    @media(max-width: 650px){
        flex-direction: column;
        div {
            display: flex;
            padding-bottom: 10px;
        }

        h1 {
            padding: 7px;
        }

        img {
            margin-left: 35%;
        }
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 20vh;
    background-color: #d8ae5e;
    color: #000;
    text-align: center;
`;

export const Box1 = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1em;

    @media(max-width: 750px){
        font-size: .8em;
    }
`;

export const Box2 = styled.div`
    display: flex;
    align-items: center;
    
    a {
        color: #000;
    }

    a:hover {
        transform: scale(1.1);
        cursor: url(https://www.cursor.cc/cursor/107/176/cursor.png), auto!important;
    }
`;