import { useState } from "react";

const Reasoning = ({reasoning, setReasoning}) => {

    const [isSelected, setIsSelected] = useState(false);
    const edit = (
        <div className="card-body my-card-body editor">
            <textarea
            onBlur={() => setIsSelected(false)}
            value={reasoning}
            onChange={(e) => setReasoning(e.target.value)}
             />
        </div>
    );
    const noEdit = (
        <div style={{ whiteSpace: "pre-line" }} className="card-body my-card-body" onClick={() => setIsSelected(true)}>{reasoning}</div>
    );

    return ( 
        <div>{isSelected ? edit : noEdit}</div>
     );
}
 
export default Reasoning;