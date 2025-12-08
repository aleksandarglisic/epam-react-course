import { fireEvent, render } from '@testing-library/react';
import GenreSelect from "../components/GenreSelect";

const genres = ['all', 'documentary', 'comedy', 'horror', 'crime']
const selectedGenre = genres[0]
const onSelect = vi.fn();

describe('Genre Select Component', () => {

    it('Test that component renders all genres passed in props', () => {
        const { getByText } = render(
            <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />
        );

        genres.forEach((genre) => {
            expect(getByText(genre)).toBeInTheDocument();
        });
    });

    it("Test that component highlights a selected genre passed in props", () => {
        const { getByText } = render(
            <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />
        );

        const selectedGenreButton = getByText(selectedGenre);
        expect(selectedGenreButton).toHaveClass("selected");
    });

    it('Test that after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
        const { getByText } = render(
            <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />
        );

        const genreToSelect = genres[1];
        const dramaButton = getByText(genreToSelect);
        fireEvent.click(dramaButton);

        expect(onSelect).toHaveBeenCalledWith(genreToSelect);

    });

});
