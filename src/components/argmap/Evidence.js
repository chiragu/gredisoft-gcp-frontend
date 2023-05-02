import Popup from 'reactjs-popup';
import { useState } from "react";

const Evidence = ({title, body, source, id, deleteEvidence, updateEvidence}) => {


    const [eviTitle, setEviTitle] = useState(title);
    const [eviBody, setEviBody] = useState(body);
    const [eviSource, setEviSource] = useState(source);

    const truncate = (str, n) => {
        return (str.length > n) ? str.slice(0, n-1) + ' ...' : str;
    };

    const updateLocalState = () => {
        setEviTitle(title);
        setEviBody(body);
        setEviSource(source);
    }

    return (  
        <Popup onOpen={()=> {updateLocalState()}} onClose={()=> {updateEvidence(eviTitle, eviBody, eviSource, id)}} trigger={
            <div className="card my-card evidence-card">
                <div className="card-header my-card-header">{title}</div>
                <div className="card-body my-card-body">
                    {truncate(body, 100)}
                    <br/><br/><a href={source}>Source</a>
                    <span className="material-symbols-outlined" onClick={() => {deleteEvidence(id)}}>delete</span>  
                </div>                                  
            </div>
        }
        modal
        nested
        >

       <div className="card my-card evidence-popup">
            <div className="card-header my-card-header">Edit Evidence</div>
            <div className="card-body my-card-body">
                <form>
                    <label>Evidence Title:</label>
                    <input 
                        type="text" 
                        required
                        value = { eviTitle }
                        onChange = {(e)=> setEviTitle(e.target.value)}
                    />
                    <label>Evidence Body:</label>
                    <textarea 
                        required
                        value = { eviBody }
                        onChange = {(e)=> setEviBody(e.target.value)}
                    />
                    <label>Source:</label>
                    <input 
                        type="text" 
                        required
                        value = { eviSource }
                        onChange = {(e)=> setEviSource(e.target.value)}
                    />                   
                </form>
            </div>
        </div> 
        
        </Popup>
);
}
 
export default Evidence;