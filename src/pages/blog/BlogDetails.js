import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const BlogDetails = ({blogs, setBlogs}) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const filteredBlogs = blogs.filter((t) => t.id === Number(id));
    const blog = filteredBlogs[0];

    const deleteBlog = (key) => {        
        const filteredList = blogs.filter((t) => t.id !== key) ;
        setBlogs(filteredList);        
        navigate("/blog");
    }

    return ( 
        <div className="card my-card blog-details">
            {blog && (
                <article>
                    <div className="card-header my-card-header">{ blog.title }</div> 
                    <div className="card-body my-card-body blog-text">
                        <p className="text-muted">Written by {blog.author} </p>
                        <div style={{whiteSpace: "pre-wrap"}}>{ blog.body } </div>
                        <br/>
                        <button className="btn btn-danger" onClick={() => {deleteBlog(Number(id))}} >Delete</button>
                    </div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;