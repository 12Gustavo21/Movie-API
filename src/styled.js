import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    h1{
        transition: 1s all;
    }

    h1:hover{
        text-decoration: underline wavy;
    }

    img{
        width: 100%;
        height: 20vh;
    }
`;