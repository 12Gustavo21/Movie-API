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
        movies: [],
        filteredMovies: []
    };

    getMovies = async () => {
        const response = await MyMovie_API.get();

        const InfosFilmes = response.data.results.map((item) => {
            return {
                ...item
            };
        });

        this.setState({ movies: InfosFilmes });
        this.setState({filteredMovies: InfosFilmes});
    };

    handleChange = (e) => {
        const FilteredList = this.state.movies.filter(item => {
            if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
                return true;
            } else {
                return ""
            }
        })
        this.setState({
            filteredMovies: FilteredList
        })
    }

    componentDidMount(){
        this.getMovies();
    }

    render() {
        return (
            <>
                <S.BoxTitle>
                   <h1>Movies</h1> 
                </S.BoxTitle>
                <S.Box>
                    <S.Input placeholder="Search a movie here" onChange={this.handleChange}/>
                </S.Box>
                <S.List>
                    {this.state.filteredMovies.map((item) => (
                        <S.Container>
                            <S.Box1>
                                <h1>{item.title}</h1>
                                <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={`Movie Poster: ${item.movieName}`} />
                                <p>Release data: {item.release_date}</p>
                                <p> Assessments: <BsStarFill /> {item.vote_average}</p>
                                <S.Button>Details</S.Button> 
                            </S.Box1>
                        </S.Container>
                    ))}
                </S.List>
            </>
        );
    }
}
