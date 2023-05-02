import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (        
        <header>
            <h1><NavLink to="/">Gredisoft</NavLink></h1>
            <nav className="navbar">                
                <div className="links">
                    <NavLink to="/todolist">To Do List</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/spaceinfo">Space Info</NavLink>
                    <NavLink to="/argmap">Arg Map</NavLink>
                    <NavLink to="/m3d">M3D</NavLink>
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;