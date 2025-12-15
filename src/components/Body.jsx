import MovieList from "./MovieList";

const Body = ({ handleMovieClick, movies, onEditMovie, onDeleteMovie }) => {
    return (
        <div>
            <MovieList movies={movies} onMovieClick={handleMovieClick} onEditMovie={onEditMovie} onDeleteMovie={onDeleteMovie} />
        </div>
    );
};

export default Body;
