import { useState } from 'react'
import { getMovieImgPlaceholder } from "../utils"

export default function MovieTile({
    movieInfo,
    onMovieClick,
    onEditMovie,
    onDeleteMovie
}) {
    const [open, setOpen] = useState(false)

    const handleMovieClick = () => {
        onMovieClick(movieInfo)
    }

    const toggleMenu = (e) => {
        e.stopPropagation()
        setOpen((prev) => !prev)
    }

    const handleEdit = (e) => {
        e.stopPropagation()
        setOpen(false)
        onEditMovie(movieInfo)
    }

    const handleDelete = (e) => {
        e.stopPropagation()
        setOpen(false)
        onDeleteMovie(movieInfo)
    }

    return (
        <div data-testid="movie-tile" className="movie-tile">
            <div className="poster-wrapper">
                <img
                    src={movieInfo.poster_path}
                    alt={movieInfo.title}
                    className="movie-poster"
                    onClick={handleMovieClick}
                    onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = getMovieImgPlaceholder(movieInfo.title)
                    }}
                />

                <button
                    className="movie-menu-button"
                    onClick={toggleMenu}
                    aria-label="Movie actions"
                >
                    ⋮
                </button>

                {open && (
                    <div className="movie-menu">
                        <button onClick={handleEdit}>Edit movie</button>
                        <button onClick={handleDelete}>Delete movie</button>
                    </div>
                )}
            </div>

            <div className="movie-info">
                <div>
                    <div>{movieInfo.title}</div>
                    <div>{movieInfo.genres.join(', ')}</div>
                </div>
                <div>
                    <div>Year: {movieInfo.release_date}</div>
                </div>
            </div>
        </div>
    )
}
