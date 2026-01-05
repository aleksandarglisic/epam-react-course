import { fireEvent, render } from '@testing-library/react'
import MovieTile from "../components/MovieTile"

const testMovies = [
    {
        id: 1,
        title: 'Test Movie 1',
        release_date: '2000',
        genres: ['Action', 'Comedy'],
        poster_path: 'test1.jpg',
    },
]

const onMovieClick = vi.fn()
const onEditMovie = vi.fn()
const onDeleteMovie = vi.fn()

describe('MovieTile Component', () => {

    it('renders movie title, genres, year and image', () => {
        const { getByText, getByAltText } = render(
            <MovieTile
                movieInfo={testMovies[0]}
                onMovieClick={onMovieClick}
                onEditMovie={onEditMovie}
                onDeleteMovie={onDeleteMovie}
            />
        )

        expect(getByText(testMovies[0].title)).toBeInTheDocument()
        expect(getByText(testMovies[0].genres.join(', '))).toBeInTheDocument()
        expect(getByText(`Year: ${testMovies[0].release_date}`)).toBeInTheDocument()
        expect(getByAltText(testMovies[0].title)).toBeInTheDocument()
    })

    it('calls onMovieClick when poster image is clicked', () => {
        const { getByAltText } = render(
            <MovieTile
                movieInfo={testMovies[0]}
                onMovieClick={onMovieClick}
                onEditMovie={onEditMovie}
                onDeleteMovie={onDeleteMovie}
            />
        )

        fireEvent.click(getByAltText(testMovies[0].title))

        expect(onMovieClick).toHaveBeenCalledWith(testMovies[0])
    })

})
