import SearchForm from "./SearchForm";

const Header = ({ onSearch }) => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-top">
                    <div className="logo">NetflixRoulette</div>
                    <button className="add-movie-btn">+ Add Movie</button>
                </div>
                <div className="header-center">
                    <SearchForm onSearch={onSearch} placeholder={'What do you want to watch?'} />
                </div>
            </div>
        </header>
    );
};

export default Header;
