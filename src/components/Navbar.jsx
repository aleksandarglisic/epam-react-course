const Navbar = ({
    renderLeft,
    renderRight
}) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                {renderLeft}
            </div>

            <div className="navbar-right">
                {renderRight}
            </div>
        </nav>
    );
};

export default Navbar;
