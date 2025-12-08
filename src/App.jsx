import Counter from "./components/Counter";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { genres, movies, sorting } from "./const/movies";
import { useState } from "react";
import './App.css'
import Body from "./components/Body";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState(genres[0])
  const [sortSelection, setSortSelection] = useState(sorting[0])

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre)
    console.log("Genre:", genre);
  };

  const handleSearch = (query) => {
    console.log("Search:", query);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie)
  }

  const handleSorting = (sortSelection) => {
    setSortSelection(sortSelection)
  }

  const sortedMovies = [...movies].sort((a, b) => {
    switch (sortSelection.toLowerCase()) {
      case "title":
        return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
      case "release date":
        return Number(b.releaseYear) - Number(a.releaseYear);
      default:
        return 0;
    }
  });

  return (
    <>
      {selectedMovie ? <MovieDetails movie={selectedMovie} /> : <Header onSearch={handleSearch} />}
      <Navbar
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreSelect={handleGenreSelect}
        sortingOptions={sorting}
        onSortChange={handleSorting}
        currentSelection={sortSelection}
      />
      <Body handleMovieClick={handleMovieClick} movies={sortedMovies} />
      <Counter initialValue={0} />
    </>
  )
}

export default App
