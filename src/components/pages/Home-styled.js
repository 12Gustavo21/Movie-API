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

    @media(max-width: 425px){
        img {
            width: 100%;
            height: 60vh;
        }
    }
`;

export const Title = styled.h1`
    font-size: 3em;
`;