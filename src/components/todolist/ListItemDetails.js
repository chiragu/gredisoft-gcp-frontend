// date-fns
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const ListItemDetails = ({todolistItem, deleteItem }) => {

    

    // const completed = () => {  }


    return (
        <div className="card my-card">
            <div className="card-header my-card-header">{todolistItem.title}</div>
            <div className="card-body my-card-body">            
                <p>{todolistItem.body}</p><br/>
                {/* <p>Completed?: {todolist.isCompleted.toString()}</p> */}
                <p className="text-muted">{formatDistanceToNow(new Date(todolistItem.createdAt), {addSuffix: true})}</p>
                {/* <p>Updated: {todolist.updatedAt}</p> */}
                <span className="material-symbols-outlined" onClick={() => {deleteItem(todolistItem._id)}}>delete
                    {/* <button className="completed-button" onClick={completed}>Completed</button><br/> */}
                    {/* <button className="delete-button" onClick={deleteItem}>Delete</button>  */}
                                
                </span>
            </div>           
        </div>

    );
}

export default ListItemDetails;