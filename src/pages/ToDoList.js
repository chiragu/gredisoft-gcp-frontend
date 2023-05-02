// components
import ListItemDetails from "../components/todolist/ListItemDetails";
import ListItemForm from "../components/todolist/ListItemForm";


const ToDoList = ({todolist, setTodolist, idCounter, setIdCounter}) => {

    const deleteItem = (key) => {
        const filteredList = todolist.filter((t) => t._id !== key) ;
        setTodolist(filteredList);
    }

    const addItem = (title, body) => {
        setIdCounter(idCounter + 1);
        const _id = idCounter;
        const createdAt = new Date().toISOString(); 
        const listItem = {_id, title, body, createdAt};
        setTodolist([...todolist, listItem]);
    }

    // The component to return for the Home Page
    return(
        <div className="todolist-container">
            <div className="todolist">
                {todolist && todolist.map((todolistItem) => (
                    <ListItemDetails key={todolistItem._id} todolistItem={todolistItem} deleteItem={deleteItem}/> 
                ))}
            </div>
            <ListItemForm addItem={addItem}/>
        </div>
    );
}

export default ToDoList;