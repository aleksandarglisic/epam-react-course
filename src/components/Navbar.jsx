import GenreSelect from "./GenreSelect";

const Navbar = ({
    genres,
    selectedGenre,
    onGenreSelect,
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
                <span className="sort-label">Sort by</span>
            </div>
        </nav>
    );
};

export default Navbar;
