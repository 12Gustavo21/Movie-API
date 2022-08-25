import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as S from '../Details-stye';
import { BsStarFill } from "react-icons/bs";

export default function DetailsMovie() {

    const { id } = useParams()

    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c6b4b6bad364be3d0debd4a472f74bc4`)
            .then(Response => Response.json())
            .then(item => {
                const movie = {
                    id,
                    title: item.title,
                    sinopse: item.overview,
                    image: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                    releaseDate: item.release_date,
                    assessments: item.vote_average
                }
                setMovie(movie)
            })
    }, [id])

    return (
        <S.Container>
            <S.Box1>
                <h1>{movie.title}</h1>
                <Link to='/Movies'> <img src={movie.image} alt="" /> </Link>
                <p>Release data: {movie.releaseDate}</p>
                <p>Assessments: <BsStarFill /> {movie.assessments}</p>
            </S.Box1>
            <S.Box2>
                <p>{movie.sinopse}</p>
                <Link to='/Movies'> <button>Go Back</button> </Link>
            </S.Box2>
        </S.Container>
    )

}
