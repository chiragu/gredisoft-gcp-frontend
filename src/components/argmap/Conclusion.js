import { useState } from "react";

const Conclusion = ({conclusion, setConclusion}) => {

    const [isSelected, setIsSelected] = useState(false);
    const edit = (
        <div className="card-body my-card-body editor">
            <textarea
            rows="1"
            onBlur={() => setIsSelected(false)}
            value={conclusion}
            onChange={(e) => setConclusion(e.target.value)}
             />
        </div>
    );
    const noEdit = (
        <div style={{ whiteSpace: "pre-line" }} className="card-body my-card-body" onClick={() => setIsSelected(true)}>{conclusion}</div>
    );

    return ( 
        <div>{isSelected ? edit : noEdit}</div>
     );
}
 
export default Conclusion;