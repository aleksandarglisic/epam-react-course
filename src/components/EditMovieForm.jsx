import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Dialog from "./Dialog"
import MovieForm from "./MovieForm"
import MovieService from "../services/MovieService"

export default function EditMovieForm() {
    const { movieId } = useParams()
    const navigate = useNavigate()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        MovieService.getMovie(movieId).then(res => {
            setMovie(res.data)
        })
    }, [movieId])

    async function handleSubmit(data) {
        try {
            await MovieService.editMovie({ ...data, id: movie.id })
            navigate("/")
        } catch (err) {
            console.error("EDIT MOVIE ERROR:", err.response?.data)
        }
    }


    if (!movie) return null

    return (
        <Dialog title="EDIT MOVIE" onClose={() => navigate("/")}>
            <MovieForm initialMovie={movie} onSubmit={handleSubmit} />
        </Dialog>
    )
}
