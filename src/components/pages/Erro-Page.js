import React, { Component } from 'react';
import * as S from "./Erro-style";

export default class Erropage extends Component {
    render() {
        return (
            <S.Container>
                <h1>ERRO</h1>
                <h1>PAGE NOT FOUND</h1>
                <h1>Please, go to a valid page</h1>
            </S.Container>
        )
    }
}