import {render, fireEvent, getByTitle} from '@testing-library/react'
import SortControl from "../components/SortControl"

const sortingOptions = [
    { label: 'Title', value: 'title' },
    { label: 'Year', value: 'year' },
    { label: 'Rating', value: 'rating' }
]

const onSortChange = vi.fn()
const onOrderChange = vi.fn()

describe('SortControl Component', () => {

    it('renders all sorting options passed in props', () => {
        const { getByText } = render(
            <SortControl
                currentSelection={sortingOptions[0].value}
                currentOrder="asc"
                onSortChange={onSortChange}
                onOrderChange={onOrderChange}
                sortingOptions={sortingOptions}
            />
        )

        sortingOptions.forEach(option => {
            expect(getByText(option.label)).toBeInTheDocument()
        })
    })

    it('sets the correct current selection', () => {
        const { getByDisplayValue } = render(
            <SortControl
                currentSelection={sortingOptions[1].value}
                currentOrder="asc"
                onSortChange={onSortChange}
                onOrderChange={onOrderChange}
                sortingOptions={sortingOptions}
            />
        )

        expect(getByDisplayValue(sortingOptions[1].label)).toBeInTheDocument()
    })

    it('calls onSortChange with correct value when a new option is selected', () => {
        const { getByRole } = render(
            <SortControl
                currentSelection={sortingOptions[0].value}
                currentOrder="asc"
                onSortChange={onSortChange}
                onOrderChange={onOrderChange}
                sortingOptions={sortingOptions}
            />
        )

        const select = getByRole('combobox');
        fireEvent.change(select, { target: { value: sortingOptions[2].value } })

        expect(onSortChange).toHaveBeenCalledWith(sortingOptions[2].value)
    });

    it('toggles sort order when the button is clicked', () => {
        const { getByTitle, rerender } = render(
            <SortControl
                currentSelection={sortingOptions[0].value}
                currentOrder="asc"
                onSortChange={onSortChange}
                onOrderChange={onOrderChange}
                sortingOptions={sortingOptions}
            />
        )

        const buttonAsc = getByTitle('Ascending')
        fireEvent.click(buttonAsc)
        expect(onOrderChange).toHaveBeenCalledWith('desc')

        onOrderChange.mockClear()

        rerender(
            <SortControl
                currentSelection={sortingOptions[0].value}
                currentOrder="desc"
                onSortChange={onSortChange}
                onOrderChange={onOrderChange}
                sortingOptions={sortingOptions}
            />
        )

        const buttonDesc = getByTitle('Descending')
        fireEvent.click(buttonDesc)
        expect(onOrderChange).toHaveBeenCalledWith('asc')
    })
})
