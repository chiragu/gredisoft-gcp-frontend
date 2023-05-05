import Popup from 'reactjs-popup';
import M3DCanvas from '../components/m3d/M3DCanvas';

const M3D = () => {
    return ( 
            <div className="card my-card">
                <div className="card-header my-card-header">Moon 3D</div>
                <div className="card-body my-card-body">
                    <div className="m3d-canvas">
                        <M3DCanvas />
                    </div>
                    <Popup className="m3d-fullscreen-popup" trigger= {<span className="material-symbols-outlined">open_in_full</span>}   modal nested>
                      {close => (<div className="m3d-fullscreen-canvas">
                        <M3DCanvas />
                        <span className="close-m3d-fullscreen" onClick={()=> {close();}}>×</span>
                      </div>)}
                    </Popup>
                </div>
            </div>           

     );
}
 
export default M3D;