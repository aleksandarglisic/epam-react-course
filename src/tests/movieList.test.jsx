import { fireEvent, render, within } from '@testing-library/react'
import MovieList from "../components/MovieList"

const testMovies = [
    {
        id: 1,
        title: 'Test Movie 1',
        release_date: '2000',
        genres: ['Action', 'Comedy'],
        poster_path: 'test1.jpg',
    },
    {
        id: 2,
        title: 'Test Movie 2',
        release_date: '2001',
        genres: ['Drama'],
        poster_path: 'test2.jpg',
    },
]

const onMovieClick = vi.fn()
const onEditMovie = vi.fn()
const onDeleteMovie = vi.fn()

describe('MovieList Component', () => {

    it('renders all movies passed in props', () => {
        const { getAllByTestId } = render(
            <MovieList
                movies={testMovies}
                onMovieClick={onMovieClick}
                onEditMovie={onEditMovie}
                onDeleteMovie={onDeleteMovie}
            />
        )

        const movieContainers = getAllByTestId('movie-tile')
        expect(movieContainers).toHaveLength(testMovies.length)

        movieContainers.forEach((container, index) => {
            const movie = testMovies[index]
            const utils = within(container)

            expect(utils.getByText(movie.title)).toBeInTheDocument()
            expect(utils.getByText(movie.genres.join(', '))).toBeInTheDocument()
            expect(utils.getByText(`Year: ${movie.release_date}`)).toBeInTheDocument()
            expect(utils.getByAltText(movie.title)).toBeInTheDocument()
        })
    })

    it('calls onMovieClick when a movie poster is clicked', () => {
        const { getAllByAltText } = render(
            <MovieList
                movies={testMovies}
                onMovieClick={onMovieClick}
                onEditMovie={onEditMovie}
                onDeleteMovie={onDeleteMovie}
            />
        )

        fireEvent.click(getAllByAltText(testMovies[0].title)[0])

        expect(onMovieClick).toHaveBeenCalledWith(testMovies[0])
    })

})
