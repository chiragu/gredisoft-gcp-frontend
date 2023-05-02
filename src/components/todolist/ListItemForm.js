import { useState } from "react";


const ListItemForm = ({ addItem }) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        addItem(title, body);
        setTitle("");
        setBody("");
        setError(null);
    }

    return (
        <div className="card my-card">
            <form className="todo-form" onSubmit={handleSubmit}>
                <div className="card-header my-card-header">
                Add a New Item
                </div>
                <div className="card-body my-card-body">
                    <label>Title:</label>
                    <input 
                        type="text"
                        required
                        onChange = {(e) => setTitle(e.target.value)}
                        value = {title}
                    />

                    <label>Details:</label>
                    <textarea
                        onChange = {(e) => setBody(e.target.value)}
                        value = {body}
                    />

                    <button className="btn btn-success">Add Item</button>

                    {error && <div className="error">{error}</div>}
                    </div>
            </form>
        </div>


    );
}

export default ListItemForm;