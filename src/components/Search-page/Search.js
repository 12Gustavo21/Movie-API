import React, { Component } from "react";
import * as S from "./Search-style";
export default class Search extends Component {
    render() {
        return (
            <>
                <S.Container>
                    <S.Input placeholder="Search a movie or serie here" />
                </S.Container>
            </>
        )
    }
}