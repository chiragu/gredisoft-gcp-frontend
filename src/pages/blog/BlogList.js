import { Link } from "react-router-dom";

const BlogList = ({blogs , title}) => {

    return ( 
        <div className="card my-card blog-list">
            <h2> {title } <div className="new-blog-button"><button className="btn btn-success"><Link to="/blog/create">+ New Blog</Link></button></div></h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <Link to= {`/blog/${blog.id}` }>
                        <div className="card-header my-card-header">{ blog.title }</div>
                        <div className="card-body my-card-body">
                            <p>{blog.body.split(' ').slice(0, 20).join(" ") + "..."}</p>
                            <p className="text-muted">Written by { blog.author} </p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;