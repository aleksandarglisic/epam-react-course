import { useState } from 'react';

export default function MovieTile({
    movieInfo,
    onMovieClick,
    onEditMovie,
    onDeleteMovie
}) {
    const [open, setOpen] = useState(false);

    const handleMovieClick = () => {
        onMovieClick(movieInfo);
    };

    const toggleMenu = (e) => {
        e.stopPropagation();
        setOpen((prev) => !prev);
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        setOpen(false);
        onEditMovie(movieInfo);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        setOpen(false);
        onDeleteMovie(movieInfo);
    };

    return (
        <div data-testid="movie-tile" className="movie-tile">
            <div className="poster-wrapper">
                <img
                    src={movieInfo.imageUrl}
                    alt={movieInfo.title}
                    className="movie-poster"
                    onClick={handleMovieClick}
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
                    <div>Year: {movieInfo.releaseYear}</div>
                </div>
            </div>
        </div>
    );
}
