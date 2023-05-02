import { useNavigate } from 'react-router-dom';

const MenuBar = ({addEvidence, save, upload}) => {

    const navigate = useNavigate();
    return ( 
        <div className="button-group">
            <button onClick={()=>{addEvidence()}} className="btn btn-warning">+ Add Evidence</button>
            <button onClick={()=>{save()}} className="btn btn-success">Save</button>
            <button onClick={()=>{upload()}} className="btn btn-danger">Upload</button>
            <button onClick={() => {navigate("/argmap/report");}} className="btn btn-primary">Generate Report</button>
            <button style={{float: 'right'}} onClick={() => {navigate("/argmap/instructions");}} className="btn btn-dark">Instructions</button><br className="clear"/>
        </div>
     );
}
 
export default MenuBar;