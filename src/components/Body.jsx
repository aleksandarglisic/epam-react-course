import MovieList from "./MovieList";

const Body = ({ handleMovieClick, movies }) => {
    return (
        <body>
            <MovieList movies={movies} onMovieClick={handleMovieClick} />
        </body>
    );
};

export default Body;
