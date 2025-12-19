export default function SortControl({ currentSelection, onSortChange, sortingOptions, currentOrder, onOrderChange }) {
    const handleSortChange = (e) => {
        onSortChange(e.target.value)
    }

    const toggleOrder = () => {
        onOrderChange(currentOrder === 'asc' ? 'desc' : 'asc')
    }

    return (
        <div>
            <label className="sort-label mr-4">Sort by:</label>
            <select value={currentSelection} onChange={handleSortChange}>
                {sortingOptions.map((sort) => (
                    <option key={sort.value} value={sort.value}>
                        {sort.label}
                    </option>
                ))}
            </select>

            <button
                onClick={toggleOrder}
                className="sort-toggle-btn"
                title={currentOrder === 'asc' ? 'Ascending' : 'Descending'}
            >
                {currentOrder === 'asc' ? '↑' : '↓'}
            </button>

        </div>
    )
}
