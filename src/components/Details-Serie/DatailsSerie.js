import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as S from "../Details-stye";
import { BsStarFill } from "react-icons/bs";

export default function DetailsSerie() {

    const { id } = useParams()

    const [serie, setSerie] = useState({})
    const image_path = `https://image.tmdb.org/t/p/w200`

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c6b4b6bad364be3d0debd4a472f74bc4`)
            .then(Response => Response.json())
            .then(data => {
                const serie = {
                    id,
                    name: data.name,
                    sinopse: data.overview,
                    image: `${image_path}${data.poster_path}`,
                    releaseDate: data.release_date,
                    assessments: data.vote_average
                }
                setSerie(serie)
            })
    }, [id])

    return (
        <S.Container>
            <S.Box1>
                <h1>{serie.name}</h1>
                <Link to='/Shows'> <img src={serie.image} /> </Link>
                <p>Release data: {serie.releaseDate}</p>
                <p>Assessments: <BsStarFill /> {serie.assessments}</p>
            </S.Box1>
            <S.Box2>
                <p>{serie.sinopse}</p>
                <Link to='/Shows'> <button>Go Back</button> </Link>
            </S.Box2>
        </S.Container>
    )

}
