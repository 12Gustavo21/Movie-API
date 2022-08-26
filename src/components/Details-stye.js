import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #000;
    color: #d8ae5e;

    @media(max-width: 425px){
        flex-direction: column;
        width: 100%;
        height: 130vh;
    }
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

    @media(max-width: 425px){
        h1 {
            margin-top: 70px;
        }
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
        background: none;
        color: #d8ae5e;
    }

    button:hover{
        cursor: pointer;
        background-color: #d8ae5e;
        color: #fff;
    }

    @media(max-width: 425px){
        margin: 50px 10px 150px 10px;

        button {
            margin: 10px 0;
        }
    }
`;