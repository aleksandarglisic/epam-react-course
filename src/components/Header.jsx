const Header = ({ topLeft, center, topRight }) => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-top">
                    <div className="header-left">{topLeft}</div>
                    <div className="header-right">{topRight}</div>
                </div>
                {center}
            </div>
        </header>
    );
};

export default Header;
