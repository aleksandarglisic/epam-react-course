import Counter from "./components/Counter";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { genres } from "./const/movies";
import { useState } from "react";
import './App.css'

function App() {
  const [selectedGenre, setSelectedGenre] = useState(genres[0])

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre)
    console.log("Genre:", genre);
  };

  const handleSearch = (query) => {
    console.log("Search:", query);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Navbar genres={genres} selectedGenre={selectedGenre} onGenreSelect={handleGenreSelect} />
      <Counter initialValue={0} />
    </>
  )
}

export default App
