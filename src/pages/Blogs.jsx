import { useLoaderData } from "react-router-dom";
import Blog from "../components/Blog";


const Blogs = () => {
    const blogs = useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>



        </div>
    );
};

export default Blogs;