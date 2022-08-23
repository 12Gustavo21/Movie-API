import React, { Component } from 'react';
import * as S from "./Home-styled"
import logo from "./img/Logo-Secundaria.png"

export default class Home extends Component {
    render() {
        return (
            <div>
                <S.Container>
                    <S.Title>Welcome to EagleFlix</S.Title>
                    <img src={logo} alt="" />
                </S.Container>
            </div>
        )
    }
}