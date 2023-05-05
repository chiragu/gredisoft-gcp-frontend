import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (        
        <header>
            <h1><NavLink to="/">Gredisoft</NavLink></h1>
            <span className="material-symbols-outlined hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>{isNavExpanded? "close": "menu"}</span>
            <nav className={isNavExpanded? "navbar expanded" : "navbar"}>                
                <div className="links">
                    <NavLink to="/todolist">To Do List</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/spaceinfo">Space Info</NavLink>
                    <NavLink to="/argmap">Arg Map</NavLink>
                    <NavLink to="/m3d">M3D</NavLink>
                    <NavLink to="/trivia">Trivia</NavLink>
                    <NavLink to="/goalie">Goalie</NavLink>
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;