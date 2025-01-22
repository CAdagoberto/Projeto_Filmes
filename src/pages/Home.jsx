import { useState, useEffect } from "react"
import MovieCards from "../components/MovieCards";
import './MovieGrid.css'

const movieURL = import.meta.env.VITE_API;
const movieKEY = import.meta.env.VITE_API_KEY;

export default function Home() {
    const [topMovies, setTopMovies] = useState([])

    const getTopM = async (URL) => {
        const res = await fetch(URL)
        const data = await res.json()

        setTopMovies(data.results)
        console.log(data.results)
        
    };  

    useEffect(() => {
        const topURL = `${movieURL}top_rated?${movieKEY}`

        getTopM(topURL)
    }, [])

    return (
        <>
        <div className="container">
            
          <h2 className="title">Melhores Filmes:</h2>

            <div className="movies-container">
                
                {topMovies.length > 0 && (
                    topMovies.map((movie) => (
                        <MovieCards key={movie.id} movie={movie}/>
                    ))
                )}
            </div>
        </div>
        </>
    )
}