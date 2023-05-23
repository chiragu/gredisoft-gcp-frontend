import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const TaskEditor = ({data, setData}) => {

    const { user } = useAuthContext();
    const updateTasks = async (data) => {
        const tasks = {tasks: data};

        fetch('/api/admin/tasks', {
            method: 'PATCH',
            body: JSON.stringify(tasks),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        .then(res =>  {
            if (!res.ok) {
                throw Error("Error: Could not store to database!");
            }
            return res.json();
        })
        .catch(err => {
            alert(err.message);            
        });

    }

    const [isSelected, setIsSelected] = useState(false);
    const edit = (
        <div className="card-body my-card-body editor">
            <textarea
            onBlur={() => {setIsSelected(false); updateTasks(data);}}
            value={data}
            onChange={(e) => setData(e.target.value)}
            style={{height: "60vh"}}
             />
        </div>
    );
    const noEdit = (
        <div style={{ whiteSpace: "pre-line" }} className="card-body my-card-body" onClick={() => setIsSelected(true)}>{data}</div>
    );

    return ( 
        <div>{isSelected ? edit : noEdit}</div>
     );
}
 
export default TaskEditor;