import { render, fireEvent } from '@testing-library/react';

import Counter from '../components/Counter';
const initialValue = 5
describe('Counter Component', () => {
    it('Renders initial value', () => {
        const { getByText } = render(<Counter initialValue={initialValue} />);
        expect(getByText('Counter Value: ' + initialValue)).toBeInTheDocument();
    });

    it('Decrement value by one', () => {
        const { getByText } = render(<Counter initialValue={initialValue} />);
        const decrementButton = getByText('Decrement');
        fireEvent.click(decrementButton);
        const expectedValue = initialValue - 1;
        expect(getByText('Counter Value: ' + expectedValue))

    });

    it('Increment value by one', () => {
        const { getByText } = render(<Counter initialValue={initialValue} />);
        const decrementButton = getByText('Increment');
        fireEvent.click(decrementButton);
        const expectedValue = initialValue + 1;
        expect(getByText('Counter Value: ' + expectedValue))
    });
});
