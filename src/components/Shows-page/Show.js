import React, { Component } from 'react';
import * as S from "./Shows-styled";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";

const MySeries_API = axios.create({
    baseURL:
        "https://api.themoviedb.org/3/tv/popular?api_key=c6b4b6bad364be3d0debd4a472f74bc4"
});

export default class Show extends Component {
    state = {
        series: []
    };

    getMovies = async () => {
        const response = await MySeries_API.get();

        const InfoSeries = response.data.results.map((item) => {
            return {
                serieName: item.name,
                sinopse: item.overview,
                imagem: `https://image.tmdb.org/t/p/w200/${item.poster_path}`,
                data: item.first_air_date,
                vote: item.vote_average
            };
        });

        this.setState({ series: InfoSeries });

    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        return (
            <>
                <S.BoxTitle>
                    <h1>Movies</h1>
                </S.BoxTitle>
                <ul>
                    {this.state.series.map((item) => (
                        <S.Container>
                            <S.Box1>
                                <h1>{item.serieName}</h1>
                                <img src={item.imagem} alt="Image from movie" />
                            </S.Box1>
                            <S.Box2>
                                <p>{item.sinopse}</p>
                                <S.Rate>
                                    <p>Release data: {item.data}</p>
                                    <p> Assessments: <BsStarFill /> {item.vote}</p>
                                </S.Rate>
                            </S.Box2>
                        </S.Container>
                    ))}
                </ul>
            </>
        );
    }
}