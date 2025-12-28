import './App.css'
import MovieListPage from "./components/MovieListPage"
import { Route, Routes } from "react-router"
import SearchForm from "./components/SearchForm"
import MovieDetailsWrapper from "./components/MovieDetailsWrapper"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieListPage />}>
        <Route index element={<SearchForm />} />
        <Route path=":movieId" element={<MovieDetailsWrapper />} />
      </Route>
    </Routes>
  )
}

export default App
