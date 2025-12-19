import { getMovieImgPlaceholder, getYear, minutesToHours } from "../utils"

export default function MovieDetails({ movie }) {
    const getVote = (vote) => {
        if (vote > 0) {
            return (<div className="movie-rating">{vote}</div>)
        }
        return (<p>Not Yet Rated</p>)
    }

    const getRuntime = (runtime) => {
        if (runtime) {
            return minutesToHours(runtime)
        }
        return (`Unknown Runtime`)
    }

    return (
        <div className="movie-details-page">
            <div className="movie-info-detail">
                <img
                    src={movie.poster_path}
                    alt={movie.title}
                    className="movie-poster-detail"
                    onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = getMovieImgPlaceholder(movie.title)
                    }}
                />

                <div className="movie-text-detail">
                    <div className="title-row">
                        <h2 className="movie-title">{movie.title}</h2>
                        {getVote(movie.vote_average)}
                    </div>

                    <p className="movie-genres">
                        {movie.genres.join(', ')}
                    </p>

                    <p className="movie-meta">
                        {getYear(movie.release_date)} - {getRuntime(movie.runtime)}
                    </p>

                    <p className="movie-overview">
                        {movie.overview}
                    </p>
                </div>
            </div>
        </div>
    )
}
