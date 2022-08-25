import React, { Component } from 'react';
import * as S from "./Page-style";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const MySeries_API = axios.create({
    baseURL:
        "https://api.themoviedb.org/3/tv/popular?api_key=c6b4b6bad364be3d0debd4a472f74bc4"
});

export default class Show extends Component {
    state = {
        series: [],
        filteredSeries: []
    };

    getSeries = async () => {
        const response = await MySeries_API.get();

        const InfoSeries = response.data.results.map((item) => {
            return {
                ...item
            };
        });

        this.setState({ series: InfoSeries });
        this.setState({ filteredSeries: InfoSeries });

    };

    handleChange = (e) => {
        const FilteredList = this.state.series.filter(item => {
            if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                return true;
            } else {
                return ""
            }
        })
        this.setState({
            filteredSeries: FilteredList
        })
    }

    componentDidMount() {
        this.getSeries();
    }

    render() {
        return (
            <>
                <S.BoxTitle>
                    <h1>Series</h1>
                </S.BoxTitle>
                <S.Box>
                    <S.Input placeholder="Search a serie here" onChange={this.handleChange} />
                </S.Box>
                <S.List>
                    {this.state.filteredSeries.map((item) => (
                        <S.Container>
                            <S.Box1>
                                <h1>{item.name}</h1>
                                <Link to={`/Details/${item.id}`}> <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={`Serie Poster: ${item.serieName}`} /> </Link>
                                <p>Release data: {item.first_air_date}</p>
                                <p> Assessments: <BsStarFill /> {item.vote_average}</p>
                                <Link to={`/Details-Serie/${item.id}`}> <S.Button>Details</S.Button>  </Link>
                            </S.Box1>
                        </S.Container>
                    ))}
                </S.List>
            </>
        );
    }
}