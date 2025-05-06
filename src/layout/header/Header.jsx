import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        
        {/* Group: Logo + Links */}
        <div className="header__left">
          <div className="header__logo">
            <Link to="/" className="header__brand">
              <img src="/image.png" alt="Yesjay Logo" className="header__logo-img" />
            </Link>
          </div>

          <nav className="header__nav">
            <Link to="/" className="header__link">Home</Link>
            <Link to="/services" className="header__link">Services</Link>
            <Link to="/about" className="header__link">About</Link>
            <Link to="/contact" className="header__link">Contact us</Link>
          </nav>
        </div>

        {/* Right: Consultation Button + Menu Icon */}
        <div className="header__right">
          <button className="header__consult-btn">
            Book Consultation
          </button>

          <button className="header__menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="header__menu-svg">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
