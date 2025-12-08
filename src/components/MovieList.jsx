import MovieTile from "./MovieTile";

export default function MovieList({ movies, onMovieClick }) {
    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <div className="movie-tile-container" key={index}>
                    <MovieTile movieInfo={movie} onMovieClick={onMovieClick} />
                </div>
            ))}
        </div>
    );
};
