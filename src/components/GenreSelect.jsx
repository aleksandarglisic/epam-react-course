export default function GenreSelect({ genres, selectedGenre, onSelect }) {
    const handleGenreSelect = (genre) => {
        onSelect(genre)
    }

    return (genres.map((genre) => (
        <button
            key={genre}
            onClick={() => handleGenreSelect(genre)}
            className={`mr-4 genre-button ${selectedGenre === genre ? "selected" : ""}`}>
            {genre}
        </button>
    )))
}