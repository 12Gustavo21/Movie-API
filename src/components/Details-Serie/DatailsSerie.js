import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as S from "../Details-stye";
import { BsStarFill } from "react-icons/bs";

export default function DetailsSerie() {

    const { id } = useParams()

    const [serie, setSerie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/top_rated/${id}?api_key=c6b4b6bad364be3d0debd4a472f74bc4`)
            .then(Response => Response.json())
            .then(item => {
                const serie = {
                    id,
                    name: item.name,
                    sinopse: item.overview,
                    image: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                    releaseDate: item.release_date,
                    assessments: item.vote_average
                }
                setSerie(serie)
            })
    }, [id])

    return (
        <S.Container>
            <S.Box1>
                <h1>{serie.name}</h1>
                <Link to='/Shows'> <img src={serie.image} alt="" /> </Link>
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
