import { useState } from "react";

const Title = ({ title, setTitle }) => {

    const [isSelected, setIsSelected] = useState(false);
    const edit = (
        <div className="card-header my-card-header title">
            <textarea
            style={{ height: "60px" }}
            onBlur={() => setIsSelected(false)}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title"
             />
        </div>
    );
    const noEdit = (
        <div className="card-header my-card-header title" onClick={() => setIsSelected(true)}>{title}</div>
    );

    return ( 
         <div>{isSelected ? edit : noEdit}</div>
     );
}
 
export default Title;