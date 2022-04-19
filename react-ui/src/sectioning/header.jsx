import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="header">
            <h1>Live Jam</h1>
        <header className="y-wrap">
          <nav className="navs">
            <NavLink to="/">Home</NavLink>
            <ul>
              <li><NavLink to="/eventSummary">Search Results</NavLink></li>
              <li><NavLink to="/favorites">Favorites</NavLink></li>
            </ul>
          </nav>
        </header>
      </div>
    )
};
export default Header;