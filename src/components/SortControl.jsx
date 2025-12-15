export default function SortControl({ currentSelection, onSortChange, sortingOptions }) {
    const handleSortChange = (e) => {
        onSortChange(e.target.value);
    };

    return (
        <div>
            <label className="sort-label mr-4">Sort by:</label>
            <select value={currentSelection} onChange={handleSortChange}>
                {sortingOptions.map((sort, index) => {
                    return <option key={index} value={sort}>{sort}</option>
                })}
            </select>
        </div>
    );
};
