import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as S from '../Details-stye';
import { BsStarFill } from "react-icons/bs";

export default function DetailsMovie() {

    const { id } = useParams()

    const [movie, setMovie] = useState({})
    const image_path = `https://image.tmdb.org/t/p/w200`

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c6b4b6bad364be3d0debd4a472f74bc4`)
            .then(Response => Response.json())
            .then(data => {
                const movie = {
                    id,
                    title: data.title,
                    sinopse: data.overview,
                    image: `${image_path}${data.poster_path}`,
                    releaseDate: data.release_date,
                    assessments: data.vote_average
                }
                setMovie(movie)
            })
    }, [id])

    return (
        <S.Container>
            <S.Box1>
                <h1>{movie.title}</h1>
                <Link to='/Movies'> <img src={movie.image} /> </Link>
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
