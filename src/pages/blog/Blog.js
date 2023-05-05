import BlogList from './BlogList';

const Blog = ({blogs}) => {

    return ( 
        <div className="blog">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
       
     );
}
 
export default Blog;