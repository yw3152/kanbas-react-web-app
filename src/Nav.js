import { Link, useLocation } from "react-router-dom";
function Nav() {
    const { pathname } = useLocation();
    return (
        <nav className="nav nav-tabs mt-2">
            <Link to="/Labs/a3"
                  className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>Assignment3</Link>
            <Link to="/Labs/a4"
                  className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}>Assignment4</Link>
            <Link to="/Labs/a5"
                  className={`nav-link ${pathname.includes("a5") ? "active" : ""}`}>Assignment5</Link>
            <Link to="/Hello"
                  className={`nav-link ${pathname.includes("Hello") ? "active" : ""}`}>Hello World</Link>
            <Link to="/Kanbas"
                  className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
        </nav>
 );
}
export default Nav;