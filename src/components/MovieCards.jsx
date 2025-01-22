
import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG;

export default function MovieCards({movie, showLink = true}) {

    function formatToTwoDecimals(value) {
        if (isNaN(value)) {
            throw new Error("O valor fornecido não é um número.");
        }
        return Math.round(value * 100) / 100;
    }

    return (
        <>
            <div className='movie-card'>
                <img src={imageUrl + movie.poster_path} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>
                    <FaStar /> {formatToTwoDecimals(movie.vote_average)}
                </p>
                {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
            </div>
        </>
    )
}