import GenreSelect from "./GenreSelect";
import SortControl from "./SortControl";

const Navbar = ({
    genres,
    selectedGenre,
    onGenreSelect,
    sortingOptions,
    onSortChange,
    currentSelection
}) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <GenreSelect
                    genres={genres}
                    selectedGenre={selectedGenre}
                    onSelect={onGenreSelect}
                />
            </div>

            <div className="navbar-right">
                <SortControl onSortChange={onSortChange} currentSelection={currentSelection} sortingOptions={sortingOptions} />
            </div>
        </nav>
    );
};

export default Navbar;
