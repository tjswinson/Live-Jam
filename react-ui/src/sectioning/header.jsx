import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <header>
            <div className="y-wrap">
                <h1>Live Jam</h1>
            </div>
               <nav className="y-wrap navs navs--justify">
                <div><NavLink to="/">Home</NavLink></div>
                <ul className="navs navs--items">
                    <li><NavLink to="/Login">Login</NavLink></li>
                     <li><NavLink to="/UserForm">Register</NavLink></li>
                </ul>
            </nav>
            
        </header>
    )
};
export default Header;