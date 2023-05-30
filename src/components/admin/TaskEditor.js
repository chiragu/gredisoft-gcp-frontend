import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

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

    const editorModules = {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
          ['clean']
        ],
    }

    const editorFormats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'code',
        'list', 'bullet', 'indent',
    ]
    

    const [isSelected, setIsSelected] = useState(false);
    const edit = (
        <div className="card-body" style={{background: "rgba(75, 68, 66, 1)", border: "1px solid white", borderTop: "none"}}>
            <ReactQuill
            modules={editorModules}
            formats={editorFormats}
            onBlur={() => {setIsSelected(false); updateTasks(data);}}
            onChange={(e) => setData(e)}
            value={data}
            style={{background: "white"}}          

             />
        </div>
    );
    const noEdit = (
        <div dangerouslySetInnerHTML={{__html: data}} className="card-body my-card-body" onClick={() => setIsSelected(true)}></div>
    );

    return ( 
        <div>{isSelected ? edit : noEdit}</div>
     );
}
 
export default TaskEditor;