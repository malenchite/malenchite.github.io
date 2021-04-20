import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Header(props) {
  const location = useLocation();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Link to="/" className="title-name">Steven Israel</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact {location.pathname === "/contact" ? <span className="sr-only">(current)</span> : ""}
            </Link>
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
              Portfolio {location.pathname === "/portfolio" ? <span className="sr-only">(current)</span> : ""}
            </Link>
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              About {location.pathname === "/" ? <span className="sr-only">(current)</span> : ""}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;