import styled from "styled-components";

export const BoxTitle = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
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
    border-radius: 10px;
    border: 1px solid #d8ae5e;
    padding: 5px;
    margin: 5px;
    font-weight: bold;
    transition: 1s all;
    &:hover{
        cursor: pointer;
        background-color: #d8ae5e;
        color: #fff;
    }
`;