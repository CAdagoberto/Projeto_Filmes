import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs"

import './Movie.css'
import MovieCards from "../components/MovieCards"

const movieURL = import.meta.env.VITE_API;
const movieKEY = import.meta.env.VITE_API_KEY;

export default function Movie() {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(URL) => {
        const res = await fetch(URL)
        const data = await res.json()

        setMovie(data)
    }

    useEffect(() => {
        const linkFilme = `${movieURL}${id}?${movieKEY}`
        
        getMovie(linkFilme)
    }, [id])

    function formatCurrency(number) {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }


    return (
      
            <div className="movie-page">
                {movie && (
                    <>
                        <MovieCards movie={movie} showLink={false}/>
                        <p className="tagline">{movie.tagline}</p>
                        <div className="info">
                            <h3>
                                <BsWallet2 /> Orçamento:
                            </h3>
                            <p>{formatCurrency(movie.budget)}</p>
                        </div>
                        <div className="info">
                            <h3>
                                <BsGraphUp /> Receita:
                            </h3>
                            <p>{formatCurrency(movie.revenue)}</p>
                        </div>
                        <div className="info">
                            <h3>
                                <BsHourglassSplit /> Minutos:
                            </h3>
                            <p>{movie.runtime}</p>
                        </div>
                        <div className="info description">
                            <h3>
                                <BsFillFileEarmarkTextFill /> Descrição:
                            </h3>
                            <p>{movie.overview}</p>
                        </div>
                    </>
                )}
            </div>
     
    )
}