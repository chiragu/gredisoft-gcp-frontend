import BlogList from './BlogList';
import { Link } from "react-router-dom";

const Blog = ({blogs}) => {

    return ( 
        <div className="blog">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            <span className="new-blog-button"><button className="btn btn-success"><Link to="/blog/create">+ New Blog</Link></button></span>
        </div>
       
     );
}
 
export default Blog;