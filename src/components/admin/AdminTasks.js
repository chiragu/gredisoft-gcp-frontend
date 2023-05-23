import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import SkeletonListCard from "../skeletons/SkeletonListCard";
import TaskEditor from "./TaskEditor";

const AdminTasks = () => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuthContext();

    useEffect (()=>{

        fetch('/api/admin/tasks', {
            headers: {'Authorization': `Bearer ${user.token}`},
        })
        .then(res =>  {
            if (!res.ok) {
                throw Error("Could not fetch the data for that resource");
            }
            return res.json();
        })
        .then(data => {
            setData(data.tasks);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);            
        });

    }, [user]);

    return (
        <div>
            {!isPending && (  
            <div className="card my-card">
                <div className="card-header my-card-header">Tasks</div>
                    {data && <TaskEditor data={data} setData={setData}/>}  
                    {error && error}              
            </div>
            )}

            {isPending && <SkeletonListCard title="Tasks" /> } 
        </div>    
    );
}
 
export default AdminTasks;