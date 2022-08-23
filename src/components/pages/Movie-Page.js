import React, { Component } from 'react';
import * as S from "./Page-style"
import axios from "axios";
import { BsStarFill } from "react-icons/bs";

const MyMovie_API = axios.create({
    baseURL:
        "https://api.themoviedb.org/3/movie/popular?api_key=c6b4b6bad364be3d0debd4a472f74bc4"
});

export default class MoviePage extends Component {
    state = {
        movies: []
    };

    getMovies = async () => {
        const response = await MyMovie_API.get();

        const InfosFilmes = response.data.results.map((item) => {
            return {
                movieName: item.title,
                sinopse: item.overview,
                poster: `https://image.tmdb.org/t/p/w200/${item.poster_path}`,
                data: item.release_date,
                vote: item.vote_average
            };
        });

        this.setState({ movies: InfosFilmes });

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
                <S.List>
                    {this.state.movies.map((item) => (
                        <S.Container>
                            <S.Box1>
                                <h1>{item.movieName}</h1>
                                <img src={item.poster} alt={`Movie Poster: ${item.movieName}`} />
                                <p>Release data: {item.data}</p>
                                <p> Assessments: <BsStarFill /> {item.vote}</p>
                                <S.Button>Details</S.Button> 
                            </S.Box1>
                        </S.Container>
                    ))}
                </S.List>
            </>
        );
    }
}
