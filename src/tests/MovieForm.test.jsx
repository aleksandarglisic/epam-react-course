import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieForm from '../components/MovieForm';
import { genres } from '../const/movies';

vi.mock('react-select', () => {
    return {
        default: ({ options, value, onChange, inputId }) => {
            return (
                <select
                    data-testid={inputId}
                    multiple
                    value={value.map(v => v.value)}
                    onChange={e => {
                        const selectedOptions = Array.from(e.target.selectedOptions).map(opt => ({
                            value: opt.value,
                            label: opt.label,
                        }));
                        onChange(selectedOptions);
                    }}
                >
                    {options.map(opt => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            );
        },
    };
});

describe('MovieForm', () => {
    it('renders the form with initial values', () => {
        const initialMovie = {
            title: 'Inception',
            releaseDate: '2010-07-16',
            movieUrl: 'https://example.com',
            rating: 8.8,
            genres: ['sci-fi'],
            duration: 148,
            description: 'A mind-bending thriller.',
        };

        render(<MovieForm initialMovie={initialMovie} onSubmit={vi.fn()} />);

        expect(screen.getByLabelText(/title/i)).toHaveValue('Inception');
        expect(screen.getByLabelText(/release date/i)).toHaveValue('2010-07-16');
        expect(screen.getByLabelText(/movie url/i)).toHaveValue('https://example.com');
        expect(screen.getByLabelText(/rating/i)).toHaveValue(8.8);
        expect(screen.getByLabelText(/runtime/i)).toHaveValue('148');
        expect(screen.getByLabelText(/overview/i)).toHaveValue('A mind-bending thriller.');
    });

    it('submits the form with selected values', async () => {
        const onSubmit = vi.fn();
        render(<MovieForm onSubmit={onSubmit} />);
        const user = userEvent.setup();

        await user.type(screen.getByLabelText(/title/i), 'Matrix');
        await user.type(screen.getByLabelText(/release date/i), '1999-03-31');
        await user.type(screen.getByLabelText(/movie url/i), 'https://matrix.com');
        await user.type(screen.getByLabelText(/rating/i), '9.0');
        await user.type(screen.getByLabelText(/runtime/i), '136');
        await user.type(screen.getByLabelText(/overview/i), 'Sci-fi action movie.');

        const genreSelect = screen.getByTestId('genres');
        userEvent.selectOptions(genreSelect, [genres[0].toLowerCase(), genres[1].toLowerCase()]);

        await user.click(screen.getByRole('button', { name: /save/i }));

        expect(onSubmit).toHaveBeenCalledOnce();
        expect(onSubmit).toHaveBeenCalledWith(
            expect.objectContaining({
                title: 'Matrix',
                releaseDate: '1999-03-31',
                movieUrl: 'https://matrix.com',
                rating: '9',
                runtime: '136',
                overview: 'Sci-fi action movie.',
                genres: [genres[0].toLowerCase(), genres[1].toLowerCase()],
            })
        );
    });
});
