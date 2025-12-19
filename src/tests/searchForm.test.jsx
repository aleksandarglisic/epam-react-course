import { fireEvent, render, screen } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

const placeholder = 'What do you want to watch?'
const initialValue = 'Hello'
const changedValue = 'Hello World!'

describe('Search Form Component', () => {

    it('Renders initial value', () => {
        render(<SearchForm initialQuery={initialValue} placeholder={placeholder} />);
        const searchInput = screen.getByPlaceholderText(placeholder)
        expect(searchInput).toBeInTheDocument();
        expect(searchInput.value).toBe(initialValue)
    });

    it('Test that after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
        const mockCallback = vi.fn();
        const { getByPlaceholderText, getByText } = render(<SearchForm initialQuery={initialValue} placeholder={placeholder} onSearch={mockCallback} />);

        const searchInput = getByPlaceholderText(placeholder)
        expect(searchInput).toBeInTheDocument();

        const searchButton = getByText('Search');
        expect(searchButton).toBeInTheDocument();

        fireEvent.change(searchInput, { target: { value: changedValue } })
        fireEvent.click(searchButton);

        expect(mockCallback.mock.calls[0][0]).toBe(changedValue);
    });

    it('Test that after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
        const mockCallback = vi.fn();
        const { getByPlaceholderText } = render(<SearchForm initialQuery={initialValue} placeholder={placeholder} onSearch={mockCallback} />);

        const searchInput = getByPlaceholderText(placeholder)
        expect(searchInput).toBeInTheDocument();

        fireEvent.change(searchInput, { target: { value: changedValue } })
        fireEvent.keyUp(searchInput, { key: 'Enter', code: 'Enter' });

        expect(mockCallback.mock.calls[0][0]).toBe(changedValue);
    });

});
