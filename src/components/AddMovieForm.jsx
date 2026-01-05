import { useNavigate } from "react-router-dom"
import Dialog from "./Dialog"
import MovieForm from "./MovieForm"
import MovieService from "../services/MovieService"

export default function AddMovieForm() {
    const navigate = useNavigate()

    async function handleSubmit(data) {
        try {
            const res = await MovieService.addMovie(data)
            navigate(`/${res.data.id}`)
        } catch (err) {
            console.error("ADD MOVIE ERROR:", err.response?.data)
        }
    }

    return (
        <Dialog title="ADD MOVIE" onClose={() => navigate("/")}>
            <MovieForm onSubmit={handleSubmit} />
        </Dialog>
    )
}
