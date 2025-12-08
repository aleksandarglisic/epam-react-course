export default function MovieTile({ movieInfo, onMovieClick }) {
    const handleMovieClick = (movieInfo) => {
        onMovieClick(movieInfo)
    }

    return (
        <div data-testid="movie-tile">
            <img src={movieInfo.imageUrl} alt={movieInfo.title} className="movie-poster" onClick={() => handleMovieClick(movieInfo)} />
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
};
