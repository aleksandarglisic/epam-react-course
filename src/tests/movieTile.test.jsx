import { fireEvent, render } from '@testing-library/react';
import MovieTile from "../components/MovieTile";

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

describe('MovieTile Component', () => {
    it('renders movie title, genres, year and image', () => {
        const { getByText, getByAltText } = render(
            <MovieTile movieInfo={testMovies[0]} onMovieClick={onMovieClick} />
        );

        expect(getByText(testMovies[0].title)).toBeInTheDocument();
        expect(getByText(testMovies[0].genres.join(', '))).toBeInTheDocument();
        expect(getByText(`Year: ${testMovies[0].releaseYear}`)).toBeInTheDocument();
        expect(getByAltText(testMovies[0].title)).toBeInTheDocument();
    });

    it('calls onMovieClick callback when image is clicked', () => {
        const { getByAltText } = render(
            <MovieTile movieInfo={testMovies[0]} onMovieClick={onMovieClick} />
        );

        const image = getByAltText(testMovies[0].title);
        fireEvent.click(image);

        expect(onMovieClick).toHaveBeenCalledWith(testMovies[0]);
    });
});
