import Popup from 'reactjs-popup';
import Moon3DCanvas from '../components/m3d/Moon3DCanvas';
import Earth3DCanvas from '../components/m3d/Earth3DCanvas';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Metaverse3DCanvas from '../components/m3d/Metaverse3DCanvas';



const M3D = () => {

  let location = useLocation();

    return ( 
            <div className="card my-card">
                <div className="card-header my-card-header">
                  <ul className="nav nav-tabs card-header-tabs my-card-header-tabs">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/m3d/moon">Moon 3D</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink className="nav-link" to="/m3d/earth">Earth 3D</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/m3d/metaverse">Metaverse 3D</NavLink>
                      </li>
                  </ul>
                </div>
                <div className="card-body my-card-body">
                    <div className="m3d-canvas">
                        { location.pathname === '/m3d/moon' && <Moon3DCanvas /> }
                        { location.pathname === '/m3d/earth' && <Earth3DCanvas /> }
                        { location.pathname === '/m3d/metaverse' && <Metaverse3DCanvas /> }
                    </div>
                    <Popup className="m3d-fullscreen-popup" trigger= {<span className="material-symbols-outlined">open_in_full</span>}   modal nested>
                      {close => (<div className="m3d-fullscreen-canvas">
                        { location.pathname === '/m3d/moon' && <Moon3DCanvas /> }
                        { location.pathname === '/m3d/earth' && <Earth3DCanvas /> }
                        { location.pathname === '/m3d/metaverse' && <Metaverse3DCanvas /> }
                        <span className="close-m3d-fullscreen" onClick={()=> {close();}}>×</span>
                      </div>)}
                    </Popup>
                </div>
            </div>           

     );
}
 
export default M3D;