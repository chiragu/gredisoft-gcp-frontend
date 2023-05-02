import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CreateBlog = ({blogs, setBlogs, idCounter, setIdCounter}) => {


    const [title, setTitle] = useState(""); 
    const [body, setBody] = useState(""); 
    const [author, setAuthor] = useState("Alice"); 
    const navigate = useNavigate();

    const addBlog = (e) => {
        // stop default refersh
        e.preventDefault();

        setIdCounter(idCounter + 1);
        const id = idCounter;
        const blog = {title, body, author, id};
        setBlogs([ blog, ...blogs,]);
        navigate("/blog");
    }

    return ( 
        <div className="card my-card create">
            <div className="card-header my-card-header"><h2>Add a New Blog</h2></div>
            <div className="card-body my-card-body">
                <form onSubmit={addBlog}>
                    <label>Blog Title:</label>
                    <input 
                        type="text" 
                        required
                        value = { title }
                        onChange = {(e)=> setTitle(e.target.value)}
                    />
                    <label>Blog Body:</label>
                    <textarea 
                        required
                        value = { body }
                        onChange = {(e)=> setBody(e.target.value)}
                    />

                    <label>Blog Author:</label>
                    <select
                        value= {author}
                        onChange = {(e)=> setAuthor(e.target.value)}
                    >
                        <option value="Alice">Alice</option>
                        <option value="Bob">Bob</option>
                    </select>
                    {<button className="btn btn-success">Add Blog</button> }                    
                </form>
            </div>
        </div> 
    );
}
 
export default CreateBlog;