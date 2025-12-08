import { fireEvent, render, within } from '@testing-library/react';
import MovieList from "../components/MovieList";

const testMovies = [
    {
        id: 1,
        title: 'Test Movie 1',
        releaseYear: '2000',
        genres: ['Action', 'Comedy'],
        imageUrl: 'test1.jpg',
    },
    {
        id: 2,
        title: 'Test Movie 2',
        releaseYear: '2001',
        genres: ['Drama'],
        imageUrl: 'test2.jpg',
    },
];
const onMovieClick = vi.fn();

describe('MovieList Component', () => {

    it('renders all movies passed in props', () => {
        const { getAllByTestId } = render(
            <MovieList movies={testMovies} onMovieClick={onMovieClick} />
        );

        const movieContainers = getAllByTestId('movie-tile');
        expect(movieContainers.length).toBe(testMovies.length);

        movieContainers.forEach((container, index) => {
            const movie = testMovies[index];
            const utils = within(container);

            expect(utils.getByText(movie.title)).toBeInTheDocument();
            expect(utils.getByText(movie.genres.join(', '))).toBeInTheDocument();
            expect(utils.getByText(`Year: ${movie.releaseYear}`)).toBeInTheDocument();
            expect(utils.getByAltText(movie.title)).toBeInTheDocument();
        });
    });

    it('calls onMovieClick callback when a movie is clicked', () => {
        const { getAllByAltText } = render(
            <MovieList movies={testMovies} onMovieClick={onMovieClick} />
        );

        const firstMovieImage = getAllByAltText(testMovies[0].title)[0];
        fireEvent.click(firstMovieImage);

        expect(onMovieClick).toHaveBeenCalledWith(testMovies[0]);
    });

});
