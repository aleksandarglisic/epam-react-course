export default function MovieDetails({ movie }) {
    return (
        <div className="movie-info-detail">
            <img src={movie.imageUrl} alt={movie.title} className="movie-poster-detail" />
            <div>
                <h2>{movie.title}</h2>
                <p>{movie.duration}</p>
                <p>{movie.rating}</p>
                <p>{movie.genres.join(', ')}</p>
                <p>{movie.description}</p>
                <p>Release Date: {movie.releaseYear}</p>
            </div>
        </div>
    );
};