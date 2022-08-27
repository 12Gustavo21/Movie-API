import styled from "styled-components";

export const Main = styled.main`
    background: #000;
    color: #d8ae5e;
`;

export const BoxTitle = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 2em;
    }
`;

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
`;

export const Box1 = styled.section`
    padding: 10px;
    display: flex;
    flex-direction: column;

    h1 {
        padding: 10px;
    }

    img {
        border-radius: 20px;
        max-width: 100%;
        max-height: 45vh;
        transition: 1s all;
    }

    img:hover{
        transform: scale(.9);
    }

    p {
        padding: 3px;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Button = styled.button`
    width: 100%;
    border-radius: 10px;
    border: 1px solid #d8ae5e;
    padding: 10px;
    margin: 5px;
    background: none;
    font-weight: bold;
    transition: 1s all;
    color: #d8ae5e;
    &:hover{
        cursor: pointer;
        background-color: #d8ae5e;
        color: #fff;
    }
`;

export const Input = styled.input`
    width: 70%;
    height: 10vh;
    border-radius: 20px;
    border: 1px solid #d8ae5e;
    outline: none;
    padding: 20px;
    background: none;
    color: #d8ae5e;
`;

export const Box = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;