import Counter from "./components/Counter";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { navbar_genres, movies, sorting } from "./const/movies";
import { useState } from "react";
import './App.css'
import Body from "./components/Body";
import MovieDetails from "./components/MovieDetails";
import Dialog from "./components/Dialog";
import MovieForm from "./components/MovieForm";
import SortControl from "./components/SortControl";
import GenreSelect from "./components/GenreSelect";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState(navbar_genres[0])
  const [sortSelection, setSortSelection] = useState(sorting[0])
  const [modal, setModal] = useState({ type: null, movie: null, });

  const handleOpenAddModal = () => setModal({ type: 'add', movie: null });
  const handleOpenEditModal = (movie) => setModal({ type: 'edit', movie });
  const handleOpenDeleteModal = (movie) => setModal({ type: 'delete', movie });
  const handleCloseModal = () => setModal({ type: null, movie: null });

  const handleAddMovie = (movie) => console.log('Adding a movie', movie)
  const handleEditMovie = (movie) => console.log('Editing a movie', movie)
  const handleDeleteMovie = (movie) => console.log('Deleting a movie', movie)

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
      {selectedMovie ? <MovieDetails movie={selectedMovie} /> : <Header onSearch={handleSearch} onAddMovieClick={handleOpenAddModal} />}
      <Navbar
        renderLeft={<GenreSelect genres={navbar_genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />}
        renderRight={<SortControl onSortChange={handleSorting} currentSelection={sortSelection} sortingOptions={sorting} />}
      />

      {modal.type === 'edit' && (
        <Dialog title="EDIT MOVIE" onClose={handleCloseModal}>
          <MovieForm
            initialMovie={modal.movie}
            onSubmit={handleEditMovie}
          />
        </Dialog>
      )}

      {modal.type === 'delete' && (
        <Dialog title="DELETE MOVIE" onClose={handleCloseModal}>
          <div>
            <p>Are you sure you want to delete this movie?</p>
            <strong>{modal.movie.title}</strong>
            <div>
              <button className="submit-btn" onClick={() => handleDeleteMovie(modal.movie)}>
                Confirm
              </button>
            </div>
          </div>
        </Dialog>
      )}

      {modal.type === 'add' && (
        <Dialog title="ADD MOVIE" onClose={handleCloseModal}>
          <MovieForm onSubmit={handleAddMovie} />
        </Dialog>
      )}

      <Body handleMovieClick={handleMovieClick} movies={sortedMovies} onEditMovie={handleOpenEditModal} onDeleteMovie={handleOpenDeleteModal} />
      <Counter initialValue={0} />
    </>
  )
}

export default App
