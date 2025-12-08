import { render, fireEvent } from '@testing-library/react';
import SortControl from "../components/SortControl";

const sortingOptions = ['title', 'year', 'rating'];
const onSortChange = vi.fn();

describe('SortControl Component', () => {

    it('renders all sorting options passed in props', () => {
        const { getByText } = render(
            <SortControl
                currentSelection={sortingOptions[0]}
                onSortChange={onSortChange}
                sortingOptions={sortingOptions}
            />
        );

        sortingOptions.forEach(option => {
            expect(getByText(option)).toBeInTheDocument();
        });
    });

    it('sets the correct current selection', () => {
        const { getByDisplayValue } = render(
            <SortControl
                currentSelection={sortingOptions[1]}
                onSortChange={onSortChange}
                sortingOptions={sortingOptions}
            />
        );
        expect(getByDisplayValue(sortingOptions[1])).toBeInTheDocument();
    });

    it('calls onSortChange callback with correct value when a new option is selected', () => {
        const { getByRole } = render(
            <SortControl
                currentSelection={sortingOptions[0]}
                onSortChange={onSortChange}
                sortingOptions={sortingOptions}
            />
        );

        const select = getByRole('combobox');
        fireEvent.change(select, { target: { value: sortingOptions[2] } });

        expect(onSortChange).toHaveBeenCalledWith(sortingOptions[2]);
    });

});
