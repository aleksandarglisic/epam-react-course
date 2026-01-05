import { useParams } from "react-router-dom"
import MovieDetails from "./MovieDetails"
import MovieService from "../services/MovieService"
import { useEffect, useState } from "react"

export default function MovieDetailsWrapper() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        MovieService.getMovie(movieId).then(res => setMovie(res.data))
    }, [movieId])

    if (!movie) return <p>Loading...</p>
    return <MovieDetails movie={movie} />
}
