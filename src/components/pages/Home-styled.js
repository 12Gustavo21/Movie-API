import styled from "styled-components";

export const Container = styled.main`
    min-width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #000;
    color: #d8ae5e;
    text-align: center;

    @media(max-width: 950px){
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    font-size: 3em;
`;