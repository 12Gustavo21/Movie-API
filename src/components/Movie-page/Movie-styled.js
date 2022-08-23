import styled from "styled-components";

export const BoxTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    text-align: center;
`;

export const Box1 = styled.section`
    display: flex;
    flex-direction: column;
    padding: 10px;

    h1{
        padding: 10px;
    }

    img{
        border-radius: 20px;
    }
`;

export const Box2 = styled.section`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 65%;
`;

export const Rate = styled.div`
    height: 20vh;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
`;