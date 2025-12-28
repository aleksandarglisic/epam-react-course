import { useEffect, useMemo, useState } from "react"
import MovieService from "../services/MovieService"
import Body from "./Body"
import { navbar_genres, sorting } from "../const/movies"
import Header from "./Header"
import Navbar from "./Navbar"
import GenreSelect from "./GenreSelect"
import SortControl from "./SortControl"
import Dialog from "./Dialog"
import MovieForm from "./MovieForm"
import { Logo } from "./Logo"
import { AddMovieButton } from "./AddMovieButton"
import { SearchIconButton } from "./SearchIconButton"
import { useSearchParams, Outlet, useNavigate } from "react-router"
import { useParams } from "react-router-dom"


export default function MovieListPage() {
    const navigate = useNavigate()
    const urlParams = useParams()
    const movieId = urlParams.movieId
    const isDetailsPage = Boolean(movieId)
    const [searchParams, setSearchParams] = useSearchParams()
    const [movieList, setMovieList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const searchQuery = searchParams.get("query") ?? ""
    const selectedGenre = searchParams.get("genre") ?? navbar_genres[0]
    const sortSelection = searchParams.get("sortBy") ?? sorting[0].value
    const sortOrder = searchParams.get("order") ?? "desc"

    const [selectedMovie, setSelectedMovie] = useState(null)

    const [modal, setModal] = useState({ type: null, movie: null })

    const updateParams = (newValues) => {
        setSearchParams({
            query: searchQuery,
            genre: selectedGenre,
            sortBy: sortSelection,
            order: sortOrder,
            ...newValues
        })
    }

    const handleOpenAddModal = () => setModal({ type: "add", movie: null })
    const handleOpenEditModal = (movie) => setModal({ type: "edit", movie })
    const handleOpenDeleteModal = (movie) => setModal({ type: "delete", movie })
    const handleCloseModal = () => setModal({ type: null, movie: null })

    const handleAddMovie = (movie) => console.log('Adding a movie', movie)
    const handleEditMovie = (movie) => console.log('Editing a movie', movie)
    const handleDeleteMovie = (movie) => console.log('Deleting a movie', movie)

    const handleSearch = (q) => updateParams({ query: q })
    const handleGenreSelect = (g) => updateParams({ genre: g })
    const handleSorting = (s) => updateParams({ sortBy: s })
    const handleSortOrderChange = (o) => updateParams({ order: o })

    const params = useMemo(() => {
        const baseParams = {
            sortBy: sortSelection,
            sortOrder,
            offset: 0,
            limit: 10,
        }

        if (searchQuery !== "") {
            baseParams.search = searchQuery
            baseParams.searchBy = 'title'
        }

        if (selectedGenre !== "all") {
            baseParams.filter = selectedGenre
        }

        return baseParams
    }, [sortSelection, sortOrder, searchQuery, selectedGenre])


    const getMovies = async (signal) => {
        setLoading(true)
        try {
            const res = await MovieService.getMovies(params, { signal })
            return res.data.data
        } catch (err) {
            if (err.name === "CanceledError" || err.name === "AbortError") {
                return
            }
            console.error("Failed to fetch movies", err)
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    const handleMovieClick = (movie) => {
        navigate(`/${movie.id}?${searchParams.toString()}`)
    }

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            const movies = await getMovies(controller.signal)
            if (movies) {
                setMovieList(movies)
            }
        })()
        return () => {
            controller.abort()
        }
    }, [params])

    return (
        <>
            <Header
                topLeft={<Logo />}
                topRight={
                    isDetailsPage
                        ? <SearchIconButton onClick={() => navigate(`/?${searchParams.toString()}`)} />
                        : <AddMovieButton onClick={handleOpenAddModal} />
                }
                center={<Outlet context={{ onSearch: handleSearch, query: searchQuery }} />}
                movie={selectedMovie}

            />

            <Navbar
                renderLeft={<GenreSelect genres={navbar_genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />}
                renderRight={
                    <SortControl
                        onSortChange={handleSorting}
                        currentSelection={sortSelection}
                        sortingOptions={sorting}
                        currentOrder={sortOrder}
                        onOrderChange={handleSortOrderChange}
                    />
                }
            />
            {
                error ?
                    <p>Error loading movies</p> :
                    loading ?
                        <p>Loading movies...</p> :
                        <Body handleMovieClick={handleMovieClick} movies={movieList} onEditMovie={handleOpenEditModal} onDeleteMovie={handleOpenDeleteModal} />
            }


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
        </>
    )
}
