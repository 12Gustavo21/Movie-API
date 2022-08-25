import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    img{
        max-height: 80vh;
        border-radius: 20px;
        padding: 10px;
        transition: 1s all;
    }

    img:hover{
        transform: scale(.9);
    }

    p {
        padding: 3px;
    }
`;

export const Box2 = styled.div`
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    button{
        width: 100%;
        border-radius: 10px;
        border: 1px solid #d8ae5e;
        padding: 10px;
        margin: 5px;
        font-weight: bold;
        transition: 1s all;
    }

    button:hover{
        cursor: pointer;
        background-color: #d8ae5e;
        color: #fff;
    }
`;